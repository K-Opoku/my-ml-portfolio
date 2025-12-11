import { defineQuery } from "next-sanity";

// 1. PROFILE QUERY (Updated for OpokuML Branding)
export const profileQuery = defineQuery(`*[_type == "profile"][0]{
  name,
  role,
  tagline,
  "heroImage": heroImage.asset->url,
  "logo": logo.asset->url,
  brandName,
  motto,
  status,
  stats,
  bio,
  location,
  skills,
  "resumeUrl": resumeUrl,
  email,
  whatsappNumber,
  linkedin,
  github,
  techStack
}`);

// 2. PROJECTS QUERY (Summary Card View)
export const projectsQuery = defineQuery(`*[_type == "project"]{
  title,
  "slug": slug.current,
  status,
  category,
  summary,
  metrics,
  tech,
  repoLink,
  demoLink,
  "mainImage": mainImage.asset->url
}`);

// 3. SINGLE PROJECT QUERY (Deep Dive Page)
export const singleProjectQuery = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title,
  status,
  category,
  summary,
  description,
  "architectureDiagram": architectureDiagram.asset->url,
  metrics,
  tech,
  repoLink,
  demoLink,
  "mainImage": mainImage.asset->url
}`);

// 4. POSTS QUERY (Sorted by Newest)
export const postsQuery = defineQuery(`*[_type == "post"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  excerpt,
  "mainImage": mainImage.asset->url
}`);

// 5. SERVICES QUERY (New!)
export const servicesQuery = defineQuery(`*[_type == "service"]{
  title,
  description,
  icon
}`);