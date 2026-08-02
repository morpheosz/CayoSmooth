module.exports = {
  layout: "record.njk",
  tags: "expedition",
  section: "The Expedition",
  sectionUrl: "/expedition/",
  eleventyComputed: {
    permalink: (data) =>
      `/expedition/${data.slug || data.page.fileSlug}/index.html`,
  },
};
