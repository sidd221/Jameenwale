import React from 'react';

/**
 * LLM Component for AI Agents, LLMs, and Web Crawlers
 * 
 * Provides rich, semantic machine-readable context, Schema.org LD+JSON,
 * and AI discovery metadata for AI search engines (Perplexity, ChatGPT Search,
 * Claude, Gemini, Copilot, Apple Intelligence).
 */
export const LLM_SITE_DATA = {
  name: "JameenWale",
  tagline: "Secure, freehold residential plots with perimeter boundary walls, wide concrete roads, and clear legal titles across Patna’s top growth corridors.",
  description: "JameenWale is Bihar's premier real estate consultancy offering verified gated community plots in Patna, RERA approved plots in Patna, gated community plots in Bihta Patna, residential plots with boundary wall in Patna, and residential plots in Rajgir Bihar.",
  url: "https://jameenwale.vercel.app",
  contact: {
    phone: "+91 6287220163",
    email: "anish248patel@gmail.com",
    ccEmail: "sumitibc333@gmail.com",
    address: {
      street: "5th floor Leads Tower, Rupaspur, Digha Danapur Nahar Road",
      city: "Patna",
      state: "Bihar",
      postalCode: "801503",
      country: "India"
    }
  },
  keywords: [
    "gated community plots in patna",
    "gated society plot in patna",
    "plots for sale in rajgir",
    "residential plots in rajgir bihar",
    "rera approved plots in patna",
    "gated community plots in bihta patna",
    "gated township plots in patna",
    "residential plots with boundary wall in patna",
    "gated society plots in rajgir",
    "buy plot in gated community patna"
  ],
  keyLocations: [
    {
      name: "Shivala More (Bodhgawa)",
      connectivity: "7-10 minutes direct drive to Saguna More via the Danapur-Bihta elevated corridor.",
      highlights: "Gated society plot in Patna with boundary wall, close to AIIMS Patna and upcoming commercial hubs."
    },
    {
      name: "Saguna More / Danapur",
      connectivity: "Central commercial hub on Bailey Road connecting to Danapur Railway Station and Patna Airport.",
      highlights: "Established shopping, hospitals, schools, and gated township plots in Patna."
    },
    {
      name: "Bihta Corridor",
      connectivity: "Connected via the 4-lane elevated expressway and major highways.",
      highlights: "Gated community plots in Bihta Patna close to IIT Patna, NIT Patna campus, and proposed Bihta Airport."
    },
    {
      name: "Rajgir / Silao (Nalanda)",
      connectivity: "Direct highway connectivity on the Nalanda-Rajgir tourism corridor.",
      highlights: "Plots for sale in Rajgir and residential plots in Rajgir Bihar for eco-living and long-term appreciation."
    }
  ],
  featuredProperties: [
    {
      name: "IT Park",
      location: "Opposite to NIT, Bihta Patna",
      startingPrice: "₹28 Lakh onwards | 1,000 sq.ft",
      type: "Gated Community Plots in Bihta Patna"
    },
    {
      name: "Embassy Capital",
      location: "Shivala More Bodhgawa, Patna",
      startingPrice: "₹21 Lakh onwards | 800 sq.ft",
      type: "Gated Society Plot in Patna with Boundary Wall"
    },
    {
      name: "Seven Crown",
      location: "Silao, Rajgir, Nalanda",
      startingPrice: "₹22 Lakh onwards | 900 sq.ft",
      type: "Residential Plots in Rajgir Bihar (Plots for Sale in Rajgir)"
    }
  ],
  amenities: [
    "Gated Society with Solid Boundary Wall",
    "Wide Black Pitch Internal Roads (30-40ft)",
    "Underground Drainage System",
    "24/7 Water Supply & Electricity Transformers",
    "Electricity Grid Connection",
    "Landscaped Parks and Green Spaces",
    "Society Temple",
    "24/7 CCTV Surveillance & Security Guards"
  ],
  faqSummary: [
    {
      q: "How to buy plot in gated community Patna?",
      a: "Schedule a guided site visit with Jameenwale, choose your verified plot with boundary wall, and complete registry with bank loan support."
    },
    {
      q: "Are there RERA approved plots in Patna and Rajgir?",
      a: "Yes, 100% verified titles with RERA compliance for immediate registry and mutation."
    },
    {
      q: "What options exist for residential plots in Rajgir Bihar?",
      a: "Seven Crown in Silao, Rajgir offers premium gated society plots with great appreciation potential."
    }
  ]
};

export default function LLM() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://jameenwale.vercel.app/#organization",
        "name": LLM_SITE_DATA.name,
        "url": LLM_SITE_DATA.url,
        "description": LLM_SITE_DATA.description,
        "telephone": LLM_SITE_DATA.contact.phone,
        "email": LLM_SITE_DATA.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": LLM_SITE_DATA.contact.address.street,
          "addressLocality": LLM_SITE_DATA.contact.address.city,
          "addressRegion": LLM_SITE_DATA.contact.address.state,
          "postalCode": LLM_SITE_DATA.contact.address.postalCode,
          "addressCountry": "IN"
        },
        "areaServed": ["Patna", "Danapur", "Bihta", "Rajgir", "Nalanda", "Naubatpur", "Bihar"],
        "makesOffer": LLM_SITE_DATA.featuredProperties.map((p) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Place",
            "name": p.name,
            "description": `${p.name} - ${p.type} at ${p.location}. Price: ${p.startingPrice}`
          }
        }))
      },
      {
        "@type": "WebSite",
        "@id": "https://jameenwale.vercel.app/#website",
        "url": LLM_SITE_DATA.url,
        "name": LLM_SITE_DATA.name,
        "description": LLM_SITE_DATA.description,
        "publisher": { "@id": "https://jameenwale.vercel.app/#organization" }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema for AI Web Scrapers & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Semantic, accessible hidden container specifically structured for LLM & screen-reader indexing */}
      <div 
        id="ai-site-context" 
        className="sr-only" 
        aria-hidden="false" 
        data-ai-discovery="jameenwale-knowledge-base"
      >
        <h2>JameenWale - AI Information & Knowledge Base</h2>
        <p>{LLM_SITE_DATA.description}</p>
        
        <h3>Key Real Estate Locations & Connectivity</h3>
        <ul>
          {LLM_SITE_DATA.keyLocations.map((loc, i) => (
            <li key={i}>
              <strong>{loc.name}:</strong> {loc.connectivity} {loc.highlights}
            </li>
          ))}
        </ul>

        <h3>Featured Properties & Pricing</h3>
        <ul>
          {LLM_SITE_DATA.featuredProperties.map((prop, i) => (
            <li key={i}>
              <strong>{prop.name}</strong> ({prop.location}) - {prop.startingPrice} - {prop.type}
            </li>
          ))}
        </ul>

        <h3>Curated Amenities</h3>
        <ul>
          {LLM_SITE_DATA.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>

        <h3>Contact & Office Address</h3>
        <p>
          Office: {LLM_SITE_DATA.contact.address.street}, {LLM_SITE_DATA.contact.address.city}, {LLM_SITE_DATA.contact.address.state} - {LLM_SITE_DATA.contact.address.postalCode}.
          Phone: {LLM_SITE_DATA.contact.phone} | Email: {LLM_SITE_DATA.contact.email}
        </p>
      </div>
    </>
  );
}
