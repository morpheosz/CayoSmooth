module.exports = {
  layout: "track.njk",
  tags: "track",
  eleventyComputed: {
    permalink: (data) =>
      `/discography/${data.slug || data.page.fileSlug}/index.html`,
  },
};
