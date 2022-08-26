<template>
    <NavbarComponent />
    <router-view />
    <LoadingPage></LoadingPage>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import LoadingPage from "@/components/LoadingPage.vue";
// import InputComponent from "./input/inputComponent.vue";


export default {
  name: 'App',
  components: { NavbarComponent, LoadingPage },
}
</script>

<style>

</style>
