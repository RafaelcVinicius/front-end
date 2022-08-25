<template>
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
        <button-link-component
            :name="'enviar'"
            :size="2"
            :style="'bg-roxo color-cinza'"
            @click="logar"
            @keyup.enter="logar"
            :to="'ggg'"
        ></button-link-component>
    </div>
</template>

<script>
import api from "@/main";
import InputComponent from "./input/InputPadraoComponent.vue";
import ButtonLinkComponent from "./buttons/ButtonLinkComponent.vue";

export default {
    name: "LoginComponent",
    components: { InputComponent, ButtonLinkComponent },
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
        logar()
        {
            if(this.validarLogin())
                this.postApi();
        },
        postApi()
        {
            api.post("/login/logar",
                this.dados
            ).then((res) => {
                localStorage.token = res.data;
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        },
        validarLogin()
        {
            if(!this.dados.email.length > 0){
                this.error.email = '* Campo obrigatório.'
            }
            if(!this.dados.password.length > 0){
                this.error.password = '* Campo obrigatório.'
            }

            if(this.error.password.length > 0 || this.error.email.length > 0)
                return false
            return true
        }       
    },
}
</script>

<style scoped>
#loginComponent{
    box-shadow: 5px 5px 10px #ccc;
}

</style>