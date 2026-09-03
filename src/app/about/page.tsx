import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Italian Kitchen Concept (IKC)',
  description: 'Learn about Italian Concept General Trading LLC, our heritage in commercial kitchen engineering, marine-grade craftsmanship, and turnkey project delivery in UAE.',
};

export default function AboutPage() {
  return <AboutClient />;
}
