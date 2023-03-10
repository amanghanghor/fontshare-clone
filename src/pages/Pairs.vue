<script setup>
import PairsBanner from '../components/PairsBanner.vue'
import PairsTopbar from '../components/PairsTopbar.vue'
import OptionsDialog from '../components/OptionsDialog.vue';
import PageUp from '../components/PageUp.vue';
import StartFillIcon from '../components/icons/StartFillIcon.vue'
import { pairs } from '../assets/data/pairs.js'



</script>




<template>
    <div class="page">
        <OptionsDialog />

        <PageUp />

        <div class="main">
            <!-- pairs banner -->
            <PairsBanner />

            <!-- topbar -->
            <PairsTopbar />

            <!-- pairs -->
            <div class="pairs">
                <div class="grid">
                    <div class="grid-item" v-for="{ headline_font, body_font, headline_text, body_text } in pairs">
                        <div class="pair">
                            <div class="topbar">
                                <div class="font-pair">
                                    <a href="" target="_blank">
                                        <span> {{ headline_font.family }} </span>
                                        <span> {{ headline_font.style }} </span>
                                    </a>
                                    <span class="separator"> + </span>
                                    <a href="" target="_blank">
                                        <span> {{ body_font.family }} </span>
                                        <span> {{ body_font.style }} </span>
                                    </a>
                                </div>
                                <div class="icon">
                                    <StartFillIcon />
                                </div>
                            </div>

                            <div class="headline" contenteditable="true">
                                {{ headline_text }}
                            </div>

                            <div class="body" contenteditable="true">
                                {{ body_text }}
                            </div>

                            <div class="footer">
                                <span class="click-here"> Click to edit text </span>
                                <div class="btn"> Apply to All </div>
                                <div class="btn">
                                    <span> + </span> Add Styles
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>





<style scoped>
.page {
    width: 100%;
}

.main {
    margin-top: 60px;
}

.pairs {
    display: flex;
    flex-direction: column;
    margin: 0 var(--padding-layout);
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-content: flex-start;
}

.grid-item {
    padding: 40px;
    border: 1px solid rgb(35, 35, 35);
}

.grid-item:hover,
.grid-item:focus-within {
    border-color: white;
}

.pair {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
}

.pair .topbar {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pair .font-pair {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    font-size: 12px;
}

.pair .separator {
    margin: 0 5px;
    font-family: var(--font-bold);
}

.pair a {
    color: white;
    white-space: nowrap;
    padding: 10px;
    margin: -10px;
}

.pair a span:first-child {
    font-family: var(--font-bold);
}

.pair a:hover span:first-child {
    text-decoration: underline;
    text-decoration-thickness: 0.1px;
    text-decoration-color: rgb(187, 187, 187);
    text-underline-offset: 2px;
}


.pair .icon {
    padding: 10px;
    margin: -10px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.pair .icon svg {
    height: 12px;
    width: 12px;
    stroke: rgb(78, 78, 78);
}

.pair .icon:hover svg {
    stroke: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
}


.pair :is(.headline, .body) {
    border: 0;
    outline: 0;
}

.pair .headline {
    font-family: var(--font-semiBold);
    font-size: 40px;
    line-height: 1.1;
    margin-top: 40px;
}

.pair .body {
    min-height: 200px;
    font-size: 16px;
    line-height: 1.3;
    margin: 20px 0;
}

.pair .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.pair .click-here {
    font-size: 12px;
    color: rgb(59, 59, 59);
    opacity: 1;
    transition: all 0.15s ease-out;
}

.pair:focus-within .click-here {
    position: absolute;
    visibility: hidden;
    opacity: 0;
}

.pair .btn {
    font-family: var(--font-bold);
    font-size: 14px;
    padding: 20px;
    margin: -20px;
    cursor: pointer;

    visibility: hidden;
    transition: all 0.15s ease-out;
}

.pair:focus-within .btn {
    visibility: visible;
}

.grid-item:hover .btn {
    visibility: visible;
}



.pair .btn:first-of-type {
    display: none;
}

.pair:focus-within .btn:first-of-type {
    display: block;
}






.pair .btn span {
    font-size: 16px;
}



@media screen and (max-width: 1532px) {
    .grid-item {
        padding: 20px;
    }

    .pair .headline {
        margin-top: 20px;
    }
}

@media screen and (max-width: 1278px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .pair .body {
        min-height: 100px !important;
    }
}


@media screen and (max-width: 1024px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .grid-item {
        border-left: 0;
        border-right: 0;
        padding-left: 0;
        padding-right: 0;
    }

    .pair .body {
        min-height: 100px !important;
    }
}
</style>