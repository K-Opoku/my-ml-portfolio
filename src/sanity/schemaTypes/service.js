import {WrenchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service Offered',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'e.g., "ML Model Deployment" or "Data Pipeline Architecture"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Pitch',
      type: 'text',
      rows: 3,
      description: 'Explain the value (e.g., "I deploy scalable models..."). Keep it under 150 characters.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'The name of the Lucide-React icon to use (e.g., "Brain", "Database", "Cloud", "Code").',
      initialValue: 'Code',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})