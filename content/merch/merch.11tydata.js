module.exports = {
  layout: "product.njk",
  tags: "merch",
  section: "Storefront",
  sectionUrl: "/merch/",
  eleventyComputed: {
    permalink: (data) => `/merch/${data.slug || data.page.fileSlug}/index.html`,
  },
};
