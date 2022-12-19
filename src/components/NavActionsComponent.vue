<template>
  <div id="navActions" :data-actions="getNavActions">
    <div class="block">
        <div class="gap-c1 h-40px flex-ac p-10px">
            <i class="icon-perfil"></i>
            <div class="flex-c">
                <span class="font-13 font-w600">{{userLogado.name}}</span>
                <ButtonLinkComponent 
                    :name="'Perfil'"
                    :size="0"
                    :style="'color-gray'"
                    :to="'/'"
                />
                <!-- <span class="font-12"><router-link to="/" class="btn-perfil">Perfil</router-link></span> -->
            </div>
        </div>
        <div class="m-2t" id="actionsList">
            <div class="gap-r1">
                <!-- <ButtonLinkComponent 
                    :name="'Portifolho'"
                    :size="3"
                    :style="'color-black itemList'"
                    :to="'/'"
                /> -->
                <ButtonLinkComponent 
                    :name="'Dashboard'"
                    :size="3"
                    :style="'color-gray itemList'"
                    :to="'/dashboard'"
                />
                <ButtonLinkComponent 
                    :name="'Movimentaçoes'"
                    :size="3"
                    :style="'color-gray itemList'"
                    :to="'/'"
                />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { storeMain } from "@/store/storeMain.js";
import { mapState } from "pinia";
import ButtonLinkComponent from "../components/buttons/ButtonLinkComponent.vue";
export default {
    components:{
        ButtonLinkComponent
    },
    computed:{
        ...mapState(storeMain, ['getNavActions']),
        ...mapState(storeMain, ['userLogado']),
    }
}
</script>

<style>
[data-actions="true"]{
    display: block;
    width: 250px;
    min-width: 250px;
}

[data-actions="true"] .block{
    position: fixed;
    height:100vh;
    width: 230px;
    border-right: 1px solid #c2c2c2;
    background-color: #fff;
    z-index: 5;
}

[data-actions="false"]{
    display: none;
    width: 0px;
}

#navActions .block{
    padding-top: 30px;
    padding-left: 20px;
}

.icon-perfil{
    width: 43px;
    height: 43px;
    border-radius: 40px;
    border: 1px solid #666666;
}

.itemList{
    margin-top: 5px;
    padding-left: 15px;

}

.itemList:hover{
    background-color: #f4f4f6;
}

.btn-perfil{
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    [data-actions="true"]{
    position: absolute;
    width: 100%;
    height: calc(100% - 75px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 4;
}
}

</style>