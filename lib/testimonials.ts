export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Logos Trinity built our India engineering hub from zero to 80 engineers in under nine months — and the quality bar never slipped.",
    name: "Aarav Mehta",
    role: "VP of Engineering",
    company: "Northwind FinTech",
    industry: "Financial Services",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Their RPO team operates like an extension of ours. Weekly ops reviews, ATS hygiene, candidate experience — it's all dialed in.",
    name: "Priya Raghavan",
    role: "Chief People Officer",
    company: "Helios Health",
    industry: "Healthcare",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "We were stuck on a legacy ERP for years. Their team migrated us in under five months with zero unplanned downtime.",
    name: "Rohit Sundaram",
    role: "CIO",
    company: "Trident Logistics",
    industry: "Logistics & Supply Chain",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Sharp consultants, clean delivery, and genuinely strategic on workforce design. Rare combination in this market.",
    name: "Anjali Verma",
    role: "Head of Strategy",
    company: "Bluestone Capital",
    industry: "Investment Management",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "From senior leadership hires to bulk operations staffing, Logos Trinity is our default partner across India.",
    name: "Karthik Iyer",
    role: "CHRO",
    company: "Coastal Manufacturing Group",
    industry: "Manufacturing",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "Their software pod shipped our customer portal in 14 weeks. Production-grade, fully tested, beautifully designed.",
    name: "Meera Kapoor",
    role: "Director of Product",
    company: "Aurora EdTech",
    industry: "Education Technology",
    rating: 5,
  },
];

export const stats = [
  { label: "Talent placed", value: 12500, suffix: "+" },
  { label: "Enterprise clients", value: 180, suffix: "+" },
  { label: "Avg. time-to-hire", value: 14, suffix: " days" },
  { label: "Retention at 12mo", value: 96, suffix: "%" },
];

export const trustedBy = [
  "Northwind",
  "Helios Health",
  "Trident",
  "Bluestone",
  "Coastal Group",
  "Aurora",
  "Meridian",
  "Vertex Labs",
  "Skybridge",
  "Lumen Tech",
];
