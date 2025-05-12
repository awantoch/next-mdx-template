export const SITE_CONFIG = {
  title: 'Next.js Template',
  description: 'A modern Next.js template with MDX support.',
  locale: 'en_US',
  language: 'en',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
} as const

export const METADATA_CONFIG = {
  keywords: [
    'nextjs',
    'react',
    'mdx',
    'typescript',
    'template',
    'blog',
    'journal',
    'content',
  ],
  author: 'Your Name',
  twitterHandle: '@yourhandle',
  descriptions: {
    home: 'A modern Next.js template with MDX support and excellent performance.',
    journal: 'Share your thoughts and insights.'
  }
}

export const NAV_ITEMS = {
  '/': {
    name: 'home',
  },
  '/journal': {
    name: 'journal',
  },
  'mailto:your@email.com': {
    name: 'contact me',
  },
} as const

export const OG_CONFIG = {
  defaultTitle: 'Next.js Template',
  imageWidth: 1200,
  imageHeight: 630,
} as const

export const DATE_CONFIG = {
  defaultTimeString: 'T00:00:00',
  dateLocale: 'en-us',
  dateFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  },
} as const 