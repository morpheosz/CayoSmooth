module.exports = {
  layout: "record.njk",
  tags: "artifact",
  section: "Artifact Inventory",
  sectionUrl: "/artifacts/",
  eleventyComputed: {
    permalink: (data) =>
      `/artifacts/${data.slug || data.page.fileSlug}/index.html`,
  },
};
