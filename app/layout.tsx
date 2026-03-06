import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuoteModalProvider } from '@/components/QuoteModalProvider';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.companyName} | Premium Corporate Delivery`,
    template: `%s | ${siteConfig.companyName}`
  },
  description: siteConfig.tagline,
  keywords: [
    'Real Estate',
    'Engineering',
    'Telecommunications',
    'Information Technology',
    'Project Management',
    'General Services',
    'Real Estate Developers',
    'Property Owners',
    'Engineering and Construction Firms',
    'Telecommunications Operators',
    'Oil Field Services',
    'OEMs',
    'Vendors and Contractors',
    'IT Infrastructure',
    'DeKoy'
  ],
  openGraph: {
    title: `${siteConfig.companyName} | Premium Corporate Delivery`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.companyName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'DeKoy corporate services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.companyName} | Premium Corporate Delivery`,
    description: siteConfig.tagline,
    images: ['/assets/og-default.svg']
  },
  icons: {
    icon: '/assets/dekoy-logo.jpg',
    shortcut: '/assets/dekoy-logo.jpg',
    apple: '/assets/dekoy-logo.jpg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[var(--font-manrope)]">
        <QuoteModalProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
