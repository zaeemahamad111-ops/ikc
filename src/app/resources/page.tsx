import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Resources & Downloads | Italian Kitchen Concept (IKC)',
  description: 'Download official commercial kitchen catalogs, HACCP hygiene engineering specs, maintenance manuals, and FAQ resources.',
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
