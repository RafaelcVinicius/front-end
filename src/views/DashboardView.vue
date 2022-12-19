<template>
  <div class="p-2 w-100">
    <div class="flex-jb flex-ac">
      <h2>Dashboard</h2>
      <ButtonLinkComponent 
        :name="'cadastrar'"
        :size="3"
        :style="'bg-purple flex-jc color-cinza font-w700'"
        :to="'/registration'"
      />
    </div>
    <div class="w-100 flex-jb flex-ac gap-c1">
      <div class="cardValue ">
        <span>Saldo atual</span>
        <span class="font-18 m-1t font-w700">{{ currentBalance }}</span>
      </div>
      <div class="cardValue">
        <span>Receita mensal</span>
        <span class="font-18 m-1t font-w700">{{ monthlyRevenue }}</span>
      </div>
      <div class="cardValue">
        <span>Valor total investido</span>
        <span class="font-18 m-1t font-w700">{{ investedAmount }}</span>
      </div>
    </div>

    <div class="w-100 flex-jc flex-c gap-c1 m-2t w-100">
      <h4>Ativos mais importantes</h4>
      <div class="w-100 gap-r1 flex-c">
        <div v-for="(investment, i) in investmentsData" :key="i" class="investmentCard flex-ac gap-c1">
          <div class="flex  gap-c1">
            <div> Descrição : 
              <span class="font-w700">{{investment.description}}</span>
            </div>
            <div>Valor atual : 
              <span class="font-w700">{{investment.currentValue}}</span>
            </div>    
          </div>
          <div class="flex  gap-c1">
            <div>Lucro : 
              <span class="font-w700">{{investment.profit}}</span>
            </div>
            <div>Montante investido : 
              <span class="font-w700">{{investment.investedAmount}}</span>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLinkComponent from "../components/buttons/ButtonLinkComponent.vue";
export default {
  name:'dashboardView',
  components: { ButtonLinkComponent },
  data(){
    return {
      currentBalance: 100,
      investedAmount: 100,
      monthlyRevenue: 50,
      investmentsData: [
        {
          description: 'Bitcoin',
          investedAmount:  500,
          currentValue:  500,
          profit: 160
        },
        {
          description: 'Bitcoin',
          investedAmount:  500,
          currentValue:  500,
          profit: 160
        },
        {
          description: 'Bitcoin',
          investedAmount:  500,
          currentValue:  500,
          profit: 160
        }
      ],
    }
  }

}
</script>

<style scoped>
.cardValue{
  max-width: 450px;
  width: 100%;
  height: 80px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  font-size: 14px;
  font-weight: 600;
  color: #3b3b3b;
  display: flex;
  flex-direction: column; 
  padding: 1rem;
}
.investmentCard{
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  display: flex;
  padding: 1rem;
  font-size: 14px;

}
</style>