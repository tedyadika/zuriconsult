import type { MetadataRoute } from 'next';

import { siteUrl } from './seo';

const publicRoutes = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/services/ppp-infrastructure',
  '/services/investment-development',
  '/services/it-digital',
  '/services/ai-ml',
  '/services/cloud-azure',
  '/services/technology-innovation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
