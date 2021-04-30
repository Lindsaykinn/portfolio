// connects React to Sanity
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'z62v4drj',
  dataset: 'production'
})
