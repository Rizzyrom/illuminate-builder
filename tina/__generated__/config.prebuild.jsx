// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io  
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Hero Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Hero Subtitle"
              },
              {
                type: "object",
                name: "cta",
                label: "Call to Action",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Button Text"
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Button Link"
                  }
                ]
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Stat Value"
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Stat Label"
                  }
                ]
              }
            ]
          },
          // Flexible content sections
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Services Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Services Subtitle"
              },
              {
                type: "object",
                name: "serviceCards",
                label: "Service Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Service Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Service Description"
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Service Icon"
                  },
                  {
                    type: "object",
                    name: "features",
                    label: "Features",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "feature",
                        label: "Feature"
                      }
                    ]
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Price"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "About Title"
              },
              {
                type: "rich-text",
                name: "content",
                label: "About Content"
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Contact Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Contact Subtitle"
              },
              {
                type: "object",
                name: "form",
                label: "Contact Form",
                fields: [
                  {
                    type: "string",
                    name: "nameLabel",
                    label: "Name Field Label"
                  },
                  {
                    type: "string",
                    name: "emailLabel",
                    label: "Email Field Label"
                  },
                  {
                    type: "string",
                    name: "messageLabel",
                    label: "Message Field Label"
                  },
                  {
                    type: "string",
                    name: "submitText",
                    label: "Submit Button Text"
                  }
                ]
              }
            ]
          },
          // Additional flexible fields for different page types
          {
            type: "object",
            name: "mission",
            label: "Mission Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Mission Title"
              },
              {
                type: "rich-text",
                name: "content",
                label: "Mission Content"
              }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "Values Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Values Title"
              },
              {
                type: "object",
                name: "valueList",
                label: "Values",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Value Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Value Description"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "team",
            label: "Team Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Team Title"
              },
              {
                type: "object",
                name: "teamMembers",
                label: "Team Members",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name"
                  },
                  {
                    type: "string",
                    name: "role",
                    label: "Role"
                  },
                  {
                    type: "string",
                    name: "bio",
                    label: "Bio"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "global",
        label: "Global",
        path: "content/global",
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Configuration",
            fields: [
              {
                type: "string",
                name: "logoText",
                label: "Logo Text"
              },
              {
                type: "object",
                name: "navigation",
                label: "Navigation",
                fields: [
                  {
                    type: "object",
                    name: "links",
                    label: "Navigation Links",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Link Label"
                      },
                      {
                        type: "string",
                        name: "href",
                        label: "Link URL"
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "footer",
                label: "Footer",
                fields: [
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Footer Content"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
