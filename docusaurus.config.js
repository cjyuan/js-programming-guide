// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JavaScript Programming Guide',
  tagline: 'A guide for new programmers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://js-programming-guide.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cjyuan', // Usually your GitHub org/user name.
  projectName: 'js-programming-guide',  // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },        
      },
    ] 
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs', 
      {
        id: 'js',
        routeBasePath: 'js',
        path: 'js',
        sidebarPath: require.resolve('./sidebars.js'),        
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'others',
        routeBasePath: 'others',
        path: 'others',
        sidebarPath: require.resolve('./sidebars.js'),      
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Programming Guide',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            to: '/js/intro',
            position: 'left',
            label: 'JavaScript',
            activeBaseRegex: `/js/`,            
          },
/*
// Hiding this from public until it has useful contents
          {
            to: '/others/intro', 
            label: 'Other Docs', 
            position: 'left',
            activeBaseRegex: `/others/`,            
          },
*/
          {
            href: 'https://github.com/cjyuan/js-programming-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `This work is licensed under CC BY-NC 4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
