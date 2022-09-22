<template>
  <div id="navBar" class="flex-jc">
    <div class="flex-jb mw-1366 w-100">
      <div class="m-2l m-1t">
          <!-- <img src="" alt=""> -->
          <span class="font-20">Rafael Coldebella</span>
      </div>
      <div v-if="user.id" class="m-2r m-1t flex-ja">
        <ButtonLinkComponent 
          :name="'Sair'"
          :size="2"
          :style="'bg-cinza color-black'"
          :to="'/'"
          @click="deslogar"
          />
      </div>
      <div v-else class="m-2r m-1t flex-ja">
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
import { storeMain } from "@/store/storeMain.js";
import { mapActions, mapState } from "pinia";

export default {
  components: { ButtonLinkComponent },

  data(){
    return {
    }
  },

  computed:{
    ...mapState(storeMain, ['user']),
  },

  methods:{
    ...mapActions(storeMain, ['deslogar']),
  }
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