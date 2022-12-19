<template>
  <div class="p-2 w-100">
    <div class="card">
      <div class="flex-jc gap-c2">
        <input-component
          v-model:value="dados.descricao"
          :id="'Descricao'"
          :label="'Descrição'"
          :placeholder="'Descrição'"
          :size="0"
          :type="'text'"
          :error="error.descricao"
        ></input-component>
        <InputSelectComponent
          :value="dados.typoAplication.name"
          @itemSelect="dados.typoAplication = $event"
          :id="'tipoAplicacao'"
          :label="'Tipo aplicação'"
          :placeholder="'Descrição'"
          :size="2"
          :error="error.descricao"
          :search="false"
          :options="[{name:'pré-fixado'}, {name:'pos-fixado'}]"
        ></InputSelectComponent>
        </div>
      <hr />
      <input-component
        v-model:value="dados.descricao"
        :id="'Descricao'"
        :label="'Descrição'"
        :placeholder="'Descrição'"
        :size="1"
        :type="'text'"
        :error="error.descricao"
      ></input-component>
      <button-component
        :name="'enviar'"
        :size="2"
        :style="'bg-purple color-cinza'"
      ></button-component>
    </div>
  </div>
</template>
  
  <script>
  import InputComponent from "../../components/input/InputPadraoComponent.vue";
  import InputSelectComponent from "../../components/input/InputSelectComponent.vue";
  import ButtonComponent from "../../components/buttons/ButtonComponent.vue";
  export default {
  name:'registrationActiveView',
  components: { InputComponent, ButtonComponent, InputSelectComponent },
    data(){
      return{
        dados:{
          description:'',
          typoAplication:{
            name:''
          },
          initialValue: 0,
          applicationCode: '',
          applicationFee: '',
        },
        error:{
          descricao:'',
        }
      }
    },

  }
  </script>
  
  <style scoped>
  .card{
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  font-size: 14px;
  font-weight: 600;
  color: #3b3b3b;
  display: flex;
  flex-direction: column; 
  padding: 2rem;
}
  </style>