<script setup>
import { watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAppStore } from '../stores/app';

const app = useAppStore();

</script>






<template>
    <div class="menu" :class="{ closed: !app.isMenu }">
        <div class="wrapper">
            <div class="content">
                <div class="nav">
                    <router-link to="/" class="nav-item">
                        <span> Fonts </span>
                        <span> 100 </span>
                    </router-link>
                    <router-link to="/pairs" class="nav-item">
                        <span> Pairs </span>
                        <span> 59 </span>
                    </router-link>
                    <router-link to="/licenses" class="nav-item">
                        <span> Licenses </span>
                    </router-link>
                    <router-link to="/faq" class="nav-item">
                        <span> FAQs </span>
                    </router-link>
                    <router-link to="/about" class="nav-item">
                        <span> About </span>
                    </router-link>
                </div>
                <div class="info">
                    <a href="/" target="_blank"> Fontshare </a>
                    <a href="/" target="_blank"> ITF Foundry </a>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.menu {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 500;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: white;
    overflow: hidden;
}

.wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 60px);
}


.content {
    position: relative;
    padding: 100px 20px 120px 20px;
}


.nav {
    display: flex;
    flex-direction: column;
}

.nav-item {
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: var(--font-medium);
    font-size: 24px;
    line-height: 29px;
    color: rgb(194, 194, 194);

    border-bottom: 1px solid rgba(89, 89, 89, 0.1);
}

.nav-item:hover {
    color: #10100E;
}
.nav-item.router-link-exact-active {
    color: #10100E;
}


.nav-item span:nth-of-type(2) {
    font-size: 16px;
}

.info {
    position: absolute;
    bottom: 40px;
    left: 10px;
}

.info a {
    font-family: var(--font-semiBold);
    font-size: 12px;
    line-height: 14px;
    color: rgb(194, 194, 194) !important;
    padding: 10px;
}

.info a:hover {
    color: #10100E !important;
}


@media screen and (max-width: 1024px) {
    .menu {
        display: block;
    }

    .menu.closed {
        display: none;
    }
}

</style>