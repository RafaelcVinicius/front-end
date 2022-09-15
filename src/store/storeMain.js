import api from "@/main";
import { defineStore } from "pinia";

export const storeMain = defineStore("storeMain", {
    id: 'storeMain',
    state: () => ({
       user:{},
    }),
    actions: {
        requestUser(){
            api.get('/user', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.token,
                  }
                }).then((res) => {
                  this.user = res.data
            }).catch((error) => {
                console.log(error);
            });
        },

        deslogar(){
          localStorage.token = '';
          this.user = {};
        }
    }
})
