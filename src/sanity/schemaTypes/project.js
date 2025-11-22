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
      title: 'Short Summary',
      type: 'text',
      rows: 3
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
  ],
})