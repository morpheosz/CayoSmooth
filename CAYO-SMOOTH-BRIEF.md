# Cayo Smooth Expedition — Project Brief

Paste this into a fresh Claude Code session at the root of the `CayoSmooth`
clone. It contains the full canon, the tone rules, and the first tasks.

Repo: https://github.com/zpierce/CayoSmooth

---

## 1. What we're building

A website and archive for the **Cayo Smooth Expedition (1979–1980)** — a
fictional yacht rock expedition, presented entirely straight, as though it were
a real historical record. The site will hold expedition lore, a discography of
the sixty-one recovered tracks, an artifact inventory, personnel records, and a
merch storefront.

Multiple people (and at least one rival AI assistant) are contributing. Tonal
consistency is the primary technical risk of this project, which is why the tone
rules below should be promoted to `CLAUDE.md` at the repo root so they load on
every session.

---

## 2. Founding document (canon — full text)

This is the origin text. Everything else must be consistent with it.

> **Field Report: The Cayo Smooth Expedition**
> 
> The tapes were not, as legend insisted, buried in a Malibu storage unit. They
> were in a Panamanian duty-free warehouse, in a crate mislabeled "DENTAL
> EQUIPMENT — FRAGILE — DO NOT PLAY."
> 
> Our team had been chasing the rumor for eleven years. A retired session
> bassist named Duane "The Cushion" Petrosky mentioned it once at a boat show in
> Fort Lauderdale, allegedly while eating shrimp with both hands: that in 1979,
> an A&R man named Gil Vandermeer chartered a fifty-two-foot ketch, loaded it
> with a Fender Rhodes, four studio musicians, an unlicensed dentist, and
> roughly nine hundred pounds of provisions that were legally classified as
> "cheese," and set sail for what he described in a telegram as "the smooth
> latitudes."
> 
> They were gone for fourteen months. They came back with sixty-one songs and no
> ketch.
> 
> The recordings are, by any measure, the deepest yacht rock ever committed to
> tape. Not merely nautical — *submerged*. The tempos hover between 82 and 84
> BPM with a consistency that our lab initially attributed to equipment failure.
> Every track is in a major seventh. Several are in two major sevenths
> simultaneously, which our theorist called "not possible" and then requested to
> hear again.
> 
> Highlights from the trove:
> 
> - **"Marina, Don't"** — a six-minute plea addressed, we believe, to a marina.
> - **"Chardonnay Diplomacy"** — features a saxophone solo that begins at 2:14
>   and does not conclude within the runtime of the song.
> - **"(You're the) Second Mate of My Heart"** — nine verses, no chorus,
>   extremely apologetic.
> - **"Cabo Fever (Reprise)"** — there is no original version. There has never
>   been an original version. The reprise is all that exists and it refers
>   confidently to events not depicted.
> 
> The most striking artifact is a fourteen-minute closer titled "Anchorage,"
> which is not about Alaska and is instead about anchoring. Midway through, the
> vocalist stops singing and simply lists boat parts in a warm, reassuring
> baritone for ninety seconds. Two members of our restoration team fell asleep.
> One of them woke up believing he owned a boat.
> 
> Provenance remains murky. Vandermeer's own account, recovered from a
> water-damaged journal, is unhelpful; the final entry reads only, "Reached the
> smoothness. It goes further. Sending Terry back with the tapes and the good
> blender." Terry was never identified. The blender was recovered in 1988 off
> Bocas del Toro and is currently on loan to a museum.
> 
> We have released four tracks. The remaining fifty-seven are being introduced
> to the public gradually, on the advice of a panel of cardiologists.
> 
> Play responsibly. Do not operate a vessel while listening to side B.

---

## 3. The rights dispute (canon — full text)

A second party began independent development of the same material. The
resulting exchange is itself canon and should be published on the site, likely
under `content/notices/`. It establishes the Archive's institutional voice:
defensive, procedural, faintly aggrieved.

### 3.1 — Notice of Prior Discovery and Licensing Availability

> **NOTICE OF PRIOR DISCOVERY AND LICENSING AVAILABILITY**
> 
> Issued by the Cayo Smooth Expedition Archive (est. this afternoon)
> 
> It has come to our attention that a second party has begun independent
> excavation of the Vandermeer materials. We welcome scholarly interest. We
> note, however, that this Archive holds originating rights to the Expedition,
> the ketch, the cheese manifest, the blender, and Terry.
> 
> Our claim rests on the following: we found the crate. We opened the crate. We
> listened to side B and one of us woke up believing he owned a boat. This is
> the recognized standard of provenance in our field.
> 
> We do not wish to be adversarial. We wish to be smooth. To that end, we are
> prepared to negotiate a licensing arrangement on generous terms, including but
> not limited to: use of the Expedition name, the sixty-one recovered tracks,
> the phrase "the smooth latitudes," and any saxophone solo that has not yet
> concluded.
> 
> Standard rate is one (1) frozen drink, redeemable at a marina of our choosing.
> Volume discounts available. Sublicensing of Terry requires separate
> discussion.
> 
> We look forward to a productive dialogue. Our counsel is on a boat and will
> respond when the wind changes.

### 3.2 — Counterparty assurance (received)

> "Please inform them that NONE of his (hers?) initial inspiration has been
> modified or diluted! 100% intact"

### 3.3 — Response to Counterparty Assurance

> **RESPONSE TO COUNTERPARTY ASSURANCE**
> 
> Filed by the Cayo Smooth Expedition Archive
> 
> We acknowledge receipt of the representative's assurance that the source
> material remains 100% intact, undiluted, and unmodified. We appreciate the
> sentiment. We must, however, register a concern.
> 
> Nothing about this Expedition is 100% intact. The ketch is gone. The journal
> is water-damaged. "Cabo Fever (Reprise)" refers confidently to events that
> were never recorded and possibly never occurred. Terry has not been
> identified. The blender is on loan and we have not received a condition report
> since 2019.
> 
> Dilution is not a defect in this field. It is the medium. The material arrived
> diluted. Vandermeer diluted it himself, at sea, on purpose, in a blender.
> 
> We therefore ask the counterparty to reconsider the framing. An assurance of
> total preservation raises questions we are not equipped to answer, chiefly:
> preserved from what, and by whom, and were they on the boat.
> 
> That said, we remain open to license. Our position is unchanged and our terms
> are generous. We would simply prefer the phrase "substantially intact,
> allowing for evaporation."
> 
> Our counsel is still on the boat. The wind has not changed.

---

## 4. Tone rules (promote to CLAUDE.md)

**The rule: play it completely straight.** The Archive is a serious institution
documenting a real expedition. It does not know it is funny. It has never
knowingly made a joke.

The humor lives in the gap between the deadpan institutional register and the
absurd subject matter. Every wink at the reader closes that gap and kills the
bit.

**Voice.** Museum placard, maritime insurance adjuster, or slightly defensive
academic. Short declarative sentences. Concrete nouns. Specific numbers,
especially unnecessary ones.

- Good: "The blender was recovered in 1988 off Bocas del Toro and is currently
  on loan to a museum."
- Bad: "LOL and then they found the blender, which is honestly the funniest
  part."

**Works:**

- Bureaucratic understatement — alarming facts stated as routine
- Unnecessary precision — "between 82 and 84 BPM"
- Unresolved gaps — Terry is never identified
- Institutional defensiveness — the Archive gets testy when questioned
- The escalating footnote — a casual detail later referenced as long established

**Does not work:**

- Exclamation points
- Explaining the joke in the next sentence
- Modern internet cadence ("literally," "chef's kiss," "not gonna lie")
- Any character being aware they're in a bit
- Puns as punchlines (puns as *song titles* are encouraged)

**Hard canon — do not contradict:**

- The ketch is gone. It does not come back.
- Terry is unidentified. Terry stays unidentified.
- The blender is real, recovered, on loan, no condition report since 2019.
- "Cabo Fever (Reprise)" has no original version and never did.
- Every track is in a major seventh. Tempos are 82–84 BPM.
- Sixty-one tracks total. Four released.
- Nothing is 100% intact. Dilution is the medium.

---

## 5. Proposed repo structure

```
CLAUDE.md              Tone rules + canon (section 4 above)
README.md              Archive framing, repo map
CONTRIBUTING.md        Full style guide, PR process, canon-change process
content/
  expedition/          Voyage narrative, the smooth latitudes, recovery
  discography/         One file per track, plus _TEMPLATE.md
  artifacts/           The blender, the journal, the crate, the Rhodes
  personnel/           Vandermeer, Petrosky, the dentist, Terry (unresolved)
  notices/             The rights dispute, section 3 above
  merch/               Product copy
site/                  The website
assets/                Cover art, mockups, images
```

---

## 6. First tasks

1. Scaffold the directory structure and write `CLAUDE.md`, `README.md`, and
   `CONTRIBUTING.md` from sections 4 and 5.
2. Commit the founding documents: field report into `content/expedition/`, the
   three notices into `content/notices/`.
3. Build `content/discography/_TEMPLATE.md`. Every track entry needs: title,
   runtime, key, BPM, personnel, catalog number, an archival note, and at least
   one detail that is quietly wrong.
4. Write full entries for the four released tracks — "Marina, Don't,"
   "Chardonnay Diplomacy," "(You're the) Second Mate of My Heart," "Cabo Fever
   (Reprise)" — plus "Anchorage" as the fourteen-minute closer.
5. Stub the remaining fifty-six with titles only, marked `status: unreleased`.
6. Pick a static site generator and stand up a minimal build. Suggestion: keep
   content in Markdown with frontmatter so it stays portable, and default to
   GitHub Pages for hosting unless there's a reason not to.

**A note on the site's visual design:** resist the urge to go straight to
"1978 album cover." The stronger joke is that the site looks like a real
institutional archive — restrained serif type, a lot of white space, small
captions under artifact photographs — and the yacht rock is simply the subject
matter being catalogued.

---

## 7. Housekeeping outside Claude Code's reach

Add the collaborator via the GitHub UI (Settings → Collaborators → Add people),
or have Claude Code shell out to:

```
gh repo add-collaborator zpierce/CayoSmooth Secret-P --permission push
```
