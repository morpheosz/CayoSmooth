module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "site/css": "css" });
  eleventyConfig.addPassthroughCopy({ assets: "assets" });

  // Curly quotes and proper dashes; the type is serif and the register is
  // formal, and straight apostrophes read as a draft.
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.set({ typographer: true }));

  // Tracks in recovered-sequence order.
  eleventyConfig.addCollection("tracks", (collection) =>
    collection
      .getFilteredByTag("track")
      .sort((a, b) => (a.data.track_number || 0) - (b.data.track_number || 0))
  );

  eleventyConfig.addCollection("released", (collection) =>
    collection
      .getFilteredByTag("track")
      .filter((item) => item.data.status === "released")
      .sort((a, b) => (a.data.track_number || 0) - (b.data.track_number || 0))
  );

  // The field report is the founding document and leads the section.
  eleventyConfig.addCollection("expedition", (collection) =>
    collection
      .getFilteredByTag("expedition")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Storefront runs in catalogue order, not file order.
  eleventyConfig.addCollection("merch", (collection) =>
    collection
      .getFilteredByTag("merch")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Notices are read as an exchange and must stay in filed order.
  eleventyConfig.addCollection("notices", (collection) =>
    collection
      .getFilteredByTag("notice")
      .sort((a, b) => (a.data.sequence || 0) - (b.data.sequence || 0))
  );

  eleventyConfig.addFilter("runtimeTotal", (tracks) => {
    const seconds = tracks.reduce((sum, track) => {
      const runtime = track.data.runtime;
      if (!runtime) return sum;
      const [minutes, secs] = runtime.split(":").map(Number);
      return sum + minutes * 60 + secs;
    }, 0);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "site/_includes",
      data: "site/_data",
    },
    // GitHub Pages serves this as a project site under /CayoSmooth/, not
    // domain root. CI supplies PATH_PREFIX; local dev defaults to root so
    // `npm run serve` still works at http://localhost:8080/.
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
