<template>
  <div id="navBar" class="flex-jc">
    <div class="flex-jb mw-1366 w-100">
      <div class="m-2l m-1t">
          <!-- <img src="" alt=""> -->
          <span class="font-20">Rafael Coldebella</span>
      </div>
      <div class="m-2r m-1t flex-ja">
          <ButtonLinkComponent 
          :name="'entrar'"
          :size="2"
          :style="'bg-cinza color-black'"
          :to="'login'"
          />
          <ButtonLinkComponent
          :name="'registre-se'"
          :size="2"
          :style="'bg-purple color-cinza'"
          :to="'register'"
          class="m-1l"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLinkComponent from "../components/buttons/ButtonLinkComponent.vue";
export default {
  components: { ButtonLinkComponent },
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
  background-color: #fff;
}
</style>