import { BsDisplayFill } from "react-icons/bs"

export default {
  name: "client",
  title: "Client",
  description: "",
  type: "document",
  icon: BsDisplayFill,
  fields: [
    /* Client Specific */
    {
      name: "id",
      title: "ID",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "logoImage",
      title: "Logo Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "logoText",
      title: "Logo Text",
      type: "string",
      validation: (rule) => rule.required(),
    },

    /* Hero Section */
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "string",
      validation: (rule) => rule.required(),
    },

    /* Roadmap Section */
    {
      name: "roadmapHeading",
      title: "Roadmap Heading",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "roadmapText",
      title: "Roadmap Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "roadmapItems",
      title: "Roadmap Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "roadmapItem",
          },
        },
      ],
      validation: (rule) => rule.required().max(4),
    },

    /* Intro Link */
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "linkButtonText",
      title: "Link Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "linkUrl",
      title: "Link URL",
      type: "string",
      validation: (rule) => rule.required(),
    },

    /* Promotion Section */
    {
      name: "promotionHeadline",
      title: "Promotion Headline",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "promotionSubHeading",
      title: "Promotion Sub Heading",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "promotionImage",
      title: "Promotion Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "promotionUrl",
      title: "Promotion URL",
      type: "string",
      validation: (rule) => rule.required(),
    },

    /* Community Section */
    {
      name: "communityHeadline",
      title: "Community Headline",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "communitySubHeading",
      title: "Community Sub Heading",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "communityUrl",
      title: "Community URL",
      type: "string",
      validation: (rule) => rule.required(),
    },

    /* Footer */
    {
      name: "footerText",
      title: "Footer Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "github",
      title: "Github URL",
      type: "string",
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "string",
    },
    {
      name: "dribble",
      title: "Dribble URL",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter URL",
      type: "string",
    },
  ],
}
