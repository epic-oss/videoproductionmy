"use client";

import { useState } from "react";

interface CompanyLogoProps {
  website: string;
  name: string;
  size?: "sm" | "md" | "lg" | "card";
}

function getDomain(website: string): string | null {
  if (!website) return null;
  try {
    let url = website.trim();
    if (!url.startsWith("http")) url = "https://" + url;
    const parsed = new URL(url);
    return parsed.hostname.replace("www.", "");
  } catch {
    // Try extracting domain directly
    const match = website.match(/(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/);
    return match ? match[1] : null;
  }
}

const sizeClasses = {
  sm: "w-10 h-10 text-lg",
  md: "w-16 h-16 text-2xl",
  lg: "w-20 h-20 text-3xl",
  card: "w-full h-48",
};

const gradients = [
  "from-blue-600 to-blue-800",
  "from-purple-600 to-purple-800",
  "from-green-600 to-green-800",
  "from-orange-600 to-orange-800",
  "from-red-600 to-red-800",
  "from-teal-600 to-teal-800",
  "from-indigo-600 to-indigo-800",
  "from-pink-600 to-pink-800",
];

function getGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function CompanyLogo({ website, name, size = "md" }: CompanyLogoProps) {
  const [imgError, setImgError] = useState(false);
  const domain = getDomain(website);
  const gradient = getGradient(name);
  const isCard = size === "card";

  if (domain && !imgError) {
    const logoUrl = `https://logo.clearbit.com/${domain}`;

    if (isCard) {
      return (
        <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="w-20 h-20 object-contain rounded-lg bg-white p-2"
            onError={() => setImgError(true)}
          />
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0`}>
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: letter avatar with gradient
  if (isCard) {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white text-5xl font-bold opacity-60">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-bold opacity-80">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
