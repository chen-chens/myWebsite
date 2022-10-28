// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chen Huei Jen',
  tagline: 'Front-End Developer',
  url: 'https://github.com',
  baseUrl: '/myWebsite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chen-chens', // Usually your GitHub org/user name.
  projectName: 'myWebsite', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      {
        googleAnalytics: {
          trackingID: 'G-ENE9EHMPY4',
          anonymizeIP: true,
        },
      },
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      defaultMode: 'light',
      hideableSidebar: true,
      navbar: {
        title: 'Huei Jen Chen',
        items: [
          {
            label: 'Tech Notes',
            type: 'doc',
            docId: 'git/git_intro',
            position: 'left',
          },
          // {
          //   label: 'Side Projects',
          //   to: '/projects',  
          //   position: 'left'
          // },
          // {
          //   label: 'Email',
          //   href: 'https://line.me/ti/p/iY942GaUzk',
          //   position: 'right',
          // },
          {
            label: 'Line',
            href: 'https://line.me/ti/p/iY942GaUzk',
            position: 'right',
          },
          {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/huei-jen-chen',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/chen-chens',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
