module.exports = {
  title: 'TBI Project Dashboards',
  tagline: 'Helping governments to co-ordinate large scale projects',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tbilogo.jpg',
  organizationName: 'TBIGC', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  url: 'https://TBIGC.github.io',
  baseUrl: '/documentation/',
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'TBI Digital Dashboard',
      logo: {
        alt: 'TBI logo',
        src: 'img/tbilogo.jpg',
      },
      items: [
        {
          href: 'https://digital-dashboard-demo.herokuapp.com',
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

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
