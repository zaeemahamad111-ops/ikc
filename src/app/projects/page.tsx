import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Featured Projects & Portfolio | Italian Kitchen Concept (IKC)',
  description: 'View commercial kitchen projects delivered for fine dining restaurants, boutique hotels, catering facilities, and private villas in Dubai, Abu Dhabi, and GCC.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
