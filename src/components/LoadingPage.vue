<template>
  <div id="load">
    <div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#load{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
    background-color: #91919165;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes child1 {
    from {
        background-color: red;
        width: 13px;
        height: 13px;
    }
    to {
        background-color: yellow;
        width: 18px;
        height: 18px;
        animation-delay: 1;
    }
}

#load div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
}

#load i:nth-child(1)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-duration: 0.6s;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load i:nth-child(2)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-delay: 0.1s;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load i:nth-child(3)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-delay: 0.2s;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load i:nth-child(4)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-delay: 0.3s;
    animation-duration: 0.6s;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load i:nth-child(5)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-delay: 0.4s;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load i:nth-child(6)::after{
    content: '';
    position: absolute;
    background-color: blue;
    animation-name: child1;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-delay: 0.5s;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
</style>