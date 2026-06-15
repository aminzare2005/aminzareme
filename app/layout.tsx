import type { Metadata } from "next";
import localFont from "next/font/local";
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
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased w-full`}>
        <main className="px-2 pt-2 pb-12 md:pb-28 md:pt-14">
          <div className="w-full md:max-w-2xl md:mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
