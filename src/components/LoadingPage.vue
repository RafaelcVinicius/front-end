<template>
  <div id="load" :data-active="active">
    <div v-show="loading">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
    <div v-show="message">
        <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
    import { mapState } from "pinia";
    import { storeLoadingPage } from "@/store/storeLoadingPage.js";
export default {

    data()
    {
        return{
            loading:true,
            status:false,
        }
    },
    computed:{
        ...mapState(storeLoadingPage, ['active']),
        ...mapState(storeLoadingPage, ['message']),
    },
    methods:{
        messageStatus(){

        }
    },
}
</script>

<style scoped>
#load[data-active="true"]{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
    background-color: #3636369e;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes child1 {
    from {
        background-color: #9b5dff;
        width: 13px;
        height: 13px;
    }
    to {
        background-color: #5e00da;
        width: 18px;
        height: 18px;
        animation-delay: 1;
    }
}

#load[data-active="true"] div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
}

#load[data-active="true"] i:nth-child(1)::after{
    content: '';
    position: absolute;
    background-color: #9b5dff;
    animation-name: child1;
    animation-duration: 0.6s;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
#load[data-active="true"] i:nth-child(2)::after{
    content: '';
    position: absolute;
    background-color: #9b5dff;
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
#load[data-active="true"] i:nth-child(3)::after{
    content: '';
    position: absolute;
    background-color: #9b5dff;
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
#load[data-active="true"] i:nth-child(4)::after{
    content: '';
    position: absolute;
    background-color:#9b5dff;
    animation-name: child1;
    animation-delay: 0.6s;
    animation-duration: 0.6s;
    animation-timing-function:cubic-bezier(0.4, 0, 0.79, 1.01);
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 10px;
    height: 10px;
    border-radius:25px ;
}
</style>