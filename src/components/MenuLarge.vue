<script setup>
import { RouterLink } from 'vue-router';
import { useAppStore } from '../stores/app';

const app = useAppStore();  // app store


</script>



<template>
    <div class="menu" :class="{ closed: !app.isMenu }">
        <div class="nav">
            <router-link to="/faq" class="nav-item">
                FAQs
            </router-link>
            <router-link to="/about" class="nav-item">
                About
            </router-link>
        </div>
    </div>
</template>






<style scoped>
.menu {
    position: fixed;
    top: var(--height-header);
    left: 0;
    z-index: 500;

    width: 100%;
    height: calc(100vh - var(--height-header));

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0 40px;
    background-color: rgb(6, 6, 6);
}

.menu.closed {
    display: none;
}


.nav {
    width: 100%;
    grid-column: 3 / 7;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 100px;
}

.nav-item {
    font-family: var(--font-semiBold);
    font-size: 64px;
    color: rgb(118, 118, 118);
    padding: 20px;
    margin: -20px;
    cursor: pointer;
}
.nav-item.router-link-exact-active {
    color: rgb(236, 236, 236);
}

.nav-item:hover {
    color: white;
}

.nav-item:last-child {
    margin-top: 20px;
}


@media screen and (max-width: 1278px) {
    .nav {
        grid-column: 1 / 6;
    }
}

@media screen and (max-width: 1024px) {
    .menu {
        display: none;
    }
}
</style>