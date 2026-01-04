import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  
  links: [
    {
      text: 'หน้าหลัก',
      href: getPermalink('/'),
    },
    {
      text: 'ผลิตภัณฑ์',
      href: getPermalink('/#products'),
    },
    {
      text: 'บริการ',
      href: getPermalink('/#services-main'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'สุดทางแล้ว ไปไหนต่อดี ?',
      links: [
        {
          text: 'หน้าหลัก',
          href: getPermalink('/'),
        },
        {
          text: 'ผลิตภัณฑ์',
          href: getPermalink('/#products'),
        },
        {
          text: 'บริการ',
          href: getPermalink('/#services-main'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Line', icon: 'tabler:brand-line', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
