import {DatabaseIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const resourceType = defineType({
  name: 'resource',
  title: 'Knowledge Base Item',
  type: 'document',
  icon: DatabaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Cheat Sheet', 'Guide', 'Diagram', 'Glossary'] }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'fileUrl',
      title: 'Download/View Link',
      type: 'url',
    }),
  ],
})