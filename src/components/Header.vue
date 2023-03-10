<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useAppStore } from '../stores/app'

import LogoIcon from './icons/LogoIcon.vue';
import LogoSmallIcon from './icons/LogoSmallIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';
import SearchIcon from './icons/SearchIcon.vue'

// app store
const { toggleIsMenu, toggleIsOptionsDialog } = useAppStore();
const route = useRoute();

const isSearch = ref()

// router 
watchEffect(() => {
    if (route.name === 'home' || route.name === 'pairs') {
        isSearch.value = true;
    }
    else {
        isSearch.value = false;
    }
})



</script>




<template>
    <header class="header grid">
        <!-- brand icon -->
        <router-link to="/" class="grid-item brand">
            <div class="logo">
                <LogoIcon />
            </div>
        </router-link>

        <!-- Fonts -->
        <router-link to="/" class="grid-item fonts">
            <div class="text"> Fonts </div>
            <div class="count"> 100 </div>
        </router-link>

        <!-- Pairs -->
        <router-link to="/pairs" class="grid-item pairs">
            <div class="text"> Pairs </div>
            <div class="count"> 59 </div>
        </router-link>

        <!-- licenses -->
        <router-link to="/licenses" class="grid-item licenses">
            <div> Licenses </div>
        </router-link>

        <!-- menu-toggler -->
        <div class="grid-item menu-toggler" @click="toggleIsMenu">
            <div class="icon">
                <MenuIcon />
            </div>
        </div>

        <!-- selected styles icon -->
        <div class="grid-item selected-styles is-empty">
            <div> 0 </div>
        </div>

        <!-- search -->
        <div v-if="isSearch" class="grid-item search" @click="toggleIsOptionsDialog">
            <div>
                <SearchIcon />
            </div>
        </div>

    </header>
</template>




<style scoped>
.header {
    z-index: 50;
    width: 100%;
    height: var(--height-header);
    padding: 0 var(--padding-layout);
    color: white;
    border-bottom: 1px solid rgb(48, 48, 48);
    background-color: black;
}

.grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

.grid-item {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    border-left: 1px solid rgb(32, 32, 32);
    cursor: pointer;
    color: white;
}

.grid-item:not(.brand) {
    justify-content: center;
    align-items: center;
}

.grid-item:is(.fonts, .pairs, .licenses, .menu-toggler, .search):hover {
    background-color: white;
    color: black;
}


.grid-item.brand {
    grid-column: 1 / 3;
    border: 0;
    padding-left: 40px;
    margin-left: -40px;
    box-sizing: padding-box;
}

.grid-item.selected-styles {
    grid-column: 7 / 9;
}

.grid-item.selected-styles.is-empty {
    color: rgb(88, 88, 88);
}

.grid-item .count {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 12px;
}

.grid-item.search {
    display: none;
}


@media screen and (max-width: 1278px) {
    .grid-item.brand {
        grid-column: 1 / 2;
    }

    .grid-item.brand svg {
        width: 100px;
        height: 30px;
    }

    .grid-item.selected-styles {
        grid-column: 6 / 9;
    }
}

@media screen and (max-width: 1024px) {
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0;
    }

    .grid {
        grid-template-columns: auto repeat(3, min-content);
        grid-template-rows: 1 / 2;
    }

    .grid-item.brand {
        padding-left: 20px;
        padding-right: 50px;
        margin: 0;
    }

    .grid-item.brand svg {
        width: 100%;
        max-width: 100px;
        height: auto;
    }

    .grid-item.search {
        display: flex;
    }

    .grid-item:is(.fonts, .pairs, .licenses) {
        display: none;
    }

    .grid-item {
        width: 60px;
        height: 60px;
    }

    .grid-item.brand {
        width: 100%;
    }

    .grid-item.selected-styles {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .grid-item.search {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
    }

    .grid-item.menu-toggler {
        grid-column: 4 / 5;
        grid-row: 1 / 2;
    }

    .grid-item.menu-toggler svg {
        width: 24px;
        height: 16px;
    }

}
</style>