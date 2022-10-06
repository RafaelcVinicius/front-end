<template>
  <div>
    <div class="display">
    </div>
    <div class="parameters">
        <input-component
            v-model:value="dados.valorInicial"
            :label="'Valor inicial'"
            :placeholder="'Valor inicial'"
            :size="1"
            :type="'text'"
            :error="error.valorInicial"
            @keyup.enter="showAnalytics"
        ></input-component>
        <input-component
            v-model:value="dados.dataInicial"
            :label="'Data inicial'"
            :size="1"
            :type="'date'"
            :error="error.dataInicial"
            @keyup.enter="showAnalytics"
        ></input-component>
        <input-component
            v-model:value="dados.dataFinal"
            :label="'Data final'"
            :size="1"
            :type="'date'"
            :error="error.dataFinal"
            @keyup.enter="showAnalytics"
        ></input-component>
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

export default {
    components: { InputComponent, ButtonComponent },
    name:'ShowAnalytics',
    data(){
        return {
            dados:{
                valorInicial: '0',
                dataInicial: '',
                dataFinal: ''
            },
            error:{
                valorInicial: '',
                dataInicial: '',
                dataFinal: ''
            }
        }
    },

    methods:{
        showAnalytics()
        {
            let obj = this.dados;
            api.get("/consulta/dados", {
                  params:{
                    obj
                  }
                }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });

        //   api.get("consulta/dados"
        //   ).then((res) => {
        //     console.log(res);
        //     //   this.addRequest('success',res.data.message, window.location.href.split('/')[0] + '//' + window.location.host + '/');
        //   })
        }
    }
}
</script>

<style>

</style>