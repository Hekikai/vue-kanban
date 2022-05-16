import { createWebHistory, createRouter } from "vue-router";
import TheLogin from '@/pages/TheLogin.vue';
import TheRegistration from '@/pages/TheRegistration.vue';
import TheMainBoard from '@/pages/TheMainBoard.vue';

const routes = [
	{
		path: '/',
		redirect: {
			name: 'TheRegistration'
		}
	},
	{
		path: '/login',
		component: TheLogin,
		name: 'TheLogin'
	},
	{
		path: '/registration',
		component: TheRegistration,
		name: 'TheRegistration'
	},
	{
		path: '/kanban',
		component: TheMainBoard,
		name: 'TheMainBoard'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;