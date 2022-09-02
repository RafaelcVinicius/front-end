import { defineStore } from "pinia";

export const storeLoadingPage = defineStore("storeLoadingPage", {
    id: 'storeLoadingPage',
    state: () => ({
        active: false,
        message: '',
    }),
    actions: {
        addMessage(msg) {
            this.message = msg;
        },
        addActive() {
            this.active = !this.active;
        },
    }
})
