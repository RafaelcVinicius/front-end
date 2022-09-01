import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    id: 'stateMain',
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment() {
            this.counter++
        }
    }
})
