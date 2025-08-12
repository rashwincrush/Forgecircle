import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Guides',
      items: ['admin-guide', 'member-guide'],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        'developer/architecture',
        'developer/rls-policies',
        'developer/realtime',
        'api',
        'webhooks',
      ],
    },
    'security',
    'changelog',
    'roadmap',
  ],
};

export default sidebars;
