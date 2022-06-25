import PageIndex from "@/views/PageIndex.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/p/%7B"title":"サレ祭企画のプレビューを表示します"%7D',
  },
  {
    path: "/:view(p|i|pi)/:state",
    component: PageIndex,
    name: "view",
    props: true,
  },
  {
    path: "/:path(.*)*",
    component: PageNotFound,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
