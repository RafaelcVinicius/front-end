<template>
    <div class="w-100 flex-jc h-300px flex-ac font-40">Bem-vindo</div>

    <div>
      <ShowAnalytics></ShowAnalytics>
    </div>
</template>
  
  <script>
  import ShowAnalytics from "../components/ShowAnalytics.vue";
  export default {
  name:'bemVindoView',
   components: {
      ShowAnalytics
    },
  }
  </script>
  
  <style scoped>
  
  </style>