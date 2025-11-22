import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
        name: 'readTime',
        title: 'Read Time (e.g., "5 min read")',
        type: 'string',
    }),
    defineField({
        name: 'excerpt',
        title: 'Short Summary',
        type: 'text',
        rows: 3
    }),
    defineField({
        name: 'videoId',
        title: 'YouTube Video ID (Optional)',
        description: 'Paste the ID part of the URL (e.g., dQw4w9WgXcQ)',
        type: 'string',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'image', icon: DocumentTextIcon}),
      ],
    }),
  ],
})