import Vue from 'vue'
import Router from 'vue-router'

import { ROLES } from '@/models'

export const pages = {
  everyone: [],
  [ROLES.TOURIST]: [],
  [ROLES.OWNER]: []
}

// import FavNone from '@/views/FavNone.vue'
// import ResNone from '@/views/ResNone.vue'

// import Main from '@/views/Main.vue'
// import Login from '@/views/Login.vue'
// import Registration from '@/views/Registration.vue'
// import Orders from '@/views/client/Orders.vue'

// import OffersList from '@/views/owner/offers/List.vue'
// import OfferShow from '@/views/owner/offers/Show.vue'
// import OfferNew from '@/views/owner/offers/New.vue'
// import OfferEdit from '@/views/owner/offers/Edit.vue'

// import OrdersList from '@/views/owner/orders/List.vue'
// import Favorites from '@/views/client/Favorites.vue'

import Main from '@/views/Main'
pages.everyone.push('Main')

import Orders from '@/views/Orders'
pages[ROLES.TOURIST].push('Orders')
pages[ROLES.OWNER].push('Orders')

import Favorites from '@/views/Favorites'
pages[ROLES.TOURIST].push('Favorites')

import Offers from '@/views/Offers/Offers'
import ShowOffer from '@/views/Offers/ShowOffer'
import NewOffer from '@/views/Offers/NewOffer'
import EditOffer from '@/views/Offers/EditOffer'
pages[ROLES.OWNER].push('Offers', 'ShowOffer', 'NewOffer', 'EditOffer')
pages[ROLES.TOURIST].push('ShowOffer')

import Profile from '@/views/Profile'
import Chat from '@/views/Chat'
pages[ROLES.OWNER].push('Profile', 'Chat')
pages[ROLES.TOURIST].push('Profile', 'Chat')

import { User } from '@/models'

Vue.use(Router)

// const OWNER_PAGES = ['offers', 'orders', 'offerNew', 'offerEdit']

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'Main', component: Main }, // everyone
    { path: '/favorites', name: 'Favorites', component: Favorites }, // tourist
    { path: '/offers', name: 'Offers', component: Offers }, // owner
    { path: '/orders', name: 'Orders', component: Orders }, // tourist + owner
    { path: '/offers/new', name: 'NewOffer', component: NewOffer }, // owner
    { path: '/offers/:id', name: 'ShowOffer', component: ShowOffer }, // tourist + owner
    { path: '/offers/:id/edit', name: 'EditOffer', component: EditOffer }, // owner
    { path: '/profile', name: 'Profile', component: Profile }, // tourist + owner
    { path: '/chat/:id', name: 'Chat', component: Chat }, // tourist + owner
    // { path: '/orders', name: 'Orders', component: Orders }
    // { path: '/', name: 'main', component: Main },
    // { path: '/login', name: 'login', component: Login },
    // { path: '/registration', name: 'registration', component: Registration },
    // { path: '/orders', name: 'orders', component: OrdersList },
    // { path: '/offers/new', name: 'offerNew', component: OfferNew },
    // { path: '/offers/:id', name: 'offer', component: OfferShow },
    // { path: '/offers/:id/edit', name: 'offerEdit', component: OfferEdit },
    // { path: '/my-orders', name: 'clientOrders', component: Orders },
    // { path: '/favorites-none', name: 'favNone', component: FavNone },
    // { path: '/reservation-none', name: 'resNone', component: ResNone },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  !User.role && (await User.autorization())
  if (
    pages.everyone.indexOf(to.name) + 1 ||
    (User.role === 'owner' && pages[ROLES.OWNER].indexOf(to.name) + 1) ||
    (User.role === 'tourist' && pages[ROLES.TOURIST].indexOf(to.name) + 1)
  ) {
    next()
  } else {
    console.log('страница не доступна')
    next('/')
  }
})

router.afterAutorization = () => {
  User.role === 'owner' && router.push({ name: 'Offers' })
}

export default router
