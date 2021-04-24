export const homePageRoute = {
  path: '/',
  name: 'homepage',
  component: () => import('./views/Homepage.vue')
}

export const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('./views/NotFound.vue')
}

export default [homePageRoute, notFoundRoute]
