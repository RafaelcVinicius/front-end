<template>
  <div class="container m-5t">
    <LoginComponent></LoginComponent>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
export default {
name:'loginView',
  components:{
    LoginComponent: LoginComponent,
  }
}
</script>

<style scoped>

</style>