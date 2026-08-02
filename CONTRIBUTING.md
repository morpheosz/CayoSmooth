# Contributing to the Cayo Smooth Expedition Archive

Multiple people, and at least one rival AI assistant, contribute to this
Archive. This document is how we stay consistent. Read `CLAUDE.md` first —
it holds the tone rules and hard canon. This document covers process.

## Style guide and content format

Both live in `CLAUDE.md` now (see "Voice," "What works" / "What does not
work," and "Working conventions"), not here. `CLAUDE.md` is the file
Claude Code loads automatically at the start of every session, so it's
the single source of truth for anything that affects how content reads —
keeping a second copy here risked the two quietly disagreeing over time.
This document covers process instead: what to do, not how to write it.

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
3. Reviewers should read new content aloud, mentally, in the
   museum-placard voice. If it doesn't survive that, it needs another
   pass.
4. Site/build changes are reviewed separately from content changes where
   possible, so tone review isn't blocked on build review.

## Adding collaborators

Repository collaborator access is managed outside of Claude Code, via the
GitHub UI (Settings → Collaborators) or `gh repo add-collaborator`.
