export default {
  name: "orderedGallery",
  type: "object",
  title: "Ordered Gallery Group",
  fields: [
    {
      name: "order",
      title: "Display order",
      type: "string",
    },
    {
      name: "galleryImage",
      title: "Gallery Image",
      type: "imageGroup",
    },
  ],
};
