// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: "Octagon DOCS",
  tagline: "Монгол гэрээс Метаверст хамтдаа",
  url: "https://docs.octagon.mn",
  trailingSlash: false,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "poweredmn", // Usually your GitHub org/user name.
  projectName: "docs.octagon.mn", // Usually your repo name.
  titleDelimiter: " | ", // Defaults to `|`

  presets: require("./config/presets"),
  themeConfig: require("./config/theme"),
  plugins: require("./config/plugin"),
};

module.exports = config;
