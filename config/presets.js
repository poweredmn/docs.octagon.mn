/** @type {import('@docusaurus/types').PresetConfig[]} */
module.exports = [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        routeBasePath: '/',
        path: 'wiki',

        sidebarPath: require.resolve('../sidebars.js'),
        // Please change this to your repo.
        // editUrl: 'https://github.com/poweredmn/docs.octagon.mn/tree/main/',
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
      },
      blog: {
        routeBasePath: 'posts',
        path: 'posts',
        blogTitle: 'Posts',
        blogDescription: 'Octagon Posts Archive',
        showReadingTime: true,
        postsPerPage: 15,
        blogSidebarCount: 10,
        // Please change this to your repo.
        // editUrl: 'https://github.com/poweredmn/docs.octagon.mn/tree/main/',
      },
      theme: {
        customCss: require.resolve('../src/css/custom.scss'),
      },
    }),
  ],
];