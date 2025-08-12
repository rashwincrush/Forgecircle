import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'ForgeAlumni Docs',
  tagline: 'Getting started, guides, and architecture',
  url: 'https://yourdomain.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ForgeAlumni',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/og.png',
    navbar: {
      title: 'ForgeAlumni Docs',
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { to: '/changelog', label: 'Changelog', position: 'left' },
        { to: '/roadmap', label: 'Roadmap', position: 'left' },
        { href: '/', label: 'Marketing Site', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Trust & Legal',
          items: [
            { label: 'Privacy', href: '/legal/privacy' },
            { label: 'Terms', href: '/legal/terms' },
            { label: 'DPA', href: '/legal/dpa' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ForgeAlumni`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
