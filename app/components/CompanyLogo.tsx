"use client";

import { useState } from "react";

interface CompanyLogoProps {
  website: string;
  name: string;
  size?: "sm" | "md" | "lg" | "card";
}

const SOCIAL_MEDIA_DOMAINS = [
  "facebook.com",
  "fb.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "tiktok.com",
  "youtube.com",
  "linkedin.com",
];

function isSocialMediaUrl(website: string): boolean {
  const lower = website.toLowerCase();
  return SOCIAL_MEDIA_DOMAINS.some((domain) => lower.includes(domain));
}

function getDomain(website: string): string | null {
  if (!website || isSocialMediaUrl(website)) return null;
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
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-24 h-24",
  card: "w-full h-48",
};

const imgClasses = {
  sm: "w-8 h-8",
  md: "w-14 h-14",
  lg: "w-16 h-16",
  card: "w-24 h-24",
};

const iconSizes = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-12 h-12",
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
    const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

    if (isCard) {
      return (
        <div className={`${sizeClasses[size]} bg-white border-b border-gray-200 flex items-center justify-center`}>
          <div className="w-24 h-24 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-3">
            <img
              src={logoUrl}
              alt={`${name} logo`}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 p-2`}>
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className={`${imgClasses[size]} object-contain`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: professional video camera icon
  if (isCard) {
    return (
      <div className={`${sizeClasses[size]} bg-white border-b border-gray-200 flex items-center justify-center`}>
        <div className="w-24 h-24 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
          <DefaultIcon className={`${iconSizes[size]} text-gray-300`} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0`}>
      <DefaultIcon className={`${iconSizes[size]} text-gray-300`} />
    </div>
  );
}
