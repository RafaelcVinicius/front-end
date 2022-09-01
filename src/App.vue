<template>
    <NavbarComponent />
    <router-view />
    <LoadingPage
    ></LoadingPage>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import LoadingPage from "@/components/LoadingPage.vue";


export default {
  name: 'App',
  components: { NavbarComponent, LoadingPage },
  data()
  {
    return{
    }
  },
}
</script>

<style>

</style>
