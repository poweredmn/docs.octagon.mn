// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Octagon Docs",
  tagline: "Хялбар дөхөм",
  url: "https://docs.octagon.mn",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.png",
  organizationName: "poweredmn",
  projectName: "docs.octagon.mn", // Usually your repo name.
  // scripts: ["https://buttons.github.io/buttons.js"],
  trailingSlash: true,

  staticDirectories: ["static"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "og:type",
          content: "octagon, blockchain, ecosystem, documentation",
        },
      ],
      image: "img/opengraph_image.png",
      navbar: {
        logo: {
          alt: "Octagon Logo",
          src: "img/logo-header.png",
        },
        items: [
          {
            to: "docs/getting-started/",
            label: "Ерөнхий мэдээлэл",
            position: "left",
          },

          {
            to: "docs/exchange/exchange-introduction/",
            label: "Crypto Exchange",
            position: "left",
          },

          {
            to: "docs/nft/nft-intro/",
            label: "NFT Marketplace",
            position: "left",
          },
          {
            to: "docs/collections/nft-collections",
            label: "NFT Collections",
            position: "left",
          },
          {
            to: "docs/dao/dao-intro",
            label: "DAO",
            position: "left",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "CNSUW259F8",
        apiKey: "c8f8408b6dc7debe89860886c1fd5551",
        indexName: "docs",
        /**ё
         * keep contextual search as false otherwise search will fail
         * see link for reference.
         *
         * https://discourse.algolia.com/t/algolia-searchbar-is-not-working-with-docusaurus-v2/14659/2
         */
        contextualSearch: true,
      },
    }),
};
