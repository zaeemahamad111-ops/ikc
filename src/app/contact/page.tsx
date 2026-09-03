import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Italian Kitchen Concept (IKC)',
  description: 'Get in touch with Italian Concept General Trading LLC in Dubai for commercial kitchen consultations, CAD planning, and technical inquiries.',
};

export default function ContactPage() {
  return <ContactClient />;
}
