/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    // Inject the Schema.org JSON-LD structured data into the head
    const schemaId = 'jflips-organization-schema';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SportsOrganization',
        'name': 'JFLIPS Athletic Cheerleading and Performance',
        'alternateName': 'JFLIPS',
        'url': window.location.origin,
        'logo': `${window.location.origin}/logo.png`,
        'description': 'Competitive cheerleading and tumbling coaching organization based in Krugersdorp, South Africa.',
        'telephone': '0735325298',
        'email': 'JFlipsInc@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Krugersdorp',
          'addressCountry': 'ZA'
        },
        'sameAs': [
          'https://www.instagram.com/jflipsinc/',
          'https://web.facebook.com/profile.php?id=61591986964463'
        ],
        'foundingDate': '2022',
        'knowsAbout': ['Cheerleading Coaching', 'Tumbling Training', 'Athletic Development', 'Confidence and Teamwork Development']
      });
      document.head.appendChild(schemaScript);
    }

    return () => {
      const existing = document.getElementById(schemaId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <>
      <title>JFLIPS | Cheerleading & Tumbling, Krugersdorp</title>
      <meta name="description" content="Competitive cheerleading and tumbling coaching in Krugersdorp. Structured, safety-first programs, private coaching, and school partnerships for young athletes." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="JFLIPS | Cheerleading & Tumbling, Krugersdorp" />
      <meta property="og:description" content="Competitive cheerleading, tumbling, and skill progression clinics built on real technique, teamwork, and confidence." />
      <meta property="og:site_name" content="JFLIPS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JFLIPS | Cheerleading & Tumbling, Krugersdorp" />
      <meta name="twitter:description" content="Competitive cheerleading, tumbling coaching, and school partnerships based in Krugersdorp." />
      
      {/* Additional discovery helpers */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="cheerleading South Africa, tumbling Krugersdorp, school cheer coach, youth athletic development, professional cheerleading school partnership, JFLIPS" />
    </>
  );
}
