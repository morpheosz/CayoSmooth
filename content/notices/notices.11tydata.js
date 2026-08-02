module.exports = {
  layout: "record.njk",
  tags: "notice",
  section: "Notices",
  sectionUrl: "/notices/",
  eleventyComputed: {
    permalink: (data) =>
      `/notices/${data.slug || data.page.fileSlug}/index.html`,
  },
};
