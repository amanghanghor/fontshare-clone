// ========= setup pinia app store ==========

import { defineStore } from "pinia"
import { ref, computed } from 'vue'


export const useAppStore = defineStore('app', {
    // state
    state: () => ({
        isMenu: false,
        isOptionsDialog: false,
    }),

    // actions
    actions: {
        toggleIsMenu() {
            this.isOptionsDialog = false;
            this.isMenu = !this.isMenu ;
        },
        toggleIsOptionsDialog() {
            this.isMenu = false ;
            this.isOptionsDialog = !this.isOptionsDialog ;
        }
    }

})