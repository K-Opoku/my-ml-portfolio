import {ProjectsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
            list: [
                {title: 'Production', value: 'Production'},
                {title: 'Beta', value: 'Beta'},
                {title: 'Prototype', value: 'Prototype'}
            ]
        }
    }),
    defineField({
        name: 'category',
        title: 'Category (e.g. MLOps)',
        type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary (Card View)',
      type: 'text',
      rows: 3
    }),
    defineField({
        name: 'description',
        title: 'Full Description (Deep Dive)',
        type: 'array',
        of: [{type: 'block'}]
    }),
    defineField({
        name: 'architectureDiagram',
        title: 'System Architecture Diagram',
        type: 'image',
        description: 'Upload the flowchart/diagram showing how the system works.',
        options: { hotspot: true }
    }),
    defineField({
        name: 'metrics',
        title: 'Key Metrics (e.g. 99% AUC)',
        type: 'string',
    }),
    defineField({
        name: 'tech',
        title: 'Tech Stack',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'repoLink',
        title: 'GitHub Repo URL',
        type: 'url',
    }),
    defineField({
        name: 'demoLink',
        title: 'Live Demo URL',
        type: 'url',
    }),
    defineField({
        name: 'mainImage',
        title: 'Main Project Image',
        type: 'image',
        options: { hotspot: true }
    }),
  ],
})