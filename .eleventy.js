
//kopírování souborů:
module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat images/ do _site/images PassthroughCopy = nic s tím nedělej, jen to zkopíruj 
  // do cílové složky _site
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
 };
 
 //nastavení šablonovacího jazyka
 module.exports = function(eleventyConfig) {
  // ...necháme, co už v konfiguraci je, a přidáme:
  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};
