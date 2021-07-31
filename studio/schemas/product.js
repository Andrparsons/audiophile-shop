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
