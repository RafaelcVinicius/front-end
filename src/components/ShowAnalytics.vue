<template>
  <div>
    <div class="display">
        <GraphicsComponent></GraphicsComponent>
    </div>
    <div class="parameters gap-r1">
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
            v-model:value="dados.code"
            :label="'Code'"
            :placeholder="'Code'"
            :size="1"
            :type="'text'"
            :error="error.code"
            @keyup.enter="showAnalytics"
        ></input-component>
        <input-component
            v-model:value="dados.dateStatr"
            :label="'Data inicial'"
            :size="1"
            :type="'date'"
            :error="error.dateStatr"
            @keyup.enter="showAnalytics"
        ></input-component>
        <input-component
            v-model:value="dados.dateEnd"
            :label="'Data final'"
            :size="1"
            :type="'date'"
            :error="error.dateEnd"
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
import GraphicsComponent from "./graphics/GraphicsComponent.vue";

export default {
    components: { InputComponent, ButtonComponent, GraphicsComponent },
    name:'ShowAnalytics',
    data(){
        return {
            dados:{
                code:'',
                valorInicial: '0',
                dateStatr: '',
                dateEnd: ''
            },
            error:{
                code:'',
                valorInicial: '',
                dateStatr: '',
                dateEnd: ''
            }
        }
    },

    methods:{
        showAnalytics()
        {
            let params = {
                    code:         this.dados.code,
                    valorInicial: '0',
                    dateStatr:    this.dados.dateStatr,
                    dateEnd:      this.dados.dateEnd,
                  }
            api.get("/bcb", {
                params
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