import type { Metadata } from 'next';
import Preloader from '@/components/Preloader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Italian Kitchen Concept (IKC) | Professional Commercial Kitchen Systems',
  description: 'We design, build and deliver complete commercial kitchen solutions where precision meets performance. Italian craftsmanship & engineering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
