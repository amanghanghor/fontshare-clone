<script setup>
import { ref } from 'vue'
import LeftArrowIcon from './icons/LeftArrowIcon.vue';
import { fontStyles } from '../assets/data/fontInfo';
import PenIcon from './icons/PenIcon.vue';

import { charsets } from '../assets/data/charSet.js'

const activeLetter = ref('A');

const activeTab = ref(0);




</script>





<template>
    <section class="section">
        <!-- Heading -->
        <div class="heading">
            <div class="glyphs-count"> 505 Glyphs </div>
        </div>
        <!-- Banner -->
        <div class="banner">
            <!-- Selected Letter -->
            <div class="grid-item selected-info">
                <span> Capital Letter A </span>
                <span> U+0041 </span>
            </div>
            <!-- Style -->
            <div class="grid-item style">
                <div class="fs-dropdown">
                    <div class="dropdown">
                        <div class="dropdown-toggle">
                            <div class="text">
                                Regular
                            </div>
                            <div class="icon">
                                <LeftArrowIcon />
                            </div>
                        </div>
                        <div class="dropdown-menu">
                            <div v-for="(style) in fontStyles" class="dropdown-item">
                                <input type="checkbox" id="1" />
                                <span> </span>
                                <label for="1"> {{ style.text }} </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- (type) Outline / Solid -->
            <div class="grid-item type">
                <div class="item"> Solid </div>
                <div class="item"> Outlines </div>
            </div>
            <!-- set type -->
            <div class="grid-item set-type">
                <div class="item">
                    Basic
                </div>
                <div class="item">
                    Full
                </div>
            </div>
            <!-- your text -->
            <div class="grid-item user-input your-text">
                <div class="icon">
                    <PenIcon />
                </div>
                <input type="text" placeholder="Type your letters">
            </div>
        </div>

        <!-- GLYPHS  -->
        <div class="glyphs">
            <div class="letter-wrapper">
                <div class="letter"> {{ activeLetter }} </div>
            </div>

            <!-- characters sets -->
            <div class="sets">

                <!-- set -->
                <div class="set" v-for="({ id, set, name }) in charsets" :key="id">
                    <div class="name"> {{ name }} </div>
                    <div class="boxes">
                        <div :class="{ box: true, active: activeLetter === char }" v-for="({ id, char }) in set"
                            :key="id" @click="activeLetter = char">
                            <span> {{ char }} </span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- tabpanel -->
            <div class="tabpanel">
                <div class="tabs">
                    <div :class="{ tab: true, active: activeTab === index }" v-for="({ name }, index) in charsets"
                        :key="index" @click="activeTab = index">
                        {{ name }}
                    </div>
                </div>
                <div class="panel">
                    <div class="boxes">
                        <div :class="{ box: true, active: activeLetter === char }"
                            v-for="({ id, char }) in charsets[activeTab].set" :key="id" @click="activeLetter = char">
                            <span> {{ char }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </section>
</template>





<style scoped>
.section {
    padding-top: 120px;
}

.heading {
    padding: 0 40px;
}

.heading .glyphs-count {
    font-family: var(--font-semiBold);
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 60px;
}

.banner {
    position: sticky;
    top: 80px;
    z-index: 30;
    height: 60px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
    padding: 0 40px;
    background-color: black;
}

.grid-item {
    display: grid;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
}

/* ======= Selected Letter ======== */
.selected-info {
    grid-column: 1 / span 2;
    grid-template-columns: repeat(2, min-content);
    padding-right: 20px;
    gap: 20px;
}

.selected-info :last-child {
    color: rgb(64, 64, 64);
}

/* ====== Styles ====== */
.style {
    height: 60px;
    grid-column: 3 / span 1;
    margin-left: -20px;
}

/* ====== (type) Solid or Outline */
.type {
    grid-column: 4 / span 1;
    grid-template-columns: repeat(2, min-content);
    gap: 20px;
}

.type .item {
    padding: 10px;
    margin: -10px;
    color: rgb(85, 85, 85);
    cursor: pointer;
}

/* ======= set ======= */

.set-type {
    grid-column: 5 / span 1;
    justify-self: flex-end;
    grid-template-columns: repeat(2, min-content);
    gap: 20px;
}

.set-type .item {
    padding: 10px;
    margin: -10px;
    color: rgb(85, 85, 85);
    cursor: pointer;
}

.set-type .item::after {
    content: "Set";
}

/* ========= user input (your text) ========= */
.user-input {
    height: 100%;
    grid-column: 7 / span 2;
    grid-template-columns: min-content auto;
    justify-content: normal;
    gap: 10px;

    color: rgb(76, 76, 76);
}

.user-input:focus-within {
    color: white;
}

.user-input input {
    display: block;
    height: 100%;

    border: 0;
    outline: 0;
    background-color: transparent;

    font-size: 16px;
    font-family: var(--font-regular);
    color: inherit;
}

.user-input input::placeholder {
    color: inherit;
}

.user-input .icon {
    display: flex;
    align-items: center;
}



/* ============ DROPDOWN =========== */
.dropdown {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
}

.dropdown-toggle {
    position: relative;
    min-height: 60px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    gap: 15px;
    align-items: center;
    cursor: pointer;

    padding-left: 25px;
    padding-right: 10px;

    border-width: 1px;
    border-bottom-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-toggle {
    border-color: rgb(54, 54, 54);
    background-color: rgb(0, 0, 0, 0.925);
}

.dropdown-toggle .icon {
    display: flex;
    align-items: center;
}

.dropdown-toggle .icon.reset {
    position: absolute;
    top: 22px;
    right: 20px;
    padding: 10px;
    margin: -10px;
    color: rgb(0, 0, 0);
    opacity: 0;
}

.dropdown:hover .icon.reset {
    opacity: 0.15;
}


.dropdown-menu {
    max-height: 300px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 0;
    display: none;
    /* display: grid; */
    justify-items: flex-start;
    margin-top: -2px;

    padding: 25px;
    padding-top: 0;
    padding-bottom: 15px;

    background-color: rgb(0, 0, 0, 0.925);

    border-width: 1px;
    border-top-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-menu {
    display: grid;
    border-color: rgb(59, 59, 59);
}

.dropdown-item {
    padding: 5px 0;
    display: grid;
    grid-template-columns: min-content min-content;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.dropdown-item input {
    display: none;
}

.dropdown-item label {
    cursor: pointer;
}

.dropdown-item span {
    height: 10px;
    width: 10px;
    border-radius: 99em;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(50, 50, 50);
    margin-top: 1px;
    cursor: pointer;
}

.dropdown-item span:hover {
    background-color: white;
}


/* =========== GLYPHS ========== */
.glyphs {
    padding: 0 40px;
    display: flex;
}

.letter-wrapper,
.sets {
    width: 50%;
    border: 1px solid red;
}


.letter-wrapper {
    position: sticky;
    top: 150px;

    height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 40px;
    margin-top: 100px;
}

.sets {
    margin-top: 60px;
}

.letter {
    font-family: var(--font-regular);
    font-size: 15rem;
    line-height: 1;
}

.sets {
    display: flex;
    flex-direction: column;
}

.set .name {
    margin-top: 12px;
    margin-bottom: 8px;
    text-align: end;

    font-size: 12px;
    color: rgb(215, 215, 215);
}

.boxes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 80px));
    gap: 0;
    padding-right: 80px;
    padding-left: 5px;
}

.box {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(29, 29, 29);
    cursor: pointer;

    font-family: var(--font-regular);
    font-size: 28px;
}

.box:hover {
    border-color: white;
}

.box.active {
    border-color: white;
}


/* ========= Tab Panel ========= */
.tabpanel {
    display: none;
    margin-top: 40px;
}

.tabs {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: flex-start;
    gap: 20px;

    margin-top: 15px;
    margin-bottom: 20px;
}

.tab {
    padding: 10px;
    margin: -10px;
    font-size: 16px;
    color: rgb(121, 121, 121);
    cursor: pointer;
}

.tab.active {
    color: white;
}







/* ============ RESPONSIVENESS ========= */

@media screen and (max-width: 1278px) {
    .heading {
        padding: 0 20px;
    }

    .banner {
        padding: 0 20px;
    }


    .glyphs {
        padding: 0 20px;
    }


    .set-type {
        grid-column: 6 / span 1;
        justify-self: flex-start;
    }

    .set-type .item::after {
        content: '';
    }

}

@media screen and (max-width: 1198px) {
    .set .boxes {
        padding-right: 48px;
    }
}


@media screen and (max-width: 1024px) {
    .heading .glyphs-count {
        margin-bottom: 30px;
    }

    .banner {
        position: relative;
        top: 0;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }

    .glyphs {
        flex-direction: column;
    }

    .letter-wrapper {
        position: relative;
        top: 0;
        margin-top: 0;
        padding: 0;
    }

    .letter-wrapper {
        width: 100%;
    }

    .letter {
        font-size: 150px;
    }

    .sets {
        display: none;
    }

    .tabpanel {
        display: block;
    }


    .boxes {
        grid-template-columns: repeat(auto-fill, minmax(40px, 40px));
        padding: 0;
    }

    .box {
        height: 40px;
        width: 40px;
        font-size: 16px;
    }



    .grid-item:not(.style, .type) {
        display: none;
    }

    .type {
        grid-column: 1 / 2 !important;
        grid-row: 1 / 2;
    }

    .style {
        grid-column: 2 / 3 !important;
    }
}


@media screen and (max-width: 768px) {
    .tab {
        font-size: 12px;
    }
}
</style>