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
    const match = website.match(/(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/);
    return match ? match[1] : null;
  }
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  card: "w-full h-48",
};

const faviconSizes = {
  sm: 32,
  md: 64,
  lg: 128,
  card: 128,
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  card: "w-16 h-16",
};

function DefaultIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
      <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
    </svg>
  );
}

export default function CompanyLogo({ website, name, size = "md" }: CompanyLogoProps) {
  const [imgError, setImgError] = useState(false);
  const domain = getDomain(website);
  const isCard = size === "card";

  if (domain && !imgError) {
    const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=${faviconSizes[size]}`;

    if (isCard) {
      return (
        <div className={`${sizeClasses[size]} bg-gray-100 flex items-center justify-center`}>
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-sm"
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
          className="w-3/4 h-3/4 object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: professional video camera icon
  if (isCard) {
    return (
      <div className={`${sizeClasses[size]} bg-gray-100 flex items-center justify-center`}>
        <DefaultIcon className={`${iconSizes[size]} text-gray-400`} />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0`}>
      <DefaultIcon className={`${iconSizes[size]} text-gray-400`} />
    </div>
  );
}
