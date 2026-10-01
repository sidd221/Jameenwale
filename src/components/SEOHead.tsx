import { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  schema?: Record<string, any>;
}

export default function SEOHead({
  title,
  description,
  canonicalUrl = 'https://jameenwale.vercel.app/',
  ogImage = 'https://jameenwale.vercel.app/og-image.jpg',
  ogType = 'website',
  noindex = false,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // 2. Meta description
    setMetaTag('name', 'description', description);

    // 3. Robots
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, follow');
      setMetaTag('name', 'googlebot', 'noindex, follow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // 4. Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 5. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);

    // 6. Twitter
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:url', canonicalUrl);

    // 7. Dynamic JSON-LD schema script for route
    let dynamicSchemaScript = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!dynamicSchemaScript) {
        dynamicSchemaScript = document.createElement('script');
        dynamicSchemaScript.id = 'dynamic-page-schema';
        dynamicSchemaScript.type = 'application/ld+json';
        document.head.appendChild(dynamicSchemaScript);
      }
      dynamicSchemaScript.text = JSON.stringify(schema);
    } else if (dynamicSchemaScript) {
      dynamicSchemaScript.remove();
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

  }, [title, description, canonicalUrl, ogImage, ogType, noindex, schema]);

  return null;
}
