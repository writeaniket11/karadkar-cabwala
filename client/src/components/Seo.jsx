import { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'en';

    const setMeta = (selector, attributes, content) => {
      let meta = document.head.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        Object.entries(attributes).forEach(([name, value]) => meta.setAttribute(name, value));
        document.head.append(meta);
      }
      meta.setAttribute('content', content);
    };

    const canonicalUrl = new URL(window.location.pathname, window.location.origin).toString();
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.append(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    setMeta('meta[name="description"]', { name: 'description' }, description);
    setMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow');
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
  }, [title, description]);

  return null;
}
