// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
  i18n: {
    defaultLocale: 'mn',
    locales: ['mn', 'en']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: 'docs',
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/poweredmn/docs.octagon.mn',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Нийтлэлүүд',
          // Please change this to your repo.
          // editUrl: 'https://github.com/poweredmn/docs.octagon.mn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark', // dark bolgoh
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // announcementBar: {
      //   id: 'announcementBar-2', // Increment on change
      //   content: `⭐️ hello Octagon, Medegdel is here`,
      // },
      navbar: {
        hideOnScroll: true,
        title: 'Octagon ',
        logo: {
          alt: 'Octagon',
          src: 'img/favicon.png',
          srcDark: 'img/favicon.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Гарын авлага',
          },
          {
            type: 'doc',
            docId: 'marketplace/intro',
            position: 'left',
            label: 'Marketplace',
          },
          {
            type: 'doc',
            docId: 'exchange/intro',
            position: 'left',
            label: 'Exchange',
          },
          // {
          //   type: 'doc',
          //   docId: 'nft/intro',
          //   position: 'left',
          //   label: 'NFT',
          // },
          {
            type: 'doc',
            docId: 'buha/intro',
            position: 'left',
            label: 'Angry Red Buha Club',
          },
          {to: '/blog', label: 'Нийтлэл', position: 'left'},
          // {to: '/news', label: 'Мэдээ мэдээлэл', position: 'left'},
          {
            href: 'https://nft.octagon.mn/market?status=LISTED',
            label: 'Маркет',
            position: 'right',
          },
          {
            href: 'https://www.nft.octagon.mn/about-us',
            label: 'Бидний тухай',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Гарын авлага',
            items: [
              {
                label: 'Гарын авлага',
                to: '/docs/intro',
              },
              {
                label: 'Marketplace',
                to: '/docs/marketplace',
              },
              {
                label: 'Exchange',
                to: '/docs/exchange',
              },
              // {
              //   label: 'NFT',
              //   to: '/docs/nft',
              // },
              {
                label: 'Angry Red Buha Club',
                to: '/docs/buha',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/Octagon-NFT-106029445282787',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/8K7uzcaK',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RedBuha',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/angryredbuha/',
              },
            ],
          },
          {
            title: 'Мэдээ мэдээлэл',
            items: [
              {
                label: 'Нийтлэл',
                to: '/blog',
              },
              // {
              //   label: 'Мэдээ',
              //   to: '/news',
              // },
            ],
          },
          {
            title: 'Бидний тухай',
            items: [
              {
                label: 'Үйлчилгээ',
                href: 'https://nft.octagon.mn/service',
              },
              {
                label: 'Холбоо барих',
                href: 'https://nft.octagon.mn/contact',
              },
              {
                label: 'Үйлчилгээний нөхцөл',
                href: 'https://nft.octagon.mn/terms-condition',
              },
              {
                label: 'Нууцлалын бодлого',
                href: 'https://nft.octagon.mn/privacy-policy',
              },
              {
                label: 'Түгээмэл асуултууд',
                href: 'https://nft.octagon.mn/faq',
              },
            ],
          },
        ],
        logo: {
          alt: 'Octagon Logo',
          src: 'img/octagon-logo.png',
          width: 160,
          height: 50,
          href: 'https://nft.octagon.mn',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Octagon. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
