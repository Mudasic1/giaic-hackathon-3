import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'qtlc5g66',
  dataset: 'production',
  apiVersion: '2025-01-21',
  useCdn: false,
}); 