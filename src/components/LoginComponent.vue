<template>
    <div class="flex-c gap-c1">
        <input-component 
            v-model:value="email"
        >
        </input-component>
        <label for="email">E-mail</label>
        <input type="email" v-model="email" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" v-model="password" name="password" id="password">
        <button @click="logar">Logar</button>

        <show-user-component></show-user-component>
    </div>
</template>

<script>
import api from "@/main";
import ShowUserComponent from "./ShowUserComponent.vue";
import InputComponent from "./input/InputPadraoComponent.vue";

export default {
    name: "LoginComponent",
    components: { ShowUserComponent, InputComponent },
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