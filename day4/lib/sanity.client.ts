import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'qtlc5g66',
  dataset: 'production',
  apiVersion: '',
  useCdn: false,
}); 