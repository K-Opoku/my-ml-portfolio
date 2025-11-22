import {postType} from './postType' // Or './post' depending on your file name
import {projectType} from './project'
import {profileType} from './profile'
import {resourceType} from './resource'

export const schema = {
  types: [postType, projectType, profileType, resourceType],
}