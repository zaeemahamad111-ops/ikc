import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Integrated Solutions & Services | Italian Kitchen Concept (IKC)',
  description: 'Explore commercial kitchen solutions including cooking suites, refrigeration, ventilation, dishwashing, and custom stainless fabrication.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
