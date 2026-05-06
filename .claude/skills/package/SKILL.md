---
name: package
description: "Package an assignment directory into a zip file for submission. Triggered when the user says /package, 'package', 'zip', 'submit', or 'create submission zip'."
argument-hint: <work-dir>
allowed-tools: [Read, Glob, Grep, Bash]
---

# Package Assignment for Submission

Package an assignment folder into a submission-ready zip file.

## Input

`$ARGUMENTS` is the work directory name (e.g. `work2`). It must be a directory in the repo root.

## Procedure

1. **Validate** the directory exists at the repo root. If not, list available `work*` directories and stop.

2. **Read instructions** — check if a PDF (e.g. `ppl262_hw_*.pdf`) exists in the directory. If it does, read it and look for a "Submission" or "Deliverables" section that specifies which files to include. Extract the exact list of required files.

3. **Determine files to include** using these rules, in priority order:
   - If the instructions specify an explicit deliverables list, use **only** those files.
   - Otherwise, include all source files (`.ts`, `.js`, `.rkt`, `.pl`) from the `ex*_template/src/` directory, excluding:
     - `node_modules/`, `dist/`, `coverage/`
     - Test files (these are provided by the course, not written by the student)
     - Documents: `*.pdf`, `*.doc`, `*.docx`, `*.md`
     - Editor/IDE files: `.vscode/`, `.idea/`
     - Archives: `*.zip`, `*.tar`, `*.gz`
     - Hidden files/directories

4. **List the files** that will be included and confirm with the user before proceeding.

5. **Create the zip** inside the work directory, named `ex<N>_submission.zip`. Overwrite if it already exists.

   Use a cross-platform approach:
   - Try `powershell.exe Compress-Archive` first (Windows)
   - If not available, try `zip` or `python3 -m zipfile -c`
   - Use flat file structure (no nested directories) — unless instructions say otherwise.

6. **Verify** the zip was created and list its contents to confirm correctness.

## Important

- The zip must contain ONLY the required files — no extra files, no directory nesting (unless specified).
- Always prefer the explicit deliverables list from the instructions over the default rules.
- Do NOT include `node_modules`, test files, or the zip file itself.
