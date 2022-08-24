<template>
      <router-link :to="to" :data-size="size" :class="style">{{name}}</router-link>
</template>

<script>
export default {
  props:{
    name:{
        type:String,
        required:true,
    },  
    size:{
        type:Number,
        required:false,
    },  
    style:{
        type:String,
        required:false,
    },   
    to:{
        type:String,
        required:false,
    },   
  }
}
</script>

<style>
[data-size="1"]{
  width: 60px;
  height: 50px;
}
[data-size="2"]{
  width: 110px;
  height: 40px;
}
[data-size="3"]{
  width: 200px;
  height: 40px;
}
[data-size="4"]{
  width: 250px;
  height: 45px;
}
a::first-letter{
  text-transform: uppercase;
}
a{
  font-family: 'Poppins','Helvetica',sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.8px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>