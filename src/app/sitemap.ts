import { MetadataRoute } from 'next';
import { getServices, getTrabajosWithRecursos } from '@/sanity/sanity-utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byfx.pro';
  
  const services = await getServices();
  const works = await getTrabajosWithRecursos();

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const workUrls = works.map((work) => ({
    url: `${baseUrl}/works/${work._id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceUrls,
    ...workUrls,
  ];
}
