import { defineStore } from "pinia";
import axios from "axios";

const domain = "http://localhost:8000" + "/";
const main_api_url = domain + "api/";

function _setUserdataToLocalStorege(username, user_token) {
  const userData = {
    username: username,
    user_token: user_token,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
}
function _getUserdataFromLocalStorege() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  return userData;
}

export const useApiStore = defineStore("apiStore", {
  state: () => ({
    backend_api: {
      media: domain + "media/",
    },
    auth: false,
    userData: {},
  }),

  getters: {
    userAuth() {
      return this.auth;
    },
  },

  actions: {
    startSession() {
      this.userData = _getUserdataFromLocalStorege();
    },
    login(username, password, remember_me=true) {
      // TODO: refactor this function
      // _setUserdataToLocalStorege(username, user_token);
      console.log("login");
      setTimeout(() => {
        console.log("success");
        console.log(username, password);
        this.auth = true
        if (remember_me){
          _setUserdataToLocalStorege(username, password)
          _getUserdataFromLocalStorege()
        } else{
          this.userData = {username: username}
        }
        this.auth = true
      }, 1000);
    },
  },
});
