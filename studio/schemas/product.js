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
  ],
};