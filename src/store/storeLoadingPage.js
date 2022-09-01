import { defineStore } from "pinia";

export const storeLoadingPage = defineStore("storeLoadingPage", {
    id: 'storeLoadingPage',
    state: () => ({
        active: false,
        message: 'dd',
        counter:0
    }),
    actions: {
        addMessage(msg) {
            this.message = msg;
        },
        addActive() {
            console.log('f');
            this.active = !this.active;
        },
        increment() {
            console.log('d');
            this.counter++
        }
    }
})
