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
function _removeUserdataFromLocalStorege() {
  localStorage.removeItem("userData");
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
    registration(username, phone_number, password) {
      // TODO: refactor this function

      console.log("register");
      console.log(username, phone_number, password);
    },
    logout() {
      _removeUserdataFromLocalStorege();
      this.userData = {};
      this.auth = false;
    },
    getUserFullData() {
      //TODO: refactor this function (data from server)
      return {
        // username: "Test User",
        firstName: "Test",
        lastName: "User",
        phoneNumber: "88005553535",
        email: "test-user@test.com",
        city: { id: 3, title: "Test City3" },
      };
    },
    getCityList() {
      //TODO: refactor this function (data from server)
      return [
        { id: 1, title: "Test City1" },
        { id: 2, title: "Test City2" },
        { id: 3, title: "Test City3" },
        { id: 4, title: "Test City4" },
        { id: 5, title: "Test City5" },
      ];
    },
    updateUserData() {
      //TODO: refactor this function (send data to server axios)
      console.log("send data to server");
      setTimeout(() => {
        console.log("userData successfully updated");
      }, 2000);
      //TODO: add notification
    },
  },
});
