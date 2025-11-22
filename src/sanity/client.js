import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn, // Now this will work because we added the export above
  perspective: 'published',
})