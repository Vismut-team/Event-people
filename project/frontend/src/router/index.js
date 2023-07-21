import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import AboutView from "../views/AboutView.vue";
import ContactsView from "../views/ContactsView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import MyPortfolioView from "../views/MyPortfolioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/authorization",
      name: "authorization",
      component: AuthView,
    },


    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
      // TODO: add children (work examples ???)
    },
    {
      path: "/portfolio/:id",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/my-portfolio",
      name: "my-portfolio",
      component: MyPortfolioView,
    },
  ],
});

export default router;
