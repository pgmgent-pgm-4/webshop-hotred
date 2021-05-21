const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    'client/assets/css/main.css': 'assets/css/main.css',
    'client/assets/images': 'assets/img',
    'client/assets/js': 'assets/js'
  });

  return {
    dir: {
      input: 'client/views',
      output: '../docs'
    }
  }
}