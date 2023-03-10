<script setup>
import { ref, reactive, unref, watch, watchEffect } from 'vue'
import Slider from '../components/Slider.vue'

import SearchIcon from '../components/icons/SearchIcon.vue'
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue'

import AlignLeftIcon from '../components/icons/AlignLeftIcon.vue'
import AlignCenterIcon from '../components/icons/AlignCenterIcon.vue'
import AlignRightIcon from '../components/icons/AlignRightIcon.vue'
import PenIcon from '../components/icons/PenIcon.vue';
import ResetIcon from '../components/icons/ResetIcon.vue'

import sitefont from './custom-elements/sitefont.vue'
import { categories, personalities, fontsizes } from '../assets/data/fontInfo';


const bannerRef = ref(null);

// font size
const selectedFontSize = ref(fontsizes[0]);

// selected categories
const selectedCategories = ref([...categories]);

// selected personality
const selectedPersonalities = ref([...personalities]);



const sliderValue = ref(50);

const updateSliderValue = (value) => {
    // sliderValue.value = unref(value)
    // console.log('slider change', value);
    console.log(value)
}


// detect when banner is pinned
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        console.log(entry.intersectionRatio)
        entry.target.classList.toggle('is-pinned', entry.intersectionRatio < 1);
    })
}, { threshold: [1] })

watchEffect(() => {
    if (bannerRef.value) {
        observer.observe(bannerRef.value)
    }
})




</script>


<!-- ============== HTML =========== -->
<template>
    <div class="banner" ref="bannerRef">
        <div class="grid">
            <!-- font search -->
            <div class="grid-item user-input search">
                <div class="icon">
                    <SearchIcon />
                </div>
                <input type="text" placeholder="Search">
            </div>
            <!-- categories -->
            <div class="grid-item categories">
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
            <!-- properties -->
            <div class="grid-item properties">
                <div class="dropdown">
                    <div class="dropdown-toggle">
                        <div class="text">
                            Properties
                        </div>
                        <div class="icon">
                            <LeftArrowIcon />
                        </div>
                        <div class="icon reset">
                            <ResetIcon />
                        </div>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-item">
                            <input type="checkbox" id="1" />
                            <span> </span>
                            <label for="1"> Sans </label>
                        </div>
                        <div class="dropdown-item">
                            <input type="checkbox" id="2" />
                            <span> </span>
                            <label for="2"> Sans </label>
                        </div>
                        <div class="dropdown-item">
                            <input type="checkbox" id="3" />
                            <span> </span>
                            <label for="3"> Sans </label>
                        </div>
                        <div class="dropdown-item">
                            <input type="checkbox" id="4" />
                            <span> </span>
                            <label for="4"> Sans </label>
                        </div>
                        <div class="dropdown-item">
                            <input type="checkbox" id="5" />
                            <span> </span>
                            <label for="5"> Sans </label>
                        </div>
                        <div class="dropdown-item">
                            <input type="checkbox" id="6" />
                            <span> </span>
                            <label for="6"> Sans </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Personality -->
            <div class="grid-item personality">
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
            <!-- Font Size -->
            <div class="grid-item fontsize">
                <div class="fs-dropdown">
                    <div class="dropdown">
                        <div class="dropdown-toggle">
                            <div class="text">
                                288px
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
                <div class="fs-slider">
                    <Slider :processHeight="2" :railHeight="1" />
                </div>
            </div>
            <!-- write text -->
            <div class="grid-item user-input your-text">
                <div class="icon">
                    <PenIcon />
                </div>
                <input type="text" placeholder="Your Text">
            </div>
            <!-- default text -->
            <div class="grid-item text-type">
                <div class="type">
                    Cities
                </div>
                <div class="type">
                    Excerpts
                </div>
                <div class="type">
                    Names
                </div>
            </div>
            <!-- default text -->
            <div class="grid-item text-align">
                <div class="icons">
                    <div class="icon">
                        <AlignLeftIcon />
                    </div>
                    <div class="icon">
                        <AlignCenterIcon />
                    </div>
                    <div class="icon">
                        <AlignRightIcon />
                    </div>
                </div>
            </div>
            <!-- reset button -->
            <div class="grid-item reset-all">
                <div class="reset">
                    Reset All
                </div>
            </div>
            <div class="grid-item rule">
            </div>
        </div>
    </div>
</template>





<!-- ============== CSS ============ -->
<style scoped>
.banner {
    position: sticky;
    top: -0.1px;
    z-index: 100;
    padding: 0 40px;
    background-color: black;
}

.banner.is-pinned {
    border-bottom: 1px solid rgb(56, 56, 56);
}

.grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

.grid-item {
    height: 60px;
    width: 100%;
    flex-shrink: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    color: rgb(87, 87, 87);
}

/* user input */
.grid-item.user-input {
    display: flex;
    align-items: center;
}

.grid-item.user-input:focus-within {
    border-bottom: 1px solid white;
}

.grid-item.user-input input {
    height: 100%;
    width: 100%;

    background-color: transparent;
    border: 0;
    outline: 0;
    color: white;

    font-family: 'passengerSans-regular';
    font-size: 16px;
}

.grid-item.user-input .icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
}


/* ====== search ====== */
.grid-item.search {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    border-bottom: 1px solid transparent;
}

/* ========= categories ======= */
.grid-item.categories {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
}

.grid-item.categories .dropdown {
    z-index: 110;
}

/* ========= properties ======== */
.grid-item.properties {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
}

.grid-item.personality {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
}

/* =========== Drop Down ========= */
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
    display: grid;
    grid-template-columns: repeat(2, min-content);
    align-items: center;
    min-height: 60px;
    gap: 15px;
    cursor: pointer;

    padding: 0 25px;
    margin-left: calc(-20px);

    border-width: 1px;
    border-bottom-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-toggle {
    border-color: rgb(54, 54, 54);
    background-color: rgb(0, 0, 0);
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

    background-color: rgb(0, 0, 0);

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
    grid-template-columns: repeat(2, min-content);
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



/* ======= font size ======= */
.grid-item.fontsize {
    grid-column: 7 / span 2;
}

.grid-item.fontsize .fs-slider {
    width: 100%;
    height: 100%;

    display: grid;
    align-items: center;
}
.grid-item.fontsize .fs-dropdown {
    width: 100px;
    height: 100%;
}

.grid-item.fontsize .dropdown-menu {
    padding: 25px;
    padding-top: 0;
    padding-bottom: 15px;
}






/* ========= rule ========= */
.grid-item.rule {
    grid-column: 1 / span all;
    grid-row: 2 / 3;
    height: 0;
    border-bottom: 1px solid rgb(46, 46, 46);
}


/* ======== your text ========*/
.grid-item.your-text {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
    height: 61px;
    margin-bottom: -1px;
    border-bottom: 1px solid rgb(49, 49, 49);
}


/* text type */

.grid-item.text-type {
    grid-column: 5 / 7;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
    gap: 20px;
}

.grid-item.text-type .type {
    padding: 10px;
    margin: -10px;
    cursor: pointer;
}

.grid-item.text-type .type:hover {
    color: rgb(255, 255, 255, 0.98);
}

/* ====== text align ========= */
.grid-item.text-align {
    grid-column: 7 / 8;
    grid-row: 3 / 4;
}

.grid-item.text-align .icons {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 20px;

    overscroll-behavior: contain;
}

.grid-item.text-align .icon {
    padding: 10px;
    margin: -10px;
    cursor: pointer;
}

.grid-item.text-align .icon:hover {
    color: rgb(255, 255, 255, 0.95);
}

/* ====== reset ======= */
.grid-item.reset-all {
    grid-column: 8 / 9;
    grid-row: 3 / 4;
    display: flex;
    justify-content: flex-end;
}

.grid-item.reset-all .reset {
    padding: 20px;
    margin: -20px;
    cursor: pointer;
}




/* =========== Responsiveness =========== */

@media screen and (max-width: 1532px) {
    .grid-item.your-text {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
    }

    .grid-item.properties {
        grid-column: 5 / 6;
        grid-row: 1 / 2;
    }

    .grid-item.personality {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }

    .grid-item.personality .dropdown-toggle {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
        border-top-color: transparent;
    }
}


@media screen and (max-width: 1278px) {
    .banner {
        padding: 0 20px;
    }
}


@media screen and (max-width: 1024px) {
    .banner {
        display: none;
    }
}
</style>