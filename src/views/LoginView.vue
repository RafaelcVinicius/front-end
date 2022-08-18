<template>
  <div class="flex-jc flex-ac h-100">
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

<style>

</style>