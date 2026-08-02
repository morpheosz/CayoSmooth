# Contributing to the Cayo Smooth Expedition Archive

Multiple people, and at least one rival AI assistant, contribute to this
Archive. This document is how we stay consistent. Read `CLAUDE.md` first —
it holds the tone rules and hard canon. This document covers process.

## Style guide

**Voice.** Museum placard, maritime insurance adjuster, or slightly
defensive academic. The Archive is a real institution documenting a real
expedition. It does not know it is funny.

**Sentences.** Short and declarative. Prefer concrete nouns to abstractions.
Use specific numbers, especially unnecessary ones — "between 82 and 84 BPM"
does more work than "very slow."

**What to avoid:**

- Exclamation points
- Explaining a joke in the sentence after it
- Modern internet cadence
- A character or narrator being aware they're in a bit
- Puns as punchlines (song titles are the one place puns belong)

**The quietly wrong detail.** Every full discography entry, and most
artifact and personnel records, should carry one detail that doesn't quite
add up — a date that doesn't reconcile, a number that contradicts another
document, a credit that couldn't have been possible. It is never flagged.
If a contributor notices one and wants to "fix" it, check `CLAUDE.md`
hard canon first — it may be load-bearing.

## Content format

All content lives in Markdown with YAML frontmatter in `content/`. This
keeps it portable across site generators and diffable in review.

- Discography entries: copy `content/discography/_TEMPLATE.md`. Filled-in
  fields are required for `status: released`; stubs need only `title` and
  `status: unreleased`.
- Artifact and personnel records: prose is unstructured beyond a short
  frontmatter block (`title`, `type`, optionally `status`). Match the
  register of existing files in the same directory before adding new
  ones.
- Notices: correspondence format, dated, signed by the Archive or the
  counterparty as appropriate. See `content/notices/` for the existing
  exchange.

## Canon-change process

The founding field report (`content/expedition/field-report.md`) and the
hard canon list in `CLAUDE.md` are the ground truth. To propose a change
that would contradict either:

1. Open a PR that edits `CLAUDE.md` alongside the content change, so the
   canon list and the content move together.
2. Do not silently retcon. If new material conflicts with something
   already published, frame the conflict in-universe — a correction, an
   addendum, a testy footnote from the Archive — rather than quietly
   editing the earlier document. The Archive is allowed to be wrong in
   public. It is not allowed to have never said the thing.
3. Get sign-off from another contributor before merging a canon change.
   A single contributor should not unilaterally decide, for instance,
   that Terry has been identified.

## PR process

1. One topic per PR — one track, one artifact, one notice, one structural
   change. Large batch stubs (e.g., the unreleased 56) are the exception
   and can land together.
2. Before submitting, re-read your addition against the "What does not
   work" list in `CLAUDE.md`. If a line makes you smile because it's
   winking at you rather than because it's dry, cut it.
3. Reviewers should read new content aloud, mentally, in the museum-
   placard voice. If it doesn't survive that, it needs another pass.
4. Site/build changes are reviewed separately from content changes where
   possible, so tone review isn't blocked on build review.

## Adding collaborators

Repository collaborator access is managed outside of Claude Code, via the
GitHub UI (Settings → Collaborators) or `gh repo add-collaborator`.
