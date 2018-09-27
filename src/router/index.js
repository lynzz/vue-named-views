import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Sidebar from '../views/Sidebar'
import navConfig from './nav.config'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      sidebar: true
    },
    components: {
      default: Home,
      sidebar: Sidebar
    }
  }
]
const processRoutes = (data, parent) => {
  data.forEach(item => {
    const name = item.name
    if (name) {
      let prefix = parent ? `/${parent}` : ''
      let meta = item.meta = item.meta || {}
      item.path = `${prefix}/${name}`
      item.components = require(`../views${prefix}/${name}/${name}`)

      if (meta.sidebar) {
        item.components.sidebar = Sidebar
      }
      routes.push(item)
    }

    if (item.children) {
      processRoutes(item.children, item.groupName)
    }
  })
}

processRoutes(navConfig)

Vue.use(Router)

export default new Router({
  routes
})
