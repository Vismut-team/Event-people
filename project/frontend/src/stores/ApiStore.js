import { defineStore } from "pinia";
import axios from "axios";

const domain = "http://localhost:8000" + "/";
const main_api_url = domain + "api/v1/";

function _set_username_and_usertoken_to_local_storege(username, user_token) {
  localStorage.setItem("username", username);
  localStorage.setItem("user_token", user_token);
}

export const useApiStore = defineStore("apiStore", {
  state: () => ({
    backend_api: {
      media: domain + "media/",
      chats: main_api_url + "chats/chats/",
      messages: main_api_url + "chats/messages/",
      users: main_api_url + "chats/users/",
      login: main_api_url + "chats/login/",
      check_token: main_api_url + "chats/users/my_account/",
    },

    auth: false,
    username: null,
    user_token: null,
  }),

  getters: {
    configToRequest() {
      return {
        headers: {
          Authorization: "Token" + " " + this.user_token,
        },
      };
    },
    userData() {
      return {
        username: this.username,
        token: this.user_token,
      };
    },
    get_token() {
      //   console.log(this.user_token);
      return this.user_token;
    },
    checkUserIsAuth() {
      this.updateUserDataFromLocalStorege();
      return this.auth;
    },
  },

  actions: {
    updateUserDataFromLocalStorege() {
      const username = localStorage.getItem("username");
      const user_token = localStorage.getItem("user_token");
      if (username && user_token) {
        this.auth = true;
        this.username = username;
        this.user_token = user_token;
      }
    },

    updateUserDataAfterLogin(username, user_token) {
      _set_username_and_usertoken_to_local_storege(username, user_token);
      this.updateUserDataFromLocalStorege();

      this.auth = true;
    },
    removeUserData() {
      localStorage.removeItem("username");
      localStorage.removeItem("user_token");
      this.auth = false;
      this.user_token = null;
      console.log("remove use data");
    },

    async start_session() {
      console.log("Starting session");

      this.updateUserDataFromLocalStorege();
      if (this.user_token) {
        await axios
          .get(this.backend_api.check_token, this.configToRequest)
          .then((res) => {
            this.auth = true;
            console.log("changed auth");
          })
          .catch((err) => {
            this.auth = false;

            console.log(err);
          });
      } else {
        this.auth = false;
      }
    },
  },
});
