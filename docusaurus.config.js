// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CHEN HUEI-JEN',
  tagline: 'Front-End Developer',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chen-chens', // Usually your GitHub org/user name.
  projectName: 'myWebsite', // Usually your repo name.

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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      navbar: {
        title: 'Huei Jen Chen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            // label: 'TechDocs',
            label: '技術筆記',
            type: 'doc',
            docId: 'emmet',
            position: 'left',
          },
          {
            label: '閱讀筆記',
            to: '/blog',  
            position: 'left'
          },
          {
            label: '專案作品',
            to: '/projects',  
            position: 'left'
          },
          {
            label: 'Email',
            href: 'https://www.linkedin.com/in/huei-jen-chen',
            position: 'right',
          },
          {
            label: 'Profolio',
            href: 'https://www.linkedin.com/in/huei-jen-chen',
            position: 'right',
          },
          {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/huei-jen-chen',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About me',
            items: [
              {
                label: 'Profolio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Contact me',
            items: [
              {
                label: 'Email',
                href: 'https://www.linkedin.com/in/huei-jen-chen',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/huei-jen-chen',
              },
            ],
          },
        ],
        copyright: "© 2022 by CHEN HUEI-JEN",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
