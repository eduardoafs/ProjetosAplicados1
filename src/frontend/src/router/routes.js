const routes = [{
  path: '/login',
  component: () => import('pages/Login.vue')
},
{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/spaceslist',
    component: () => import('pages/SpacesList.vue')
  },
  {
    path: '/viewavailability',
    component: () => import('pages/ViewAvailability.vue')
  },
  {
    path: '/create-reserve',
    component: () => import('pages/CreateReserve.vue')
  },
  {
    path: '/registerspaces',
    component: () => import('pages/RegisterSpaces.vue')
  },
  {
    path: '/current-recurrence',
    component: () => import('pages/CurrentRecurrence.vue')
  },
  {
    path: '/register-spaces',
    component: () => import('pages/RegisterSpaces.vue')
  }
  ]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
