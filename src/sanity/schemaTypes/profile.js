import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile & Settings',
  type: 'document',
  icon: UserIcon,
  fields: [
    // 1. BRANDING (NEW SECTIONS)
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'OpokuML',
      description: 'The name displayed in the tab and header (e.g. OpokuML).',
    }),
    defineField({
        name: 'logo',
        title: 'Brand Logo',
        type: 'image',
        options: { hotspot: true },
        description: 'Upload your circular OpokuML logo here.',
    }),
    defineField({
        name: 'motto',
        title: 'Brand Motto',
        type: 'string',
        description: 'e.g., "Data is the source, intelligence is the system."',
    }),

    // 2. HERO SECTION
    defineField({
        name: 'name',
        title: 'Full Name',
        type: 'string',
    }),
    defineField({
        name: 'role',
        title: 'Role Title',
        type: 'string', 
    }),
    defineField({
        name: 'tagline',
        title: 'Hero Headline',
        type: 'string',
        description: 'The big bold text (e.g., "I build scalable ML systems").',
    }),
    defineField({
        name: 'heroImage',
        title: 'Hero Image / Headshot',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
        name: 'status',
        title: 'Work Status',
        type: 'string',
        description: 'e.g. "Available for projects"',
    }),

    // 3. METRICS
    defineField({
        name: 'stats',
        title: 'Key Metrics',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'value', type: 'string', title: 'Value (e.g. 12+)'},
                {name: 'label', type: 'string', title: 'Label (e.g. Models Deployed)'}
            ]
        }]
    }),

    // 4. TECH STACK (NEW FOR MARQUEE)
    defineField({
        name: 'techStack',
        title: 'Tech Stack Logos',
        description: 'List of technologies for the scrolling marquee (e.g. "Python", "AWS", "Docker").',
        type: 'array',
        of: [{type: 'string'}]
    }),

    // 5. ABOUT / JOURNEY
    defineField({
        name: 'bio',
        title: 'About Me (Bio)',
        type: 'text',
        rows: 4
    }),
    defineField({
        name: 'location',
        title: 'Current Location',
        type: 'string',
    }),

    // 6. RESUME HIGHLIGHTS
    defineField({
        name: 'skills',
        title: 'Top Technical Skills (List)',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'resumeUrl',
        title: 'Resume PDF Link',
        type: 'url',
    }),

    // 7. CONTACT LINKS
    defineField({
        name: 'email',
        title: 'Email Address',
        type: 'string',
    }),
    defineField({
        name: 'whatsappNumber',
        title: 'WhatsApp Number',
        type: 'string',
        description: 'Your number with country code, no spaces or + (e.g. 233501234567).',
    }),
    defineField({
        name: 'linkedin',
        title: 'LinkedIn URL',
        type: 'url',
    }),
    defineField({
        name: 'github',
        title: 'GitHub URL',
        type: 'url',
    })
  ],
})