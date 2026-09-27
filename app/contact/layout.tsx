import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ZuriConsult | PPP & Infrastructure Projects',
  description:
    'Contact ZuriConsult to discuss PPP advisory, infrastructure development and investment opportunities in Kenya and East Africa.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
