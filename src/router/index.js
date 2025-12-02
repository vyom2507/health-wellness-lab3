import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import DailyTips from '../pages/DailyTips.vue';
import YogaMeditation from '../pages/YogaMeditation.vue';
import About from '../pages/About.vue';
import Planner from '../pages/Planner.vue';
import Breathing from '../pages/Breathing.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tips', component: DailyTips },
  { path: '/yoga', component: YogaMeditation },
  { path: '/about', component: About },
  { path: '/planner', component: Planner },
  { path: '/breathing', component: Breathing },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
