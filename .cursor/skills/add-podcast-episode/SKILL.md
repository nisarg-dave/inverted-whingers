---
name: add-podcast-episode
description: >-
  Adds a new football podcast episode to the site’s episode list in episodes.json, including git
  branch, commit, and optional push/PR. Use when the user wants to add, publish, or record a new
  episode, update the episode list, or mentions Spotify, Soundcloud, or a season/episode number
  for the Inverted Whingers / inverted-whingers site.
---

# Add a podcast episode (inverted-whingers)

## Data location

- **File**: `src/data/episodes.json`
- **Shape**: Top-level keys are **season** strings (e.g. `2025/26`, `2024/25`). Each value is a **JSON array** of episode objects.

## Episode object fields

| Field | Notes |
|--------|--------|
| `id` | Episode **number within that season** (used for the on-site **“EP 0N”** badge; must match the real season episode). |
| `title` | Episode title. |
| `description` | Short paragraph; site style is “We discuss… / We explore…”, past tense, concise. If the user pastes a Spotify/Apple blurb, **shorten and align** to that tone. |
| `date` | Human-readable, e.g. `March 1, 2026` (match existing entries). |
| `duration` | e.g. `1hr 47min`, `1hr 34min`. |
| `link` | Full URL (Spotify, Soundcloud, or whatever platform they use for that drop). |

## Where to insert

- Append (or insert) the object in the **correct season** array.
- **Array order = display order** (first item appears first in the “Latest Episodes” list for that season). Use **chronological order within the season** unless the user says otherwise.
- Gaps in `id` are OK (e.g. only `1` and `3` in the file until episode 2 is added); the UI uses **`episode.id`**, not list index, for the episode badge in `src/components/Episode.tsx`.

## If the user omits details

Ask for: season (or infer from `id`/date), `id` if unclear, `title`, `date`, `duration`, `link`, and either a **description** or **raw show notes** to edit down.

## Git workflow (when requested or implied)

1. Create a branch, e.g. `feature/2025-26-ep3-science-technology` (season + `ep` + id + **short kebab-slug** from the title).
2. Commit only the episode change (and any code updates if truly required for the add).
3. If they ask to open a PR: **base `master`**, use `gh pr create` (or the host UI), and **not** in draft unless they ask for draft.

## What not to change

- No drive-by refactors. Only touch other files if the new episode **requires** it (e.g. schema/validation once exists).
- Do **not** add or edit unrelated markdown docs; this skill is the living doc for the workflow.
