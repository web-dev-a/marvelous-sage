const path = require("path")
const slug = require("slug")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Add slug for page generation.

}



// Allow client-only routes on /admin/*
exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*"
    actions.createPage(page)
  }
}
