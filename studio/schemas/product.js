export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'imageGroup'
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "new",
      title: "Is this a new product?",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'features',
      title: 'Product Features',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'includes',
      title: 'Includes the follwing',
      type: 'array',
      of: [{type: 'included'}]
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'order',
              title: 'Display order',
              type: 'string'
            },
            {
              name: 'galleryImage',
              title: 'Gallery Image',
              type: 'imageGroup',
            }
          ]
        }
      ]

    },
    {
      name: 'others',
      title: 'Other Related items',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'product'}]}
        
      ]
    }
  ],
};
