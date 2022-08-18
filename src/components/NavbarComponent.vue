<template>
  <div id="navBar">
    <div class="flex-jb">
      <div class="m-2l m-1t">
          <!-- <img src="" alt=""> -->
          <span class="font-20">Rafael Coldebella</span>
      </div>
      <div class="m-2r m-1t flex-ja">
          <ButtonComponent 
          :value="'Entrar'"
          :size="2"
          :style="'bg-cinza color-black'"
          />
          <ButtonComponent
          :value="'Registre-se'"
          :size="2"
          :style="'bg-roxo color-cinza'"
          class="m-1l"/>
      </div>  
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/Buttons/ButtonComponent.vue";
export default {
  components: {
    ButtonComponent: ButtonComponent,
  },
}
</script>

<style scoped>
#navBar{
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 75px;
  box-shadow: 5px 5px 10px #ccc;
}
</style>