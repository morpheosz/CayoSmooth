module.exports = {
  layout: "record.njk",
  tags: "personnel",
  section: "Personnel Records",
  sectionUrl: "/personnel/",
  eleventyComputed: {
    permalink: (data) =>
      `/personnel/${data.slug || data.page.fileSlug}/index.html`,
  },
};
