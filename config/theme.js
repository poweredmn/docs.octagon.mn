/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
module.exports = {
  navbar: {
    logo: {
      alt: 'Octagon logo',
      src: 'img/octagon.png',
    },
    items: [
      { to: '/buha', label: 'ARBC', position: 'left' },
      {
        label: 'What IS?',
        position: 'left',
        to: '/collections',
        items: [
          {
            label: 'Marketplace',
            to: '/posts/Explain/202201-marketplace',
          },
          {
            label: 'DAO',
            to: '/posts/Explain/202202-dao',
          },
        ],
      },
      {
        label: 'Posts',
        position: 'left',
        items: [
          {
            label: 'Development',
            to: '/posts/tags/dev',
          },
          {
            label: 'Crypto News',
            to: '/posts/tags/news',
          },
          {
            label: 'Ярилцлага',
            to: '/posts/tags/podcast',
          },
          {
            label: 'Тайлбар Видео',
            to: '/posts/tags/explain',
          },
          {
            label: 'Сургалт',
            to: '/posts/tags/learn',
          },
        ],
      },
      {
        label: 'More',
        position: 'left',
        items: [
          {
            label: '🔗 Албан ёсны сувгууд',
            to: '/official-links',
          },
          {
            label: '🛠 Contracts Addresses',
            to: '/addresses',
          },
        ],
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Octagon Official',
        items: [
          {
            label: 'Website',
            href: 'https://www.octagon.mn/',
          },
          {
            label: 'OpenSea',
            to: 'https://opensea.io/AngryRedBuha',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/YeyYYTvfUK',
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/nftoctagon',
          },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/nft.octagon',
          },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} Octagon docs 2.0`,
  },
  image: 'img/pcc-archive-soc.jpg',
  metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  metadata: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
};
