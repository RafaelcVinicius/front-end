<template>
    <NavbarComponent />
    <router-view />
    <LoadingPage/>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import { storeMain } from "./store/storeMain.js";
import { mapActions } from "pinia";

export default {
  name: 'App',
  components: { NavbarComponent, LoadingPage },
  data()
  {
    return{
    }
  },

  created(){
    if(localStorage.token.length){
      this.requestUser();
    }else if(window.location.pathname == '/'){
      window.location.href = '/bemvindo'
    }
  },

  methods: {
    ...mapActions(storeMain, ['requestUser']),
  },

}
</script>

<style>

</style>
