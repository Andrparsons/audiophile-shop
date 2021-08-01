export default {
  name: 'sizedImage',
  title: 'Sized Image',
  type: 'image',
  description: 'Upload the image for the correct screen size and label it',
  fields: [
    {
      name: 'size',
      title: 'screen type - mobile, tablet or desktop',
      type: 'string'
    },
    {
      name: 'alt',
      title: 'alt text',
      type: 'string'
    }
  ]
}