<template>
    <div class="container m-5t w-100">
        <div id="loginComponent" class="flex-c w-100 h-400px container mw-300 gap-r1-5 br-8" >
            <input-component
                v-model:value="dados.email"
                :id="'email'"
                :label="'e-mail'"
                :placeholder="'e-mail'"
                :size="1"
                :type="type"
                :error="error.email"
                @keyup.enter="logar"
            ></input-component>
            <input-component
                v-model:value="dados.password"
                :id="'password'"
                :label="'password'"
                :placeholder="'password'"
                :size="1"
                :type="'password'"
                :error="error.password"
                @keyup.enter="logar"
            ></input-component>
            <div class="flex-jc w-100 relative">
                <router-link class="font-12 register textFirstUp color-black" to="register">registrar-se</router-link>
                <button-component
                    :name="'enviar'"
                    :size="2"
                    :style="'bg-purple color-cinza'"
                    @click="logar"
                    @keyup.enter="logar"
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
  name: "LoginView",
  components: { InputComponent, ButtonComponent },
  data() {
      return {
          dados:{
              email: "",
              password: "",
          },
          error:{
              email: "",
              password: "",
          },
          type:'text'
      };
  },
  watch:{
      dados:{
          deep:true,
          handler(newValue){
              if(newValue.email)
                  this.error.email = '';
              if(newValue.password)
                  this.error.password = '';
          }
      }
  },
  methods: {
      ...mapActions(storeLoadingPage, ['addActive']),

      ...mapActions(storeLoadingPage, ['addRequest']),

      logar()
      {
          if(this.validarLogin())
              this.postApi();
      },
      postApi()
      {
          this.addActive();
          api.post("/login",
              this.dados
          ).then((res) => {
              localStorage.token = res.data.token;
              this.addRequest('success',res.data.message, window.location.href.split('/')[0] + '//' + window.location.host + '/');
          }).catch((error) => {
              this.addRequest('error', error.response.data.message);
          });
      },
      validarLogin()
      {
          if(!this.dados.email.length > 0){
              this.error.email = '* Campo obrigat??rio.'
          }
          if(!this.dados.password.length > 0){
              this.error.password = '* Campo obrigat??rio.'
          }
          if(this.error.password.length > 0 || this.error.email.length > 0)
              return false;
          return true;
      }
  },
}
</script>

<style scoped>
#loginComponent{
  box-shadow: 5px 5px 10px #ccc;
}
.register{
  position: absolute;
  top: -22px;
  right: 20px;
}

</style>