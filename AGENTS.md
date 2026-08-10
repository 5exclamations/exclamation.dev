# Agent workflow

## Source of truth

- Git and the files in this repository are the source of truth.
- Inspect `git status` and the relevant diff before editing.
- Preserve existing uncommitted work. Do not use `git reset`, `git checkout`, `git clean`, or broad rewrites to discard it.
- Do not commit, push, or amend history unless the user explicitly asks.
- Mem0 is durable context only. It must not replace the repository, a handoff document, tests, or the current Git diff.

## Claude Code and Codex roles

- Claude Code is the architect and reviewer. It clarifies the request, writes the implementation brief, delegates bounded implementation work, inspects the real files and Git diff, runs or reviews tests, and decides whether a correction is needed.
- Codex is the implementer and tester. It works through the project MCP server `codex-implementer` backed by the official `codex mcp-server` command, edits only the requested scope, runs appropriate checks, and does not commit.
- Claude must review the actual working tree after Codex returns. A textual report from Codex is not evidence of a correct change.

## Handoff protocol

1. Claude records the goal, constraints, acceptance criteria, likely files, and required checks in the prompt sent to Codex.
2. Codex first inspects the current status and relevant files, then implements the smallest change that satisfies the brief. Unrelated user changes stay untouched.
3. Codex runs focused tests or validation and reports changed files, checks run, and any remaining concern.
4. Claude reviews `git diff`, the affected files, and the test output. If something is wrong, Claude sends the concrete finding and expected correction back to Codex.
5. Claude repeats the diff and test review after a correction. The task is done only when the implementation and verification agree.

## Memory

- Read Mem0 for prior decisions when useful and save durable project decisions after meaningful work.
- Store decisions, constraints, and lessons learned. Do not treat Mem0 as a live copy of source code or as permission to alter files.
- Keep the shared identity on this project: `user_id=5exclamations`, `app_id=5exclamations-exclamation.dev`.

## Project checks

- Follow the existing `CLAUDE.md`, `HANDOFF.md`, and design skill before changing product code.
- Prefer the narrowest relevant test or validation first, then run the project-level checks required by the change.
- Do not report success from a green build alone when the project instructions require visual or runtime inspection.
