<script setup>
import { watchEffect, ref, watch } from 'vue';
import { routerKey, useRoute } from 'vue-router';
import { useAppStore } from '../stores/app';

import MenuLarge from './MenuLarge.vue';
import MenuSmall from './MenuSmall.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const route = useRoute();
const store = useAppStore();
const isDialog = ref();

watchEffect(()=>{
    if(store.isMenu || store.isOptionsDialog) {
        isDialog.value = true;
    }
    else {
        isDialog.value = false;
    }
})

watchEffect(()=>{
    // watching route.fullPath
    route.fullPath;
    store.$reset();
})


</script>





<template>
    <!-- Empty Link -->
    <div class="layout" id="" :class="{isDialog: isDialog}">
        <Header />
        <MenuLarge />
        <MenuSmall />
        <slot></slot>
        <Footer />
    </div>
</template>





<style scoped>

.layout {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
}

.layout.isDialog {
    height: 100vh;
    overflow-y: hidden !important;
}



</style>