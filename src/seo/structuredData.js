import { faqs } from '../data/content';
import { site } from '../data/site';

/**
 * Emits JSON-LD for the organisation and the FAQ list.
 * Generated from the same content module the UI renders, so the two can't drift.
 */
export function injectStructuredData() {
  const graph = [
    {
      '@type': 'EducationalOrganization',
      '@id': `${site.url}#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      areaServed: 'SA',
      knowsLanguage: ['ar', 'en'],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}#website`,
      url: site.url,
      name: site.title,
      inLanguage: 'ar',
      publisher: { '@id': `${site.url}#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(script);
}
