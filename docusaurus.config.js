// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octagon',
  tagline: 'Octagon',
  url: 'https://docs.octagon.mn',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'poweredmn', // Usually your GitHub org/user name.
  projectName: 'docs.octagon.mn', // Usually your repo name.
  titleDelimiter: ' | ', // Defaults to `|`
  /*  i18n: {
    defaultLocale: "mn",
    locales: ["mn", "en"],
  }, */
  presets: require('./config/presets'),
  themeConfig: require('./config/theme'),
  plugins: require('./config/plugin'),
};

module.exports = config;
