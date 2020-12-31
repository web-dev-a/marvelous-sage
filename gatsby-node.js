// Allow client-only routes on /admin/*
exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*"
    actions.createPage(page)
  }
}
