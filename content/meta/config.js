const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Bearingo", // <title>
  shortSiteTitle: "베어링고", // <title> ending for posts and pages
  siteDescription: "Leader in English Education",
  siteUrl: "http://bearlingo.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "ko",
  // author
  authorName: "베어링고",
  authorTwitterAccount: "jaebv_",
  // info
  infoTitle: "베어링고",
  infoTitleNote: "bearlingo",
  // manifest.json
  manifestName: "Bearlingo",
  manifestShortName: "Bearlingo", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "admin@bearlingo.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
