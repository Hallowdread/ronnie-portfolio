export default {
  name: "about",
  title: "About Information",
  type: "document",
  fields: [
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "yearsExperience",
      title: "Years of Experience",
      type: "number",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "category", title: "Category", type: "string" },
            {
              name: "items",
              title: "Skills",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "name", title: "Skill Name", type: "string" },
                    { name: "percentage", title: "Proficiency (%)", type: "number" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
