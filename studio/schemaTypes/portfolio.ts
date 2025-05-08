export default {
  name: "portfolio",
  title: "Portfolio Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Social Media", value: "Social Media" },
          { title: "Content Creation", value: "Content Creation" },
          { title: "Graphic Design", value: "Graphic Design" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
}
