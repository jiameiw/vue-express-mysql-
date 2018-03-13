import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import goodlist from '@/components/goodlist'
import router1 from '@/components/router1'
import router2 from '@/components/router2'
import router11 from '@/components/router11'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      component: goodlist,
      children:[
        
        {
          path: 'router1',
          name: 'router1',
          component: router1,
          children:[
            {
              path: '/',
              name: 'router11',
              component: router11
            },
            {
              path: 'router11',
              name: 'router11',
              component: router11
            },
          ]
        },
        {
          path: 'router2',
          name: 'router2',
          component: router2
        }
      ]
    }
  ]
})
