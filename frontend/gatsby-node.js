// gatsby-node.js

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    query {
      allPrismaPost {
        nodes {
          id
        }
      }
    }
  `)

  result.data.allPrismaPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.id}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
