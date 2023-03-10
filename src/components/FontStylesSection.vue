<script setup>
import { ref } from 'vue';
import PenIcon from './icons/PenIcon.vue';
import LeftArrowIcon from './icons/LeftArrowIcon.vue';
import AlignLeftIcon from './icons/AlignLeftIcon.vue'
import AlignCenterIcon from './icons/AlignCenterIcon.vue'
import AlignRightIcon from './icons/AlignRightIcon.vue'


import Slider from './Slider.vue';
import { fontsizes } from '../assets/data/fontInfo';


const styles = ref([
    {
        id: 1,
        text: 'Light'
    },
    {
        id: 2,
        text: 'Light Italic'
    },
    {
        id: 3,
        text: 'Regular'
    },
    {
        id: 4,
        text: 'Regular Italic'
    },
    {
        id: 5,
        text: 'Medium'
    },
    {
        id: 6,
        text: 'Medium Italic'
    },
    {
        id: 7,
        text: 'Bold'
    },
    {
        id: 8,
        text: 'Bold Italic'
    },
    {
        id: 9,
        text: 'Black'
    },
    {
        id: 10,
        text: 'Black Italic'
    },
])


// detect when banner is pinned
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry, index) => {
//         console.log(entry.intersectionRatio)
//         entry.target.classList.toggle('is-pinned', entry.intersectionRatio < 1);
//     })
// }, { threshold: [1] })

// watchEffect(() => {
//     if (bannerRef.value) {
//         observer.observe(bannerRef.value)
//     }
// })



const variables = ref([
    {
        id: 1,
        text: 'Variable'
    },
    {
        id: 2,
        text: 'Variable Italic'
    },
])


</script>





<template>
    <section class="section">
        <!-- styles -->
        <div class="styles">
            <!-- heading -->
            <div class="heading">
                <div class="style-count"> 10 Styles </div>
            </div>
            <!-- banner -->
            <div class="banner">
                <div class="grid-item user-input your-text">
                    <div class="icon">
                        <PenIcon />
                    </div>
                    <input type="text" placeholder="Your Text">
                </div>
                <div class="grid-item text-type">
                    <div class="type"> Cities </div>
                    <div class="type"> Excerpts </div>
                    <div class="type"> Names </div>
                </div>
                <div class="grid-item fontsize">
                    <div class="fs-dropdown">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    128px
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
                        <Slider :processHeight="2" :railHeight="1" :width="200" />
                    </div>
                </div>
                <div class="grid-item text-align">
                    <div class="align left">
                        <AlignLeftIcon />
                    </div>
                    <div class="align center">
                        <AlignCenterIcon />
                    </div>
                    <div class="align right">
                        <AlignRightIcon />
                    </div>
                </div>
                <div class="grid-item resetAll">
                    <div class="reset-button">Reset All</div>
                </div>
            </div>
            <!-- style list -->
            <div class="style-list">
                <div class="style-wrapper" v-for="style in styles">
                    <div class="style-item">
                        <div class="header">
                            <div class="name">
                                {{ style.text }}
                            </div>
                            <div class="slider size">
                                <div class="data-label" data-hover-label="34px">
                                    Size
                                </div>
                                <div class="size-slider">
                                    <Slider :dotSize="12" />
                                </div>
                            </div>
                            <div class="slider leading">
                                <div class="data-label" data-hover-label="120px">
                                    Leading
                                </div>
                                <div class="leading-slider">
                                    <Slider :dotSize="12" />
                                </div>
                            </div>
                            <div class="add">
                                + Add Style
                            </div>
                        </div>
                        <div class="text-container">
                            <div class="text" contenteditable="true"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- variables -->
        <div class="styles variables">
            <!-- heading -->
            <div class="heading">
                <div class="style-count"> 2 Variables </div>
            </div>
            <!-- banner -->
            <div class="banner">
                <div class="grid-item user-input your-text">
                    <div class="icon">
                        <PenIcon />
                    </div>
                    <input type="text" placeholder="Your Text">
                </div>
                <div class="grid-item text-type">
                    <div class="type"> Cities </div>
                    <div class="type"> Excerpts </div>
                    <div class="type"> Names </div>
                </div>
                <div class="grid-item fontsize">
                    <div class="fs-dropdown">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    128px
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
                        <Slider :processHeight="2" :railHeight="1" :width="200" />
                    </div>
                </div>
                <div class="grid-item text-align">
                    <div class="align left">
                        <AlignLeftIcon />
                    </div>
                    <div class="align center">
                        <AlignCenterIcon />
                    </div>
                    <div class="align right">
                        <AlignRightIcon />
                    </div>
                </div>
                <div class="grid-item resetAll">
                    <div class="reset-button">Reset All</div>
                </div>
            </div>
            <!-- style list -->
            <div class="style-list">
                <div class="style-wrapper" v-for="variable in variables">
                    <div class="style-item">
                        <div class="header">
                            <div class="name">
                                {{ variable.text }}
                            </div>
                            <div class="slider size">
                                <div class="data-label" data-hover-label="34px">
                                    Size
                                </div>
                                <div class="size-slider">
                                    <Slider :dotSize="12" />
                                </div>
                            </div>
                            <div class="slider leading">
                                <div class="data-label" data-hover-label="120px">
                                    Leading
                                </div>
                                <div class="leading-slider">
                                    <Slider :dotSize="12" />
                                </div>
                            </div>
                            <div class="add">
                                + Add Style
                            </div>
                        </div>
                        <div class="text-container">
                            <div class="text" contenteditable="true"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>





<style scoped>
.section {
    margin-top: 100px;
}

.styles,
.variables {
    width: 100%;
    margin-top: 100px;
}

.heading {
    padding: 0 40px;
}

.heading .style-count {
    font-family: var(--font-semiBold);
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 60px;
}

/* ====== banner ======= */
.banner {
    position: sticky;
    top: 80px;
    height: 60px;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    background-color: rgb(0, 0, 0);

    padding: 0 40px;
    margin-bottom: 30px;
}

.banner .grid-item {
    height: 60px;
    display: grid;
    align-items: center;
}


/* ======== USER INPUT ===== */
.user-input {
    width: 100%;
    grid-column: 1 / span 2;
    grid-template-columns: min-content 1fr;
    color: rgb(94, 94, 94);
}

.user-input:focus-within {
    color: white;
}

.user-input input {
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;

    font-family: var(--font-regular);
    font-size: 16px;
    color: inherit;
}

.user-input input::placeholder {
    color: inherit;
}

.user-input .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
}


/* ======== TEXT TYPE ========= */
.text-type {
    grid-column: 3 / span 2;
    grid-template-columns: repeat(3, minmax(0, min-content));
    gap: 20px;
}

.text-type .type {
    padding: 10px;
    margin: -10px;
    cursor: pointer;
    color: rgb(75, 75, 75);
}

.text-type .type:hover {
    color: white;
}


/* ======= FONT SIZE ========= */
.fontsize {
    height: 100%;
    grid-column: 5 / span 2;
    grid-template-columns: 120px 1fr;
    gap: 0;

    padding-right: 40px;
}

.fontsize .fs-dropdown {
    width: 100%;
    height: 60px;
    justify-self: flex-start;
}

.fontsize .fs-slider {
    width: 100%;
    height: 60px;
    display: grid;
    align-items: center;
}

/* ======== TEXT ALIGN ======== */
.text-align {
    grid-column: 7 / 8;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-self: flex-start;
}

.text-align .align {
    padding: 10px;
    margin: -10px;
    color: rgb(58, 58, 58);
}

.text-align .align:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
}


/* ========== RESET ALL ========= */
.resetAll {
    grid-column: 8 / 9;
    justify-self: flex-end;
    color: rgb(70, 70, 70);
}

.resetAll .reset-button {
    padding: 20px;
    margin: -20px;
    cursor: pointer;
}


/* ======= DROPDOWN ======== */
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


/* ======== STYLE LIST ======== */
.style-list {
    display: flex;
    flex-direction: column;
}

.style-wrapper {
    width: 100%;
    padding: 0 40px;
}

.style-item {
    padding: 20px 0;
    flex-grow: 0;
    display: flex;
    flex-direction: column;

    border-top: 1px solid rgb(31, 31, 31);
    border-bottom: 1px solid rgb(31, 31, 31);
}

.style-wrapper:hover .style-item {
    border-color: white;
}


.style-item .header {
    position: relative;
    height: 14px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

.style-item .name {
    grid-column: 1 / span 1;
    font-family: var(--font-bold);
    font-size: 12px;
    color: rgb(104, 104, 104);
    white-space: nowrap;
}

.style-item .add {
    position: absolute;
    top: 0;
    right: 0;
    font-family: var(--font-bold);
    font-size: 14px;
    padding: 20px;
    margin: -20px;
}


/* ======= Font Size ======= */
.style-item .slider {
    width: 100%;
    font-size: 12px;
    line-height: 14px;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: min-content auto;
    justify-content: stretch;
    align-items: center;
    padding-right: 40px;

    padding-top: 12px;
    padding-bottom: 12px;

    transform: translateY(-12px);

    /* visibility hidden initially */
    visibility: hidden;
    opacity: 0;
    transition: all 100ms ease-out;
}

.style-item:hover .slider {
    visibility: visible;
    opacity: 1;
}


.style-item .data-slider {
    width: auto;
}

.style-item .data-label {
    justify-self: flex-end;
    position: relative;
}

.style-item .slider:hover .data-label::before {
    content: attr(data-hover-label);
    position: absolute;
    right: 0;
    top: 0;
    opacity: 1;
    background-color: black;
    color: rgb(255, 255, 255)
}

.style-item .slider:hover .data-label {
    color: transparent;
}


.style-item .slider.size {
    grid-column: 3 / 4;
}

.style-item .slider.leading {
    grid-column: 4 / 5;
}


/* =========== text container =========== */

.style-item .text-container {
    width: 100%;
    max-width: 100%;
    display: flex;
    padding: 10px 60px 10px 0;
    font-size: 32px;
}

.style-item .text {
    min-height: 40px;
    width: 100%;
    border: 0;
    outline: 0;
}



/* =========== RESPONSIVE NESS ============= */

@media screen and (max-width: 1278px) {
    .heading {
        padding: 0 20px;
    }

    .banner {
        padding: 0 20px;
    }

    .style-wrapper {
        padding: 0 20px;
    }

    .style-item .slider.leading {
        display: none;
    }

    .style-item .slider.size {
        grid-column: 5 / span 2;
    }
}


@media screen and (max-width: 1024px) {
    .heading .style-count {
        margin-bottom: 30px;
    }

    .banner {
        display: none;
    }

    .style-item .slider.size {
        display: none;
    }
}





</style>