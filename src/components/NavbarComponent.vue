<template>
  <div id="navBar" class="flex-jc flex-ac">
    <div v-if="userLogado.id" id="burger" @click="activeNavActions">
      <i></i>
    </div>
    <div class="flex-jb w-100">
      <div class="m-2l flex-ac">
          <!-- <img src="" alt=""> -->
          <span class="font-20">Rafael Coldebella</span>
      </div>
      <div v-if="userLogado.id" class="m-2r flex-ja">
        <ButtonLinkComponent 
          :name="'Sair'"
          :size="2"
          :style="'bg-cinza flex-jc color-black font-w700'"
          :to="'/'"
          @click="deslogar"
          />
      </div>
      <div v-else class="m-2r flex-ja">
          <ButtonLinkComponent 
          :name="'entrar'"
          :size="2"
          :style="'bg-cinza flex-jc  color-black font-w700'"
          :to="'login'"
          />
          <ButtonLinkComponent
          :name="'registre-se'"
          :size="2"
          :style="'bg-purple flex-jc color-cinza font-w700'"
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
        active: false,
    }
  },

  computed:{
    ...mapState(storeMain, ['userLogado']),
  },

  methods:{
    ...mapActions(storeMain, ['deslogar']),
    ...mapActions(storeMain, ['activeNavActions']),
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
  box-shadow: 0px 1px 3px #ccc;
  background-color: #fff;
}

#burger{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 40px;
  border-radius: 3px;
  margin-left: 1rem;
  cursor: pointer;
}
#burger:hover{
  background-color: #f4f4f6;
}
#burger i{
  position: absolute;
  border-top: 2px solid;
  width: 18px;
  color: #585757;
} 
#burger i::after,
#burger i::before {
  content: '';
  display: block;
  width: 18px;
  height: 2px;
  background: currentColor;
  margin-top: 5px;
  transition: 0.3s;
  position: relative;
}
</style>