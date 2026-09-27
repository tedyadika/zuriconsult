import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zuriconsult.com'),
  title: 'ZuriConsult | PPP & Investment Advisory in Kenya and Africa',
  description:
    'ZuriConsult develops public-private partnerships (PPPs), infrastructure projects and investment opportunities in Kenya and East Africa, connecting projects with international investors and delivery partners.',
  keywords: [
    'PPP advisory Kenya',
    'public-private partnership Africa',
    'investing in Kenya',
    'Africa infrastructure investment',
    'Kenya infrastructure projects',
    'East Africa project development',
    'infrastructure investment advisory',
    'PPP project development',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'ZuriConsult',
  },
  twitter: {
    card: 'summary',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://zuriconsult.com/#organization',
      name: 'Zuriconsultant',
      alternateName: 'ZuriConsult',
      url: 'https://zuriconsult.com',
      email: 'info@zuriconsult.com',
      sameAs: ['https://www.linkedin.com/company/zuriconsultant/about/'],
      areaServed: ['Kenya', 'East Africa', 'Europe'],
      knowsAbout: [
        'Public-private partnerships',
        'Infrastructure project development',
        'Investment facilitation',
        'Project finance',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zuriconsult.com/#website',
      url: 'https://zuriconsult.com',
      name: 'ZuriConsult',
      publisher: { '@id': 'https://zuriconsult.com/#organization' },
      inLanguage: 'en',
    },
  ],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-gray-900"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
