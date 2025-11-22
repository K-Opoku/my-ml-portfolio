// 1. PROFILE QUERY (Keeps your Hero & Bio working)
export const profileQuery = `*[_type == "profile"][0]{
  name,
  role,
  tagline,
  "heroImage": heroImage.asset->url,
  status,
  stats,
  bio,
  location,
  skills,
  "resumeUrl": resumeUrl,
  email,
  linkedin,
  github
}`

// 2. PROJECTS QUERY (Keeps your Work section working)
export const projectsQuery = `*[_type == "project"]{
  title,
  status,
  category,
  summary,
  metrics,
  tech,
  repoLink,
  demoLink
}`

// 3. POSTS QUERY (UPDATED: Now sorts by newest first!)
export const postsQuery = `*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  publishedAt,
  readTime,
  excerpt
}`