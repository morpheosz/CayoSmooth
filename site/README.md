# Site build

The Archive site is built with [Eleventy](https://www.11ty.dev/). Content
is read from `content/` as Markdown with YAML frontmatter; this directory
holds only templates, layouts, and styles.

## Local development

```
npm install
npm run serve    # http://localhost:8080, rebuilds on change
npm run build    # one-off build into _site/
npm run clean    # remove _site/
```

`_site/` is generated and git-ignored. Do not edit it.

## Layout of this directory

```
site/
  _includes/
    base.njk      Page shell: masthead, navigation, footer.
    record.njk    Document records — artifacts, personnel, notices, expedition.
    track.njk     Discography entries, with the specification block.
  css/
    archive.css   All styles. Light and dark, no build step.
  index.njk       Home.
  *.njk           One index page per section.
```

## How content becomes pages

Each `content/` subdirectory carries an `.11tydata.js` file that assigns
the layout, the collection tag, and the permalink for everything in it.
Adding a Markdown file to `content/discography/` is enough to publish a
track — no template change is required. Permalinks use the `slug` field
from frontmatter, falling back to the filename.

Collections are defined in `eleventy.config.js` where order matters:
tracks sort by `track_number`, notices by `sequence`, and expedition
documents by `order` so the field report leads.

## A note on the design

The site is meant to look like a real institutional archive — restrained
serif type, generous white space, small captions, hairline rules. The
yacht rock is the subject matter being catalogued, not the visual theme.
Resist the urge to make it look like a 1978 album cover.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`. Enable Pages for the repository with
Settings → Pages → Source: GitHub Actions.
