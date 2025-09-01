// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // For local development, we use a local filesystem client
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
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
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Site Title"
              },
              {
                type: "string",
                name: "logoText",
                label: "Logo Text"
              },
              {
                type: "string",
                name: "contactEmail",
                label: "Contact Email"
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
                        label: "Label"
                      },
                      {
                        type: "string",
                        name: "href",
                        label: "URL"
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
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "string",
            name: "metaTitle",
            label: "SEO Title"
          },
          {
            type: "string",
            name: "metaDescription",
            label: "SEO Description",
            ui: {
              component: "textarea"
            }
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
                type: "rich-text",
                name: "title",
                label: "Hero Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Hero Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Number"
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label"
                  }
                ]
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
                    label: "Button URL"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Section Badge"
              },
              {
                type: "rich-text",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "serviceCards",
                label: "Service Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Service Name"
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Service Subtitle"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Service Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Features",
                    list: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "process",
            label: "Process Section",
            fields: [
              {
                type: "rich-text",
                name: "title",
                label: "Process Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Process Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "steps",
                label: "Process Steps",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Step Number"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Step Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Step Description",
                    ui: {
                      component: "textarea"
                    }
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
                type: "rich-text",
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
                type: "rich-text",
                name: "title",
                label: "Contact Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Contact Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "form",
                label: "Contact Form",
                fields: [
                  {
                    type: "string",
                    name: "submitText",
                    label: "Submit Button Text"
                  },
                  {
                    type: "string",
                    name: "successMessage",
                    label: "Success Message"
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
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author"
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image"
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content"
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true
          },
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Title"
          },
          {
            type: "string",
            name: "seoDescription",
            label: "SEO Description",
            ui: {
              component: "textarea"
            }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
