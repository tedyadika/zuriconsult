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
  title: 'Zuriconsultant | Data Engineering & Cloud Migration',
  description:
    'Zuriconsultant provides data engineering and cloud migration consulting across Databricks, AWS and Azure.',
  keywords: [
    'PPP consulting',
    'infrastructure advisory',
    'investment consulting',
    'project development',
    'Africa investment',
    'Europe Africa business',
    'IT consulting',
    'AI consulting',
    'Azure consulting',
    'data engineering',
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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
