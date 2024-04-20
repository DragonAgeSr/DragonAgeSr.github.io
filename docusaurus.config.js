// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DASR Wiki',
  tagline: 'An incredible tagline',
  favicon: 'img/DAIIcon.png',

  // Production URL
  url: 'https://dragonagesr.github.io/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'DragonAgeSR',
  projectName: 'DASR-Wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    discordUrl: 'http://discord.itt.run/',
    githubUrl: 'https://github.com/DragonAgeSR/DragonAgeSR.github.io',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/DragonAgeSR/DragonAgeSR.github.io/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'easy', 'medium', 'hard'],
            extendDefaults: true
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      /** ATSIGN type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        indexBlog: false,
        hashed: true,
        searchBarShortcutHint: false,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      })],
      'docusaurus-plugin-image-zoom'
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(27, 27, 29)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      navbar: {
        title: 'DASR Wiki',
        logo: {
          src: 'img/DAIIcon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'originsSidebar',
            position: 'left',
            label: 'Origins',
          },
          {
            type: 'docSidebar',
            sidebarId: 'da2Sidebar',
            position: 'left',
            label: 'DA2'
          },
          {
            type: 'docSidebar',
            sidebarId: 'inquisitionSidebar',
            position: 'left',
            label: 'Inquisition'
          },
          {
            type: 'docSidebar',
            sidebarId: 'dreadwolfSidebar',
            position: 'left',
            label: 'Dreadwolf'
          },
          {
            type: 'docSidebar',
            sidebarId: 'infoSidebar',
            position: 'left',
            label: 'Info'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'http://discord.itt.run/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DASR/DASR-Wiki',
              },
            ],
          },
        ],
        copyright: `Made with Docusaurus by the DASR Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
