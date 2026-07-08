export const company = {
  legalName: "Logos Trinity Technologies LLP",
  shortName: "Logos Trinity",
  tagline: "Empowering Talent. Building Technology. Transforming Businesses.",
  email: "info@logostrinitytechnologies.com",
  phone: "+91 99492 22113",
  phoneRaw: "+919949222113",
  website: "www.logostrinitytechnologies.com",
  websiteUrl: "https://www.logostrinitytechnologies.com",
  address: {
    line1: "D.No. 14-58, HB Colony",
    line2: "PM Palem, PM Palem Police Station",
    city: "Visakhapatnam (Urban)",
    state: "Andhra Pradesh",
    zip: "530041",
    country: "India",
  },
  founded: 2026,
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

export const fullAddress = [
  company.address.line1,
  company.address.line2,
  `${company.address.city} - ${company.address.zip}`,
  `${company.address.state}, ${company.address.country}`,
].join(", ");
