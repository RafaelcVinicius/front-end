<template>
  <div class="w-100 flex-c font-40">
    <div class="w-100 flex-jc flex-c h-300px flex-ac font-30 bg-purple">
      <h3>Bem-vindo(a) {{ userLogado.id ? userLogado.name : '' }}</h3>
    </div>
    <div class="w-100 flex-jc flex-c flex-ac font-40">
      <ExampleComponent></ExampleComponent>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { storeMain } from "@/store/storeMain.js";

import ExampleComponent from "../components/ExampleComponent.vue";
export default {
name:'homeView',
  components: {
    ExampleComponent
  },

  computed:{
    ...mapState(storeMain, ['userLogado']),
  },
}
</script>

<style scoped>

</style>