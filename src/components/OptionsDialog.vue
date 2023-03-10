<script setup>
import PenIcon from './icons/PenIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import ResetIcon from './icons/ResetIcon.vue';
import LeftArrowIcon from './icons/LeftArrowIcon.vue';
import { categories, personalities, fontsizes } from '../assets/data/fontInfo';
import AlignLeftIcon from './icons/AlignLeftIcon.vue';
import AlignCenterIcon from './icons/AlignCenterIcon.vue';
import AlignRightIcon from './icons/AlignRightIcon.vue';

import { useAppStore } from '../stores/app';

// app store
const app = useAppStore();



</script>



<template>
    <div class="dialog" :class="{closed: !app.isOptionsDialog}">
        <div class="wrapper">
            <div class="content">

                <div class="grid body">
                    <!-- search -->
                    <div class="item user-input search">
                        <div class="icon">
                            <SearchIcon />
                        </div>
                        <input type="text" placeholder="Search">
                    </div>

                    <!-- categories -->
                    <div class="item categories">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    Categories
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                                <div class="icon reset">
                                    <ResetIcon />
                                </div>
                            </div>
                            <div class="dropdown-menu">
                                <div v-for="(category) in categories" class="dropdown-item">
                                    <input type="checkbox" id="1" />
                                    <span> </span>
                                    <label for="1"> {{ category.text }} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- hr -->
                    <div class="hr hr-categories"> </div>

                    <!-- Personality -->
                    <div class="item personality">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    Personality
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                                <div class="icon reset">
                                    <ResetIcon />
                                </div>
                            </div>
                            <div class="dropdown-menu">
                                <div v-for="(personality) in personalities" class="dropdown-item">
                                    <input type="checkbox" id="1" />
                                    <span> </span>
                                    <label for="1"> {{ personality.text }} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- hr -->
                    <div class="hr hr-personality"> </div>

                    <!-- your text -->
                    <div class="item user-input your-text">
                        <div class="icon">
                            <PenIcon />
                        </div>
                        <input type="text" placeholder="Your Text">
                    </div>

                    <!-- text type -->
                    <div class="item text-type">
                        <div class="type"> Cities </div>
                        <div class="type"> Excerpts </div>
                        <div class="type"> Names </div>
                    </div>

                    <!-- Font size -->
                    <div class="item fontsize">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    24px
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                            </div>
                            <div class="dropdown-menu">
                                <div v-for="(size) in fontsizes" class="dropdown-item">
                                    <input type="checkbox" id="1" />
                                    <span> </span>
                                    <label for="1"> {{ size }} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- hr -->
                    <div class="hr hr-fontsize"> </div>

                    <!-- text align -->
                    <div class="item text-align">
                        <div class="align">
                            <AlignLeftIcon />
                        </div>
                        <div class="align">
                            <AlignCenterIcon />
                        </div>
                        <div class="align">
                            <AlignRightIcon />
                        </div>
                    </div>
                </div>


                <!-- footer -->
                <div class="grid footer">
                    <div class="item filter filter-1">
                        <div> Top 20 </div>
                        <div> Hot 20 </div>
                    </div>
                    <div class="item filter filter-2">
                        <div> Fontshare Original </div>
                        <div> Shortlisted </div>
                    </div>
                    <div class="item btn btn-1">
                        <div> Show Result (100) </div>
                    </div>
                    <div class="item btn btn-2">
                        <div> Reset All </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>





<style scoped>
.dialog {
    display: none;
    position: fixed;
    top: var(--height-header);
    z-index: 500;
    height: calc(100vh - var(--height-header));
    width: 100%;
    background: white;
}


.wrapper {
    height: 100%;
}

.content {
    height: 100%;
    padding: var(--padding-layout);
    display: grid;
    grid-template-rows: stretch min-content;
}


.body {
    align-self: flex-start;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.item {
    height: 60px;
    display: grid;
    align-items: center;
    white-space: nowrap;
    color: rgb(168, 168, 168);
}

.item:focus-within {
    color: black;
}

.hr {
    width: 100%;
    height: 1px;
    grid-column: 1 / 3;
    border-bottom: 1px solid rgb(224, 224, 224);
}

/* ======= User Input ======== */
.user-input {
    height: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(224, 224, 224);
}

.user-input:focus-within {
    border-bottom: 1px solid black;
}

.user-input input {
    display: inline-block;
    height: 59px;
    width: 100%;

    font-family: var(--font-medium);
    font-size: 16px;

    border: 0;
    outline: 0;
}

.user-input input::placeholder {
    color: rgb(186, 186, 186);
}

.user-input:focus-within input::placeholder {
    color: black;
}

.user-input .icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
}


/* ======= Categories ======= */
.categories {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.hr-categories {
    grid-row: 3 / 4;
}


/* ======= Personality ======= */
.personality {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
}

.hr-personality {
    grid-row: 5 / 6;
}

.personality,
.categories {
    justify-self: flex-start;
}


/* ======== Your Text ======== */

.your-text {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
}



/* ====== Text Type ====== */
.text-type {
    grid-column: 1/ 2;
    grid-row: 7 / 8;
    grid-template-columns: repeat(3, min-content);
    gap: 20px;
}

.text-type .type {
    padding: 10px;
    margin: -10px;
}

.text-type .type:hover {
    color: black;
    cursor: pointer;
}




/* ====== Font Size ====== */
.fontsize {
    grid-column: 2 / 3;
    grid-row: 7 / 8;
    justify-content: flex-end;
    padding-left: 40px;
}

.fontsize .dropdown {
    margin-right: -20px;
}

.fontsize .dropdown-menu {
    padding: 0 25px 15px 25px;
    border-right-width: 0;
}

.hr-fontsize {
    grid-row: 8 / 9;
}

/* ===== text align ===== */
.text-align {
    grid-column: 1 / 2;
    grid-row: 9 / 10;
    grid-template-columns: repeat(3, min-content);
    gap: 20px;
}

.text-align .align {
    padding: 10px;
    margin: -10px;
    color: inherit;
    cursor: pointer;
}

.text-align .align:hover {
    color: black;
}



/* ====== FOOTER START ======= */
.footer {
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    
    padding-top: 20px;
    align-self: flex-end;
    background-color: white;
    z-index: 10;
}

.footer.grid {
    gap: 10px;
}

.filter-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    grid-template-columns: repeat(2, min-content);
    gap: 20px;
    font-size: 12px;
}

.filter-2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    grid-template-columns: repeat(2, min-content);
    justify-content: flex-end;
    gap: 20px;
    font-size: 12px;
}

.filter {
    height: auto;
    margin-bottom: 10px;
}

.filter div {
    padding: 10px;
    margin: -10px;
}

.footer .btn {
    background-color: black;
    color: white;
    justify-content: center;
    align-content: center;
    padding: 0 40px;
    
    font-family: var(--font-semiBold);
    font-size: 16px;
}
.footer .btn-1 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
}
.footer .btn-2 {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
}



/* ====== FOOTER END ======== */




/* ============ DROPDOWN =========== */
.dropdown {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
}

.categories .dropdown {
    z-index: 15;
}


.dropdown-toggle {
    position: relative;
    display: flex;
    min-height: 60px;
    gap: 15px;
    align-items: center;
    cursor: pointer;

    padding: 0 20px;
    margin-left: calc(-20px);

    border-width: 1px;
    border-bottom-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-toggle {
    border-color: rgb(228, 228, 228);
    background-color: rgb(255, 255, 255);
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
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 0;
    display: none;
    /* display: grid; */
    justify-items: flex-start;
    padding: 0 75px 15px 25px;
    margin-left: calc(-20px);
    margin-top: -2px;

    background-color: rgb(255, 255, 255);

    border-width: 1px;
    border-top-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-menu {
    display: grid;
    border-color: rgb(228, 228, 228);
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
    border: 2px solid rgb(0, 0, 0);
    margin-top: 1px;
    cursor: pointer;
}

.dropdown-item span:hover {
    background-color: white;
}


@media screen and (max-width: 1024px) {
    .dialog {
        display: block;
    }
    .dialog.closed {
        display: none;
    }
}



</style>