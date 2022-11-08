import { BsFillImageFill } from "react-icons/bs"

export default {
  name: "roadmapItem",
  title: "Roadmap Item",
  description: "",
  type: "document",
  icon: BsFillImageFill,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
}
