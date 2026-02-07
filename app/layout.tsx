import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import { QuoteProvider } from "./components/QuoteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Production Companies Malaysia | Corporate Video Production Services",
  description: "Find the best video production companies in Malaysia. Get free quotes for corporate videos, commercials, event coverage & more.",
  verification: {
    google: "y6Bi8UADY_pPTCodZV7bDnA3a1JPPDlsYP90lSQW9DQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/favicon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/logo/vpmy-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VideoProductionMY",
              url: "https://videoproductionmy.com",
              logo: "https://videoproductionmy.com/logo/vpmy-logo.png",
              description:
                "Find the best video production companies in Malaysia. Get free quotes for corporate videos, commercials, event coverage and more.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://videoproductionmy.com/contact",
              },
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G45RK9LLB3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G45RK9LLB3');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoteProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
