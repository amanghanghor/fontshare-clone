<script setup>
import { watchEffect, ref } from 'vue';
import { useAppStore } from '../stores/app';
import PageUpIcon from './icons/PageUpIcon.vue';

const store = useAppStore();
const show = ref();
const display = ref();

watchEffect(() => {
    if (store.isMenu || store.isOptionsDialog) {
        show.value = false;
    }
    else {
        show.value = true;
    }
})

console.log("Hello pageup")

window.onload = (e) => {
    if(window.scrollY < 20) {
        display.value = false;
    }
}

window.onscroll = (e) => {
    display.value = true;
    if (window.scrollY < 20) {
        show.value = false;
    }
    else {
        show.value = true;
    }
}


</script>






<template>
    <!-- Page up icon -->
    <a href="#" class="pageup" :class="{ show, display }">
        <div class="icon">
            <PageUpIcon />
        </div>
    </a>
</template>





<style scoped>
.pageup {
    position: fixed;
    bottom: 40px;
    right: 80px;
    z-index: 500;
    height: 40px;
    width: 40px;

    align-items: center;
    justify-content: center;

    color: white;
    background-color: rgba(0, 0, 0, 0.98);
    border-radius: 99em;

    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;

    transition: all 150ms ease-out;

    display: none;
    opacity: 0;
    visibility: hidden;
}

.pageup.display {
    display: flex;
}

.pageup:hover {
    border: 1px solid rgb(157, 157, 157);
}

.pageup.show {
    opacity: 1;
    visibility: visible;
}

@media screen and (max-width: 1278px) {
    .pageup {
        right: 40px;
        bottom: 20px;
    }
}

@media screen and (max-width: 768px) {
    .pageup {
        right: 20px;
        bottom: 20px;
    }
}
</style>