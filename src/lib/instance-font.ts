/**
 * Pins a variable font to one weight and returns a static TTF.
 *
 * Build-time only. satori cannot use the site's woff2 files: they are variable
 * fonts, and its opentype.js fork dies reading `fvar` because the subsetter
 * dropped the `name` records that table points at. Stripping `fvar` "works"
 * but leaves the default master, which for Geologica is wght=100 — every
 * heading would render Thin.
 *
 * So the fonts are instanced properly, with the hb-subset wasm that ships
 * inside harfbuzzjs. Same files the browser loads, pinned to the weight the
 * design system asks for, no second copy of any face in the repo and no
 * Python in the build.
 */
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { decompress } from 'wawoff2';

type Hb = {
  memory: WebAssembly.Memory;
  malloc(n: number): number;
  free(p: number): void;
  hb_blob_create(data: number, len: number, mode: number, ud: number, d: number): number;
  hb_blob_destroy(b: number): void;
  hb_blob_get_data(b: number, lenOut: number): number;
  hb_face_create(blob: number, index: number): number;
  hb_face_destroy(f: number): void;
  hb_face_reference_blob(f: number): number;
  hb_subset_input_create_or_fail(): number;
  hb_subset_input_destroy(i: number): void;
  hb_subset_input_keep_everything(i: number): void;
  hb_subset_input_pin_axis_location(i: number, face: number, tag: number, value: number): number;
  hb_subset_or_fail(face: number, input: number): number;
};

const HB_MEMORY_MODE_WRITABLE = 2;
/** HB_TAG('w','g','h','t') */
const WGHT = 0x77676874;

/**
 * Resolved off the package's own entry point rather than `import.meta.url`:
 * this module is bundled into `dist/` before it runs, so a path relative to
 * the source file points at a directory that does not exist. The package
 * exports map only exposes the root, hence resolving the entry and stepping
 * sideways to the wasm.
 */
function wasmPath(): string {
  const entry = createRequire(import.meta.url).resolve('harfbuzzjs');
  return join(dirname(entry), 'harfbuzz-subset.wasm');
}

let hbPromise: Promise<Hb> | null = null;
function harfbuzz(): Promise<Hb> {
  hbPromise ??= (async () => {
    const { instance } = await WebAssembly.instantiate(await readFile(wasmPath()), {});
    return instance.exports as unknown as Hb;
  })();
  return hbPromise;
}

/** decompress once per file, instance once per (file, weight) */
const woffCache = new Map<string, Promise<Buffer>>();
const instanceCache = new Map<string, Promise<Buffer>>();

function readTtf(file: string): Promise<Buffer> {
  let p = woffCache.get(file);
  if (!p) {
    p = (async () => {
      // cwd, not import.meta.url: this runs from the bundled build output
      const path = join(process.cwd(), 'public', 'fonts', `${file}.woff2`);
      return Buffer.from(await decompress(await readFile(path)));
    })();
    woffCache.set(file, p);
  }
  return p;
}

/**
 * @param file basename in `public/fonts`, e.g. `Geologica-latin-ext`
 * @param weight the wght axis value to pin, e.g. 300
 */
export function instanceFont(file: string, weight: number): Promise<Buffer> {
  const key = `${file}@${weight}`;
  let p = instanceCache.get(key);
  if (p) return p;

  p = (async () => {
    const hb = await harfbuzz();
    const ttf = await readTtf(file);

    const src = hb.malloc(ttf.length);
    new Uint8Array(hb.memory.buffer, src, ttf.length).set(ttf);
    const blob = hb.hb_blob_create(src, ttf.length, HB_MEMORY_MODE_WRITABLE, 0, 0);
    const face = hb.hb_face_create(blob, 0);

    const input = hb.hb_subset_input_create_or_fail();
    if (!input) throw new Error(`hb-subset: could not create input for ${key}`);
    // keep every glyph and table; this is an instancing pass, not a diet
    hb.hb_subset_input_keep_everything(input);
    if (!hb.hb_subset_input_pin_axis_location(input, face, WGHT, weight)) {
      throw new Error(`hb-subset: ${file} has no wght axis to pin to ${weight}`);
    }

    const outFace = hb.hb_subset_or_fail(face, input);
    if (!outFace) throw new Error(`hb-subset: instancing failed for ${key}`);

    const outBlob = hb.hb_face_reference_blob(outFace);
    const lenPtr = hb.malloc(4);
    const dataPtr = hb.hb_blob_get_data(outBlob, lenPtr);
    const len = new Uint32Array(hb.memory.buffer, lenPtr, 1)[0];
    const out = Buffer.from(new Uint8Array(hb.memory.buffer, dataPtr, len));

    hb.free(lenPtr);
    hb.hb_blob_destroy(outBlob);
    hb.hb_face_destroy(outFace);
    hb.hb_subset_input_destroy(input);
    hb.hb_face_destroy(face);
    hb.hb_blob_destroy(blob);
    hb.free(src);

    return out;
  })();

  instanceCache.set(key, p);
  return p;
}
