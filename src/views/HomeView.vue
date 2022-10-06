<template>
  <div class="w-100 flex-c font-40">
    <div class="w-100 flex-jc flex-c h-300px flex-ac font-40">
      <h3>Bem-vindo</h3>
    </div>
    <div class="w-100 flex-jc flex-c h-300px flex-ac font-40">
        <ShowAnalytics></ShowAnalytics>
    </div>
  </div>

</template>

<script>
import ShowAnalytics from "../components/ShowAnalytics.vue";
export default {
name:'homeView',
components: {
      ShowAnalytics
    },
}
</script>

<style scoped>

</style>