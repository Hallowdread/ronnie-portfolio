export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Client Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5).required(),
    },
    {
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
}
