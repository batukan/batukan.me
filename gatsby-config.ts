import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Emre Batukan`,
    siteUrl: `https://batukan.me`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-theme-material-ui",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassRuleTest: /\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            },
          },
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              showLineNumbers: true,
              noInlineHighlight: true
            }
          },
          `gatsby-remark-smartypants`
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "assets",
        "path": "./static/assets/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "uploads",
        "path": "./static/uploads/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./src/content/"
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `./src/cms/cms.ts`,
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/404`,
          `/admin`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `batukan`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-LXGSX8N3GT"
      }
    },
    "gatsby-plugin-fontawesome-css"
  ]
};

export default config;