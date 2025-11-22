import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile & Settings',
  type: 'document',
  icon: UserIcon,
  fields: [
    // 1. HERO SECTION
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
        title: 'Hero Tagline',
        type: 'string',
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
    }),

    // 2. METRICS
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

    // 3. ABOUT / JOURNEY
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

    // 4. RESUME HIGHLIGHTS
    defineField({
        name: 'skills',
        title: 'Top Technical Skills',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'resumeUrl',
        title: 'Resume PDF Link (Upload file to Sanity Media or external link)',
        type: 'url',
    }),

    // 5. CONTACT LINKS
    defineField({
        name: 'email',
        title: 'Email Address',
        type: 'string',
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