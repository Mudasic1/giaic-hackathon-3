import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'qtlc5g66',  
  dataset: 'production', 
  apiVersion: '2025-01-21',  
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any): string {
  if (!source) {
    console.warn('Invalid image source provided to urlFor function');
    return '/placeholder.png'; // Return a placeholder image for invalid sources
  }
  return builder.image(source).url() || '/placeholder.png';
}
