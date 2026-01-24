export interface Company {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  location: string;
  locationSlug: string;
  services: string[];
  rating: number;
  reviewCount: number;
  phone: string;
  email: string;
  website: string;
  image: string;
  gallery: string[];
  featured: boolean;
}

export const locations = [
  { name: "Kuala Lumpur", slug: "kuala-lumpur" },
  { name: "Selangor", slug: "selangor" },
  { name: "Penang", slug: "penang" },
  { name: "Johor", slug: "johor" },
  { name: "Sabah", slug: "sabah" },
  { name: "Sarawak", slug: "sarawak" },
];

export const serviceTypes = [
  "Corporate Video",
  "Event Coverage",
  "Product Video",
  "TVC/Commercial",
  "Social Media Content",
  "Animation",
];

export const companies: Company[] = [
  {
    id: "1",
    slug: "stellar-productions-kl",
    name: "Stellar Productions KL",
    description:
      "Stellar Productions KL is a premier video production company based in Kuala Lumpur with over 10 years of experience in creating compelling visual content. We specialize in corporate videos, TV commercials, and brand films that help businesses tell their stories effectively. Our team of experienced directors, cinematographers, and editors work closely with clients to deliver high-quality productions that exceed expectations. We have worked with major brands including Petronas, Maybank, and AirAsia.",
    shortDescription:
      "Award-winning video production company specializing in corporate videos and TV commercials.",
    location: "Kuala Lumpur",
    locationSlug: "kuala-lumpur",
    services: ["Corporate Video", "TVC/Commercial", "Event Coverage", "Animation"],
    rating: 4.9,
    reviewCount: 127,
    phone: "+60 3-2142 5566",
    email: "hello@stellarproductions.my",
    website: "www.stellarproductions.my",
    image: "/images/companies/stellar.jpg",
    gallery: [
      "/images/gallery/stellar-1.jpg",
      "/images/gallery/stellar-2.jpg",
      "/images/gallery/stellar-3.jpg",
      "/images/gallery/stellar-4.jpg",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "motion-craft-studios",
    name: "Motion Craft Studios",
    description:
      "Motion Craft Studios is a creative video production house located in Petaling Jaya, Selangor. We bring ideas to life through stunning visuals and compelling storytelling. Our expertise spans across product videos, social media content, and event coverage. We pride ourselves on our attention to detail and commitment to delivering projects on time and within budget. Our state-of-the-art studio facility includes a green screen room and professional lighting setups.",
    shortDescription:
      "Creative video production house specializing in product videos and social media content.",
    location: "Selangor",
    locationSlug: "selangor",
    services: ["Product Video", "Social Media Content", "Event Coverage", "Corporate Video"],
    rating: 4.8,
    reviewCount: 89,
    phone: "+60 3-7890 1234",
    email: "info@motioncraft.my",
    website: "www.motioncraft.my",
    image: "/images/companies/motioncraft.jpg",
    gallery: [
      "/images/gallery/motioncraft-1.jpg",
      "/images/gallery/motioncraft-2.jpg",
      "/images/gallery/motioncraft-3.jpg",
      "/images/gallery/motioncraft-4.jpg",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "penang-visual-media",
    name: "Penang Visual Media",
    description:
      "Penang Visual Media is the leading video production company in Northern Malaysia. Based in George Town, we serve clients across Penang, Kedah, and Perak. Our team specializes in event videography, corporate documentaries, and promotional videos. We understand the unique culture and business landscape of Northern Malaysia, allowing us to create content that resonates with local and international audiences alike.",
    shortDescription:
      "Northern Malaysia's leading video production company for events and corporate content.",
    location: "Penang",
    locationSlug: "penang",
    services: ["Event Coverage", "Corporate Video", "Product Video", "Social Media Content"],
    rating: 4.7,
    reviewCount: 64,
    phone: "+60 4-262 8899",
    email: "contact@penangvisual.my",
    website: "www.penangvisual.my",
    image: "/images/companies/penangvisual.jpg",
    gallery: [
      "/images/gallery/penangvisual-1.jpg",
      "/images/gallery/penangvisual-2.jpg",
      "/images/gallery/penangvisual-3.jpg",
      "/images/gallery/penangvisual-4.jpg",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "jb-creative-films",
    name: "JB Creative Films",
    description:
      "JB Creative Films is a dynamic video production company based in Johor Bahru. We specialize in creating engaging video content for businesses in Southern Malaysia and Singapore. Our services include TV commercials, corporate videos, and animation. With our strategic location near Singapore, we offer competitive rates while maintaining international production standards. Our multilingual team can produce content in English, Malay, Mandarin, and Tamil.",
    shortDescription:
      "Dynamic video production serving Southern Malaysia and Singapore with multilingual capabilities.",
    location: "Johor",
    locationSlug: "johor",
    services: ["TVC/Commercial", "Corporate Video", "Animation", "Social Media Content"],
    rating: 4.6,
    reviewCount: 52,
    phone: "+60 7-334 5566",
    email: "hello@jbcreativefilms.my",
    website: "www.jbcreativefilms.my",
    image: "/images/companies/jbcreative.jpg",
    gallery: [
      "/images/gallery/jbcreative-1.jpg",
      "/images/gallery/jbcreative-2.jpg",
      "/images/gallery/jbcreative-3.jpg",
      "/images/gallery/jbcreative-4.jpg",
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "prime-video-solutions",
    name: "Prime Video Solutions",
    description:
      "Prime Video Solutions is a full-service video production agency headquartered in Bangsar, Kuala Lumpur. We offer end-to-end video production services from concept development to final delivery. Our expertise includes corporate training videos, investor presentations, and brand documentaries. We have an in-house post-production team skilled in color grading, motion graphics, and sound design. Our clients include Fortune 500 companies and government agencies.",
    shortDescription:
      "Full-service video production agency with expertise in corporate and training videos.",
    location: "Kuala Lumpur",
    locationSlug: "kuala-lumpur",
    services: ["Corporate Video", "Event Coverage", "Animation", "Product Video"],
    rating: 4.8,
    reviewCount: 98,
    phone: "+60 3-2201 7788",
    email: "enquiry@primevideo.my",
    website: "www.primevideo.my",
    image: "/images/companies/primevideo.jpg",
    gallery: [
      "/images/gallery/primevideo-1.jpg",
      "/images/gallery/primevideo-2.jpg",
      "/images/gallery/primevideo-3.jpg",
      "/images/gallery/primevideo-4.jpg",
    ],
    featured: false,
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}

export function getCompaniesByLocation(locationSlug: string): Company[] {
  return companies.filter((company) => company.locationSlug === locationSlug);
}

export function getFeaturedCompanies(): Company[] {
  return companies.filter((company) => company.featured);
}

export function filterCompanies(
  locationSlug?: string,
  serviceType?: string
): Company[] {
  return companies.filter((company) => {
    const matchesLocation = !locationSlug || company.locationSlug === locationSlug;
    const matchesService = !serviceType || company.services.includes(serviceType);
    return matchesLocation && matchesService;
  });
}

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
