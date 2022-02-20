import Vue from 'vue'
import Router from 'vue-router'
import HellowWorld from '../views/HelloWorld.vue'

Vue.use(Router)

export const constantRoutes = [
	{
		path:'/',
		component: () => import('@/views/home')
	},
	{
		path:'/hellow',
		component:HellowWorld
	}
]

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

export default router
