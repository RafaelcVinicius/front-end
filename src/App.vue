<template>
  <NavbarComponent />
  <div class="flex-di">
    <NavActionsComponent/>
    <router-view />
  </div>
  <LoadingPage/>
</template>

<script>
import NavActionsComponent from "@/components/NavActionsComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import { storeMain } from "./store/storeMain.js";
import { mapActions } from "pinia";

export default {
  name: 'App',
  components: { NavbarComponent, LoadingPage, NavActionsComponent },
  data()
  {
    return{
    }
  },

  created(){
    if(localStorage.token.length){
      this.requestUser();
    }
  },

  methods: {
    ...mapActions(storeMain, ['requestUser']),
  },

}
</script>