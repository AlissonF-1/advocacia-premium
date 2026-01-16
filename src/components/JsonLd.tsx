export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService", // ou 'Attorney'
    "name": "Silva & Associados Advocacia",
    "image": "https://seusite.com.br/foto-advogado.jpg", // URL da imagem principal
    "description": "Escritório de advocacia especialista em Direito Civil e Trabalhista com mais de 15 anos de experiência.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.561684,
      "longitude": -46.655981
    },
    "url": "https://seusite.com.br",
    "telephone": "+5511999999999",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}