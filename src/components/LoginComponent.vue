<template>
    <div class="flex-c gap-c1 w-100 container mw-400 gap-r1" >
        <input-component
            v-model:value="email"
            :id="'email'"
            :label="'e-mail'"
            :placeholder="'email'"
        ></input-component>
        <input-component
            v-model:value="password"
            :id="'password'"
            :label="'password'"
            :placeholder="'password'"
        ></input-component>
        <ButtonComponent
            :name="'enviar'"
            :size="2"
            :style="'bg-roxo color-cinza'"
        ></ButtonComponent>
    </div>
</template>

<script>
import api from "@/main";
import InputComponent from "./input/InputPadraoComponent.vue";
import ButtonComponent from "./buttons/ButtonComponent.vue";

export default {
    name: "LoginComponent",
    components: { InputComponent, ButtonComponent },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    watch:{
        email(){
            console.log(this.email);
        }
    },
    methods: {
        logar() {
            // let credential = {
            //     email: this.email,
            //     password: this.password
            // } 
            api.post("/login", {
                email: this.email,
                password: this.password
            }).then((res) => {
                localStorage.token = res.data;
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        }
    },
}
</script>

<style>
</style>