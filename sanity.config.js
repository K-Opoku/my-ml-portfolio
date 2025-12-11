'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// These import paths assume you are following the standard project structure
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'

// 🛡️ SECURITY CHECK
// We check if the environment is 'development' (localhost)
const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool(),
    
    // 🛡️ SECURITY LAYER:
    // Only load the Vision Tool (the query playground) if we are in Development.
    // This prevents hackers from using it on your live website.
    isDev && visionTool({defaultApiVersion: apiVersion}),
    
  ].filter(Boolean), // This little filter removes the "false" value if isDev is false
})