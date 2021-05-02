// connects React to Sanity
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ddyqjo6p',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'sanity-auth-token',
  useCdn: false,
})
