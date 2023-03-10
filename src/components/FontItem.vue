<script setup>
import Slider from './Slider.vue';
import { fontStyles } from '../assets/data/fontInfo';
import StarFillIcon from '../components/icons/StartFillIcon.vue'
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue'

</script>



<template>
    <div class="wrapper">
        <div class="header">
            <div class="grid">
                <div class="grid-item">
                    <div class="item">
                        <span> Satoshi </span>
                    </div>
                    <div class="icon filled">
                        <StarFillIcon />
                    </div>
                </div>
                <div class="grid-item">
                    <div class="fs-dropdown">
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <div class="text">
                                    Variable
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                            </div>
                            <div class="dropdown-menu">
                                <div v-for="({ text }) in fontStyles" class="dropdown-item">
                                    <input type="checkbox" id="1" />
                                    <span> </span>
                                    <label for="1"> {{ text }} </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item controls">
                    <div class="control-item">
                        <div class="data-label"> Weight </div>
                        <div class="myslider">
                            <Slider :dotSize="12" :processHeight="2" />
                        </div>
                    </div>
                    <div class="control-item">
                        <div class="data-label"> Size </div>
                        <div class="myslider">
                            <Slider :dotSize="12" :processHeight="2" />
                        </div>
                    </div>
                    <div class="control-item">
                        <div class="data-label"> Leading </div>
                        <div class="myslider">
                            <Slider :dotSize="12" :processHeight="2" />
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="item"> 10 styles </div>
                    <div class="item"> Variable </div>
                </div>
                <div class="grid-item">
                    <div class="item">
                        Closed Source
                    </div>
                </div>
            </div>
        </div>
        <div class="text-container">
            <div class="text" contenteditable="true" spellcheck="false">
                Satoshi
            </div>
        </div>
        <div class="footer">
            <div class="grid">
                <div class="grid-item">
                    <div class="info">
                        <span> Designed </span> by Indian Type Foundry
                    </div>
                </div>
                <div class="grid-item">
                    <div class="item">
                        Click on the text to edit
                    </div>
                </div>
                <div class="grid-item">
                    <div class="item">
                        View family
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.wrapper {
    min-height: 352px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border: 1px solid rgb(255, 255, 255, 0.2);
}

.wrapper:hover {
    border: 1px solid white;
}

.header,
.footer {
    width: 100%;
}


.grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
}

.grid-item {
    height: 60px;
    display: grid;
    align-items: center;
    font-size: 12px;
    color: rgb(79, 79, 79);
}

.grid-item:first-of-type {
    padding-left: 40px;
}

.grid-item:last-of-type {
    margin-right: 40px;
    justify-content: flex-end;
}

.item {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 10px;
    margin: -10px;
    cursor: pointer;
}
.icon {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: -10px;
    cursor: pointer;
}


.header .grid-item:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-template-columns: repeat(2, minmax(min-content, max-content));
    gap: 5px;
}

.header .grid-item:nth-of-type(2) {
    grid-column: 2 / 3;
}

.header .grid-item.controls {
    grid-column: 3 / span 4;
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.header .control-item {
    display: flex;
    gap: 15px;
    padding-right: 40px;
}

.header .control-item .data-label {
    pointer-events: none;
}

.header .grid-item:nth-of-type(4) {
    grid-column: 7 / 8;
    grid-template-columns: repeat(2, minmax(0, max-content));
    gap: 20px;
}

.header .grid-item:last-of-type {
    grid-column: 8 / 9;
}

.header .grid-item:first-of-type .icon svg {
    height: 12px;
    width: 12px;
    stroke: white;
}

.header .grid-item .icon:hover svg {
    fill: rgb(255, 255, 255);
}


/* =========== Dropdown ============ */

.header .grid-item:nth-of-type(2) {
    justify-content: flex-start;
}


/* ============ 1new drop down ============ */
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

    padding: 0 15px;
    margin-left: calc(-20px);

    border-width: 1px;
    border-bottom-width: 0;
    border-style: solid;
    border-color: transparent;
}

.dropdown:hover .dropdown-toggle {
    border-color: rgb(38, 38, 38);
    color: white;
    background-color: rgb(0, 0, 0);
}

.dropdown-toggle .icon {
    display: flex;
    align-items: center;
}

.dropdown-menu {
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 0;
    display: none;
    /* display: grid; */
    justify-items: flex-start;
    padding: 0 15px 15px 15px;
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
    border-color: rgb(38, 38, 38);
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
    white-space: nowrap;
}

.dropdown-item span {
    height: 10px;
    width: 10px;
    border-radius: 99em;
    background-color: white;
    border: 2px solid rgb(255, 255, 255);
}


.dropdown-item span:hover {
    background-color: transparent;
    border: 2px solid rgb(86, 86, 86);
}


/* ========== drop down end */



.myslider {
    width: 100%;
}


/* =========== content editable field text =========== */
.text-container {
    flex-grow: 1;
    min-height: 100%;
    width: 100%;
    display: flex;
    padding-right: 60px;
}

.text-container .text {
    min-height: 100%;
    width: 100%;
    padding: 0 40px;
    border: 0;
    outline: 0;
    border: 1px solid rgb(10, 10, 10);

    font-size: 6rem;
}


/* =========== Footer  =========== */
.footer .grid-item:nth-of-type(1) {
    grid-column: 1 / 7;
    text-transform: capitalize;
}

.footer .grid-item:nth-of-type(2) {
    grid-column: 7 / 8;
}

.footer .grid-item:nth-of-type(3) {
    grid-column: 8 / 9;
}



@media screen and (max-width: 1278px) {
    .wrapper {
        padding: 0;
    }

    .grid-item:first-of-type {
        padding-left: 20px;
    }
    .grid-item:last-of-type {
        margin-right: 20px;
    }

    .header .grid-item:nth-of-type(2) {
        grid-column: 3 / 4;
    }

    .header .grid-item.controls {
        grid-template-columns: 100%;
        grid-column: 5 / 7;
    }
    .header .control-item:not(:first-child) {
        display: none;
    }


    .text-container .text {
        padding: 0 20px;
    }

}


@media screen and (max-width: 1024px) {
    .grid {
        grid-template-columns: auto max-content;
    }

    .grid-item:first-of-type {
        padding: 0;
    }

    .header .grid-item:nth-of-type(4) {
        grid-column: 2 / 3;
    }

    .header .grid-item:not(:nth-of-type(1), :nth-of-type(4)) {
        display: none;
    }

    .wrapper {
        padding-top: 0;
    }

    .wrapper,
    .wrapper:hover {
        border: 0;
        border-top: 1px solid rgb(255, 255, 255, 0.2);
    }

    .text-container {
        padding: 0;
    }

    .text-container .text {
        padding: 0 0;
    }



    /* ====== footer ====== */
    .footer .grid-item:nth-of-type(1) {
        grid-column: 1 / 2;
    }
    
    .footer .grid-item:nth-of-type(1) span {
        display: none;
    }

    .footer .grid-item:nth-of-type(2) {
        display: none;
    }

    .footer .grid-item:nth-of-type(3) {
        grid-column: 2 / 3;
    }


}
</style>