<template>
  <div class="flex-c flex-ac relative" :data-size="size">
    <label
      :for="id"
    >{{ label }}</label>
    <div class="select" :data-search="search" :data-active="list" @click="showList">
      <input
        :disabled="!search"
        :readonly="!search"
        :type="'text'"
        :value="value"
        :placeholder="placeholder"
        :id="id"
      ><i></i>
      <div v-show="list" class="list">
        <ul>
          <li v-for="(obj, i) in options" :key="i" :value="obj"  @click="$emit('itemSelect', obj)">{{obj.name}}</li>
        </ul>
      </div>
    </div>
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
      list:false,
    }
  },

  emits: ['update:value', 'itemSelect'],

  props:{
    value:{
      type:String,
      required:true,
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
    error:{
      type:String,
      required:false,
    },
    placeholder:{
      type:String,
      required:false,
    },
    options:{
      type:Object,
      required:false,
    },
    search:{
      type:Boolean,
      required:false,
    },
  },

  methods:{
    showList()
    {
      this.list = !this.list;
    },
  },

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
  width: 100%;
}

.select{
  font-size: 13px;
  letter-spacing: 1px;
  height: 20px;
  border: 1px solid #7c7c7cf2;
  border-radius: 5px;
  padding: 8px;
  position: relative;
  background-color: #fff;
  width: 100%;
}

.select[data-search="false"]{
  cursor: pointer;
}

.select[data-search="false"] input{
  cursor: pointer;
}

.select[data-active="true"]{
  border-bottom: none;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.list{
  position: absolute;
  z-index: 3;
  background-color: #fff;
  width: 100%;
  border: 1px solid #7c7c7cf2;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top: none;
  top: 34px;
  left: -1px;
}
.list ul{
  list-style: none;
  padding: 0 10px 10px 10px;
  margin: 0px;
}
.list ul li{
  font-size: 12px;
  font-weight: 500;
  color: #000;
  padding: 8px;
}
.list ul li:hover{
  background-color: #f4f4f6;
  border-radius: 5px;
}

input{
  border: none;
  outline: none;
  width: calc(100% - 30px);
  background-color: #fff;
  color: #252525fa;
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
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: black;
}
</style>