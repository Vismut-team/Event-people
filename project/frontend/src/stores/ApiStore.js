import { defineStore } from "pinia";
import axios from "axios";

const domain = "http://localhost:8000" + "/";
const main_api_url = domain + "api/";

export const useApiStore = defineStore("apiStore", {
  state: () => ({
    backend_api: {
      media: domain + "media/",
    },
  }),

  getters: {},

  actions: {},
});
