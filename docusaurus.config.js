module.exports = {
  title: 'TBI Digital Dashboards',
  tagline: 'Helping governments to co-ordinate large scale projects',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tbilogo.jpg',
  organizationName: 'TBIGC', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  url: 'https://TBIGC.github.io',
  baseUrl: '/documentation/',
  themeConfig: {
    navbar: {
      title: 'TBI Digital Dashboard',
      logo: {
        alt: 'TBI logo',
        src: 'img/tbilogo.jpg',
      },
      items: [
        {
          href: 'https://dashboard-demo.institute.global',
          label: 'Demo Site',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Tony Blair Institute for Global Change`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
