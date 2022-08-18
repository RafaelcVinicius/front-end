<template>
    <div>
        <button @click="showUser">Show User</button>
    </div>
</template>

<script>
import api from "@/main";

export default {
    name: 'ShowUserComponent',
    data(){
        return {
        }
    },
    methods:{
        showUser(){
            console.log(localStorage.token);
            api.get('/user', {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.token,
                  }
                }).then((res) => {
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