import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import userform from './components/userform.vue'
import list from './components/list.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/userform',
    component: userform,
  },
  {
    path: '/',
    component: userform,
  },
  {
    path: '/list',
    component: list,
  }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
