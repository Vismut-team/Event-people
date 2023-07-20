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
  return userData;
}
function checkUserData(username, user_token) {
  // TODO: refactor this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && user_token) {
        resolve({ statusCode: 200, message: "Correct data" });
      } else {
        reject({ statusCode: 404, message: "Invalid username or token" });
      }
    });
  });
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
      console.log("start session");
      const userData = _getUserdataFromLocalStorege();
      if (userData) {
        this.userData = userData;
      }
      if (this.userData.username && this.userData.user_token) {
        checkUserData(this.userData.username, this.userData.user_token)
          .then((data) => {
            console.log(data);
            this.auth = true;
          })
          .catch((error) => {
            console.error(error);
            this.auth = false;
          });
      }
    },
    login(username, password, remember_me = true) {
      // TODO: refactor this function
      // _setUserdataToLocalStorege(username, user_token);
      console.log("login");
      setTimeout(() => {
        console.log("success login");
        this.auth = true;
        if (remember_me) {
          _setUserdataToLocalStorege(username, password);
          _getUserdataFromLocalStorege();
        } else {
          this.userData = { username: username };
        }
        this.auth = true;
      }, 1000);
    },
    registration(username, password) {},
  },
});
