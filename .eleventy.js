module.exports = function (eleventyConfig) {
  // This will copy this folder to the output without modifying it at all
  eleventyConfig.addPassthroughCopy("content/assets");

  // This defines which files will be copied
  eleventyConfig.setTemplateFormats([
    "html",
    "njk",
    "txt",
    "js",
    "css",
    "xml",
    "json",
  ]);
  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  return {
    // This makes sure HTML files use Nunjucks
    htmlTemplateEngine: "njk",
    dir: {
      input: "content",
      output: "public",
    },
  };
};;
