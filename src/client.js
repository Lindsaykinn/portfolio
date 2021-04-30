// connects React to Sanity
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ddyqjo6p',
  dataset: 'production'
})
