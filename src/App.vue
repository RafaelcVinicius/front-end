<template>
    <NavbarComponent />
    <router-view />
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
// import InputComponent from "./input/inputComponent.vue";


export default {
  name: 'App',
  components: {
    NavbarComponent: NavbarComponent
  },
}
</script>

<style>

</style>
