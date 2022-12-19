import api from "@/main";
import { defineStore } from "pinia";

export const storeMain = defineStore("storeMain", {
    id: 'storeMain',
    state: () => ({
      user:{},
      navActions: true,
    }),
    getters: {
      userLogado: (state) => state.user,
      getNavActions: (state) => state.navActions,
    },
    actions: {
      requestUser(){
          api.get('/user', {
              headers: {
                  Authorization: 'Bearer ' + localStorage.token,
                }
              }).then((res) => {
                this.user = res.data
          }).catch(() => {
              localStorage.token = '';
          });
      },

      deslogar(){
        localStorage.token = '';
        this.user = {};
        window.location.href = '/';
      },

      activeNavActions(){
        this.navActions = !this.navActions;
      }
    }
})
