<template>
  <div class="container w-100 m-5t">
    <div class="flex-c w-100 h-400px container mw-300 gap-r1-5 br-8" >
        <input-component
            v-model:value="dados.name"
            :id="'name'"
            :label="'name'"
            :placeholder="'name'"
            :size="1"
            :type="'name'"
            :error="error.name"
            @keyup.enter="register"
        ></input-component>
        <input-component
            v-model:value="dados.email"
            :id="'email'"
            :label="'e-mail'"
            :placeholder="'e-mail'"
            :size="1"
            :type="type"
            :error="error.email"
            @keyup.enter="register"
        ></input-component>
        <input-component
            v-model:value="dados.password"
            :id="'password'"
            :label="'password'"
            :placeholder="'password'"
            :size="1"
            :type="'password'"
            :error="error.password"
            @keyup.enter="register"
        ></input-component>
        <div class="flex-jc w-100 relative">
            <router-link class="font-12 logar textFirstUp color-black" to="login">logar</router-link>
            <button-component
                :name="'enviar'"
                :size="2"
                :style="'bg-purple color-cinza'"
                @click="register"
                @keyup.enter="register"
          ></button-component>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/main";
import InputComponent from "../../components/input/InputPadraoComponent.vue";
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";

import { mapActions } from "pinia";
import { storeLoadingPage } from "@/store/storeLoadingPage.js";

export default {
name:'registerView',
components: { InputComponent, ButtonComponent },
  data() {
      return {
          dados:{
              email: "",
              password: "",
              name:"",
          },
          error:{
              email: "",
              password: "",
              name: "",
          },
          type:'text'
      };
    },
    methods: {
        ...mapActions(storeLoadingPage, ['addActive']),

        ...mapActions(storeLoadingPage, ['addRequest']),

        register()
        {
            if(this.validarRegister())
                this.postApi();
        },
        postApi()
        {
            this.addActive();
            api.post("/register",
                this.dados
            ).then((res) => {
                localStorage.token = res.data.token;
                this.addRequest('success',res.data.message, 'http://rafaelcoldebella.com.br:8080/entrou');
            }).catch((error) => {
                this.addRequest('error', error.response.data.message);
            });
        },
        validarRegister()
        {
            if(!this.dados.email.length > 0){
                this.error.email = '* Campo obrigatório.'
            }
            if(!this.dados.password.length > 0){
                this.error.password = '* Campo obrigatório.'
            }
            if(this.error.password.length > 0 || this.error.email.length > 0)
                return false;
            return true;
        }
    }
}
</script>

<style scoped>
.container > .container{
    box-shadow: 5px 5px 10px #ccc;
}
.logar{
    position: absolute;
    top: -22px;
    right: 20px;
}
</style>