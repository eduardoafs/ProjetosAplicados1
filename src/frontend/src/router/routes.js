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
    path: '/spaces-list',
    component: () => import('pages/SpacesList.vue')
  },
  {
    path: '/view-availability',
    component: () => import('pages/ViewAvailability.vue')
  },
  {
    path: '/create-reserve',
    component: () => import('pages/CreateReserve.vue')
  },
  {
    path: '/current-recurrence',
    component: () => import('pages/CurrentRecurrence.vue')
  },
  {
    path: '/register-spaces',
    component: () => import('pages/RegisterSpaces.vue')
  },
  {
    path: '/edit-reserves',
    component: () => import('pages/EditReserve.vue')
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
