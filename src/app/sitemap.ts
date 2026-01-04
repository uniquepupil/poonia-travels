import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://warrenbreakfastgrill.vercel.app', lastModified: new Date() },
    { url: 'https://warrenbreakfastgrill.vercel.app/#menu', lastModified: new Date() },
  ]
}