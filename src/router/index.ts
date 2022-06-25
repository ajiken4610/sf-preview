import PageIndex from "@/views/PageIndex.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect:
      '/p/%7B"title":"【Blender】コップは割れる","embedLink":"https:%2F%2Fwww.youtube.com%2Fembed%2FEHvw6HeOHmM","embedOrientation":"horizontal","description":"概要欄では%60Markdown%60が使えます。%5Cn需要があるのかは知りません。"%7D',
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
