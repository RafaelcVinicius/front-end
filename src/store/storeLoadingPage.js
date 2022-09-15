import { defineStore } from "pinia";

export const storeLoadingPage = defineStore("storeLoadingPage", {
    id: 'storeLoadingPage',
    state: () => ({
        active: false,
        request: {
            status: '',
            message: '',
            link: ''
        },
    }),
    actions: {
        addRequest(status, msg, link = '') {
            this.request = {
                status: status,
                message: msg,
                link: link
            };
            console.log('ff');
            setTimeout(() => {
                this.request = {
                    status: '',
                    message: '',
                    link: ''
                };
                this.active = false;
            }, 3000);
        },
        addActive() {
            this.active = !this.active;
        },
    }
})
