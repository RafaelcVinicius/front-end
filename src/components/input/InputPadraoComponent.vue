<template>
  <div class="flex-c">
    <label :for="id">{{ label }}</label>
    <input 
      type="text"
      :value="value"
      :placeholder="placeholder"
      :id="id"
      @input="$emit('update:value', $event.target.value)"  
    >
  </div>
</template>

<script>
export default {
  name:'InputPadraoComponent',

  emits: ['update:value'],

  props:{
    value:{
      type:String,
      required:true,
    },
    placeholder:{
      type:String,
      required:false,
    },
    label:{
      type:String,
      required:false,
    },
    id:{
      type:String,
      required:false,
    },
  }
}
</script>

<style scoped>
label::first-letter{
  text-transform: uppercase;
}
label{
  font-weight: 600;
  font-size: 12px;
}
input{
  font-size: 16px;
  height: 30px;
}
</style>