<template>
  <NavbarComponent />
  <div class="w-100 flex-jc h-300px flex-ac font-40">Bem-vindo</div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
name:'homeView',
 components: {
    NavbarComponent: NavbarComponent
  },
}
</script>

<style scoped>

</style>