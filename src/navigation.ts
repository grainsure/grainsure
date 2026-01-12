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
      href: getPermalink('/services'),
    },       
    {
      text: 'คลังความรู้',
      href: getPermalink('/article'),
    },       
    {
          text: 'เกี่ยวกับเรา',
          href: getPermalink('/about-us'),
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
          href: getPermalink('/') + '#products',
        },
        {
          text: 'บริการ',
          href: getPermalink('/services'),
        },
        {
          text: 'เกี่ยวกับเรา',
          href: getPermalink('/about-us'),
        },
        {
          text: 'ทำไมต้องเลือกเรา',
          href: getPermalink('/') + '#Our-Features',
        },
      ],
    },
    {
      title: 'ผลิตภัณฑ์',
      links: [
        {
          text: 'KU72-ข้าวเปลือก',
          href: getPermalink('/Products/paddy-moisture-meter-ku72'),
        },
        {
          text: 'KU72-ข้าวข้าวโพด',
          href: getPermalink('/Products/corn-moisture-meter-ku72'),
        },
        {
          text: 'KU60',
          href: getPermalink('/Products/grain-moisture-meter-ku60'),
        },
        {
          text: 'EE-KU',
          href: getPermalink('/Products/grain-moisture-meter-eeku'),
        },
      ],
    },    
    {
      title: 'บริการ',
      links: [
        {
          text: 'ซ่อมเครื่องวัดความชื้น',
          href: getPermalink('/services') + '/#Fix-Repair',
        },
        {
          text: 'ต่ออายุใบรับรอง',
          href: getPermalink('/services') + '/#cert-renewal',
        },
        {
          text: 'รับผลิตตามสั่ง',
          href: getPermalink('/services') + '/#made-to-order',
        },
        {
          text: 'เมล็ดที่รองรับ',
          href: getPermalink('/services') + '/#grain-features',
        },
      ],
    },    
    {
      title: 'สิ่งน่าสนใจ',
      links: [
        {
          text: 'คลังความรู้',
          href: getPermalink('/article'),
        },
        {
          text: 'โปรแกรมคำนวณความชื้น',
          href: getPermalink('/') + '#gs-calculator',
        },
      ],
    },    
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('') },
    { text: 'Privacy Policy', href: getPermalink('') },
  ],
  socialLinks: [
    { ariaLabel: 'Line', icon: 'tabler:brand-line', href: 'https://line.me/ti/p/~@grainsure#~' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Grainsure/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
