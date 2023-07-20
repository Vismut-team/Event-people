// import MessageCard from "./MessageCard.vue";


const components = [
//   { name: "MessageCard", component: MessageCard },

];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};