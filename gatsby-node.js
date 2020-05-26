const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. ${results.errors}`)
    return
  }

  // Filter out books, we don't make pages for those
  // Also the home-page, or index.js. It just has pieces of content,
  // not a generated page.
  pages = results.data.allMarkdownRemark.edges.filter(edge => {
    if (edge.node.frontmatter.templateKey === "book" ||
        edge.node.frontmatter.templateKey === "home-page") {
      return false
    } else {
      return edge
    }
  })

  pages.forEach(edge => {
    const pathName = edge.node.frontmatter.path || edge.node.fields.slug;
    const component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`);
    const id = edge.node.id
    createPage({
      path: pathName,
      component,
      context: {
        id: id,
      },
    })
  })
}

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {

    // HELIO-3193
    // frontmatter cover and image paths need to be corrected
// console.log(node.frontmatter.image)
//     if (node.frontmatter.image) {
// console.log("FIXPATH", path.join("/", node.frontmatter.image))
//       createNodeField({
//         node,
//         name: `image`,
//         value: path.join("/", node.frontmatter.image)
//       })
//     }
//
//     if (node.frontmatter.cover) {
//       createNodeField({
//         node,
//         name: `cover`,
//         value: path.join("/", node.frontmatter.cover)
//       })
//     }

    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
