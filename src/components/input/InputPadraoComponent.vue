<template>
  <div>
    <input 
      type="text" 
      :value="value"
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
  }
}
</script>

<style>

</style>