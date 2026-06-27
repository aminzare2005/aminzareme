import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Footer from "@/Components/footer";

const font = localFont({
  src: "../public/assets/fonts/Inter.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amin Zare (@cwpslxck)",
  description: "Digital Creator & Frontend Developer",
  authors: [{ name: "Amin Zare" }],
  creator: "Amin Zare",
  publisher: "Amin Zare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://aminzare.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amin Zare (@cwpslxck)",
    description: "Digital Creator & Frontend Developer",
    url: "https://aminzare.me",
    siteName: "Amin Zare Portfolio",
    images: [
      {
        url: "/assets/preview-twitter.png",
        width: 1200,
        height: 630,
        alt: "Amin Zare - Digital Creator & Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/preview-twitter.png",
    title: "aminzare.me",
    description: "Digital Creator & Frontend Developer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Amin Zare Portfolio",
      url: "https://aminzare.me",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      name: "Amin Zare",
      url: "https://aminzare.me",
      image: "https://github.com/aminzare2005.png",
      jobTitle: "Frontend Developer",
      sameAs: [
        "https://github.com/aminzare2005",
        "https://linkedin.com/in/aminzare2005",
        "https://x.com/cwpslxck",
        "https://instagram.com/cwpslxck",
        "https://youtube.com/@cwpslxck",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body className={`${font.className} antialiased w-full`}>
        <Script
          src="https://bazeh.vercel.app/script"
          data-site-id="15068e13-2aee-46d3-8788-499dc2ddd9ce"
          strategy="afterInteractive"
        />
        <main className="px-2 pt-2 pb-12 md:pb-28 md:pt-14">
          <div className="w-full md:max-w-2xl md:mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
