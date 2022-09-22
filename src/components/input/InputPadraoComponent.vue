<template>
  <div class="flex-c w-100 flex-ac relative">
    <label
      class="w-100"
      :data-size="1"
      :for="id"
      >{{ label }}</label>
    <input
      :type="typeAtivo ? type : 'text'"
      :value="value"
      :placeholder="placeholder"
      :id="id"
      @input="$emit('update:value', $event.target.value)"
      :data-size="size"
    > <i v-if="type == 'password'" @click="showPassword"></i>
    <div class="erro">
        <small>{{error}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name:'InputPadraoComponent',

  data(){
    return {
      typeAtivo:true,
    }
  },

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
    size:{
      type:Number,
      required:false,
    },
    type:{
      type:String,
      required:false,
    },
    error:{
      type:String,
      required:false,
    },
  },

  methods:{
    showPassword()
    {
      this.typeAtivo = !this.typeAtivo;
    }
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
  color: #252525fa;
}

input::placeholder{
  text-transform: capitalize;
}

input{
  font-size: 13px;
  letter-spacing: 1px;
  height: 20px;
  outline: none;
  border: 1px solid #7c7c7cf2;
  border-radius: 5px;
  padding: 8px;
}

.erro{
  position: relative;
  width: 100%;
}
.erro > small{
  position: absolute;
  font-size: 10px;
  color: red;
  left: 30px;
}

[data-size="1"]{
  max-width: 250px;
  width: 100%;
}
[data-size="2"]{
  max-width: 350px;
  width: 100%;
}
[data-size="3"]{
  max-width: 350px;
  width: 100%;
}
i{
  position: absolute;
  top: 30px;
  right: 25px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: black;
}
</style>