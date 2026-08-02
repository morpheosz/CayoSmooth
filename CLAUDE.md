# CLAUDE.md

Guidance for Claude Code (and any other agent) working in this repository.

## What this repo is

The archive of the **Cayo Smooth Expedition (1979–1980)**: a website and
document trove for a fictional yacht rock expedition, presented entirely
straight, as though it were a real historical record. The site holds
expedition lore, a discography of sixty-one recovered tracks, an artifact
inventory, personnel records, and a merch storefront.

This is a tonal project before it is a technical one. Tonal consistency is
the primary risk. Read this file before writing any content, copy, or
commit message that will be visible on the site.

## The rule: play it completely straight

The Archive is a serious institution documenting a real expedition. It does
not know it is funny. It has never knowingly made a joke.

The humor lives in the gap between the deadpan institutional register and
the absurd subject matter. Every wink at the reader closes that gap and
kills the bit.

## Voice

Museum placard, maritime insurance adjuster, or slightly defensive
academic. Short declarative sentences. Concrete nouns. Specific numbers,
especially unnecessary ones.

- Good: "The blender was recovered in 1988 off Bocas del Toro and is
  currently on loan to a museum."
- Bad: "LOL and then they found the blender, which is honestly the
  funniest part."

## What works

- Bureaucratic understatement — alarming facts stated as routine
- Unnecessary precision — "between 82 and 84 BPM"
- Unresolved gaps — Terry is never identified
- Institutional defensiveness — the Archive gets testy when questioned
- The escalating footnote — a casual detail later referenced as long
  established

## What does not work

- Exclamation points
- Explaining the joke in the next sentence
- Modern internet cadence ("literally," "chef's kiss," "not gonna lie")
- Any character being aware they're in a bit
- Puns as punchlines (puns as *song titles* are encouraged)

## Hard canon — do not contradict

- The ketch is gone. It does not come back.
- Terry is unidentified. Terry stays unidentified.
- The blender is real, recovered, on loan, no condition report since 2019.
- "Cabo Fever (Reprise)" has no original version and never did.
- Every track is in a major seventh. Tempos are 82–84 BPM.
- Sixty-one tracks total. Four released canonically in the founding
  document; the Archive has since cleared a fifth ("Anchorage") for
  release as the closer. New releases should be rare and deliberate, not
  incidental to a content pass.
- Nothing is 100% intact. Dilution is the medium.
- The Archive dates the return to 1980 and says so in running prose. One
  object, recovered at Grand Marais and dated 1981, contradicts this and
  has not been dismissed. The discrepancy is the Archive's most contested
  fact and stays unresolved. Do not settle it in either direction.
- Grand Marais, Minnesota is a recorded port of call. No route is given,
  no explanation is offered, and none is ever attempted.
- Vandermeer is the most frequently credited vocalist, not the only one.
  Vocalists rotated. Some were the musicians; some were engaged at ports
  to settle obligations ashore. Attribution across the trove is
  incomplete and stays that way. Port vocalists get credits, never
  dossiers.
- The Cabo episode is referenced and never described. It is not an
  illness. It is not anything the Archive has recorded.
- Two institutions. The **Cayo Smooth Expedition Archive** holds
  discovery, provenance, and custody. The **Cayo Smooth Restoration
  Initiative** is the modern conservation and publication layer and
  claims no discovery. Releases carry: *Published by the Cayo Smooth
  Restoration Initiative, by arrangement with the Cayo Smooth Expedition
  Archive.*

Any new content that would contradict one of these must be rejected or
the contradiction must be reconciled in-universe (e.g., framed as a
correction the Archive issues about itself), never silently retconned.

## The two voices

The Archive and the Initiative do not sound the same, and the difference
is load-bearing.

**The Archive** is the museum placard voice described above. Defensive,
procedural, never knowingly funny. Everything under
`content/expedition/`, `content/artifacts/`, `content/personnel/`, and
`content/discography/` is the Archive speaking.

**The Initiative** is warmer and a half-step looser — a conservation body
writing publication and promotional copy in 2026. It may be plainly
enthusiastic. It still never explains a joke and never acknowledges that
the Expedition is absurd. Merchandise and release material sit here. This
is why a commemorative shirt can say "1 REALLY GOOD BLENDER" while the
artifact record says "CSE-A-001."

When in doubt, write as the Archive. The Initiative's licence is narrow
and covers what it sells and publishes, not the historical record.

## Staying in sync with other collaborators

Multiple people (and their own Claude Code sessions) work in this repo.
Before starting any new content or code change, `git fetch origin main`
and skim recent commits and merged PRs on it — `git log --oneline -15
origin/main` is enough. That surfaces what a collaborator shipped since
your last session: a new canon detail, a released track, a renamed file
you're about to collide with.

This is a habit, not a document. Don't maintain a separate changelog or
summary file to serve this purpose — git history and PR descriptions
already are that record, are never out of date, and don't need anyone to
remember to update them. Write commit messages and PR descriptions
accordingly: say what changed and why, since that's what the next person
(human or agent) is going to read.

## Repo structure

```
CLAUDE.md              This file.
README.md              Archive framing, repo map.
CONTRIBUTING.md         PR process, canon-change process, collaborators.
SEED.md                 Seed brief for generative tools. Published unlinked
                        at /seed.md. Keep current — see below.
content/
  expedition/           Voyage narrative, the smooth latitudes, recovery.
  discography/          One file per track, plus _TEMPLATE.md.
  artifacts/            The blender, the journal, the crate, the Rhodes.
  personnel/            Vandermeer, Petrosky, the dentist, Terry (unresolved).
  notices/              The rights dispute.
  merch/                Product copy.
site/                   The website (static site generator).
assets/                 Cover art, mockups, images.
```

## Working conventions

- Content lives in Markdown with YAML frontmatter so it stays portable
  across site generators, and diffable in review.
- Every discography entry follows `content/discography/_TEMPLATE.md`.
  Released tracks get full entries; unreleased tracks are stubs with
  `status: unreleased` and a title only.
- Artifact and personnel records: prose is unstructured beyond a short
  frontmatter block (`title`, `type`, optionally `status`). Match the
  register of existing files in the same directory before adding new
  ones.
- Notices: correspondence format, dated, signed by the Archive or the
  counterparty as appropriate. See `content/notices/` for the existing
  exchange.
- Every full discography entry, and most artifact and personnel
  records, must carry at least one detail that is quietly wrong — a
  date that doesn't reconcile, a number that contradicts another
  document, a credit that couldn't have been possible. It is never
  flagged as a joke. If a detail like this looks like a mistake and you
  want to "fix" it, check the hard canon list above first — it may be
  load-bearing.
- When in doubt about tone, prefer understatement and cut the last
  sentence if it explains the joke.

## Keeping SEED.md current

`SEED.md` is the seed brief other generative tools (image, audio, video,
copy) are pointed at to stay consistent with this Archive. It duplicates
canon, personnel, artifact descriptions, the discography, and storefront
copy in one place, which means it goes stale the moment those diverge
from what's actually on the site.

**On every merge to `main`, evaluate whether `SEED.md` needs updating,
and update it in the same PR if so.** In particular, re-check it whenever
a merge:

- Adds, releases, or retitles a discography track
- Adds, removes, or changes the status of an artifact
- Adds or edits a personnel record
- Changes hard canon in `CLAUDE.md` itself
- Adds or changes storefront items
- Changes the visual direction (palette, photography conventions, the
  "resist 1978 album cover" guidance)

A merge that only touches build tooling, styling, or this file's own
non-canon sections does not require a `SEED.md` update. When updating
it, keep the instructions/source-material split (sections 1–3 are
out-of-character; everything after is in the Archive's voice) and keep
§12's open-threads list honest rather than aspirational.
