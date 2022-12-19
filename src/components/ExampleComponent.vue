<template>
  <div class="flex-c flex-ac w-100">
    <div class="display">
        <!-- <GraphicsComponent></GraphicsComponent> -->
        <span>{{ valueAmount }}</span>
    </div>
    <div class="parameters gap-r1 mh-600 w-100 flex-c">
        <div class="flex">
            <input-component
                v-model:value="dados.initialValue"
                :label="'Valor inicial (R$)'"
                :placeholder="'Valor inicial'"
                :size="1"
                :type="'text'"
                :error="error.initialValue"
                @keyup.enter="showAnalytics"
            ></input-component>
            <input-component
                v-model:value="dados.monthlyValue"
                :label="'Valor mensal (R$)'"
                :placeholder="'Valor mensal'"
                :size="1"
                :type="'text'"
                :error="error.monthlyValue"
                @keyup.enter="showAnalytics"
            ></input-component>
        </div>
        <div class="flex">
            <input-component
                v-model:value="dados.time"
                :label="'Tempo (anos)'"
                :size="1"
                :type="'text'"
                :error="error.time"
                @keyup.enter="showAnalytics"
            ></input-component>
            <input-component
                v-model:value="dados.rate"
                :label="'Taxa de Juros (anual)'"
                :size="1"
                :type="'text'"
                :error="error.rate"
                @keyup.enter="showAnalytics"
            ></input-component>
        </div>
        <button-component
            :name="'enviar'"
            :size="2"
            :style="'bg-purple color-cinza'"
            @click="showAnalytics"
            @keyup.enter="showAnalytics"
        ></button-component>
    </div>
  </div>
</template>

<script>
import api from "@/main";
import InputComponent from "./input/InputPadraoComponent.vue";
import ButtonComponent from "./buttons/ButtonComponent.vue";
// import GraphicsComponent from "./graphics/GraphicsComponent.vue";

import { mapActions } from "pinia";
import { storeLoadingPage } from "@/store/storeLoadingPage.js";

export default {
    components: { InputComponent, ButtonComponent },
    name:'exampleComponent',
    data(){
        return {
            valueAmount: 0,
            dados:{
                initialValue: '0',
                monthlyValue: '0',
                time: '',
                rate: '0'
            },
            error:{
                initialValue: '',
                monthlyValue: '',
                time: '',
                rate: ''
            }
        }
    },

    methods:{
        showAnalytics()
        {
            let params = this.dados;


            api.get("/example/", {
                params
                }).then((res) => {
                    this.valueAmount = res.data.amount
            }).catch((error) => {
                if(error.response.data.detail){
                    error.response.data.detail.forEach(element => {
                       this.error[element.id] = element.message
                    });
                }else if(error.response.data.message){
                    this.addActive();
                    this.addRequest('error', error.response.data.message);            
                }
            });
        },

        ...mapActions(storeLoadingPage, ['addActive']),

        ...mapActions(storeLoadingPage, ['addRequest']),
    }
}
</script>

<style>
@media screen and (max-width: 799px) {
    .parameters > div{
        flex-direction: column;
        row-gap: 1rem;
    }
}
</style>