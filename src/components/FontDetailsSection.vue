<script setup>
import { ref } from 'vue';
import { details } from '../assets/data/selectedFont';
import LeftArrowIcon from './icons/LeftArrowIcon.vue';

const isStyleExpanded = ref(false)
const isLanguageExpanded = ref(false)



</script>



<template>

    <section class="section">
        <div class="tabpanel">
            <div class="tabs">
                <div class="tab">
                    Details
                </div>
            </div>

            <div class="panel">
                <div class="box">
                    <div class="left">
                        <h3> Specifications </h3>
                        <!-- font family -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> Family Name </div>
                                <div> {{ details.family }} </div>
                            </div>
                        </div>
                        <!-- designed by -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> Designed By </div>
                                <div>
                                    <a href="/"> {{ details.designed_by }} </a>
                                </div>
                            </div>
                        </div>
                        <!-- category -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> Category </div>
                                <div> {{ details.category }} </div>
                            </div>
                        </div>
                        <!-- available styles -->
                        <div class="item-wrapper">
                            <div class="item toggler" :class="{ expanded: isStyleExpanded }"
                                @click="isStyleExpanded = !isStyleExpanded">
                                <div class="propname"> available styles </div>
                                <div>
                                    <span> {{ details.styles.static }} Static </span>
                                    <span> {{ details.styles.variable }} variable </span>
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                            </div>
                            <!-- dropdown -->
                            <div class="dropdown" :class="{ expanded: isStyleExpanded }">
                                <div class="content">
                                    <div class="grid">
                                        <div class="grid-item"> Light </div>
                                        <div class="grid-item"> Light Italic </div>
                                        <div class="grid-item"> Regular </div>
                                        <div class="grid-item"> Italic </div>
                                        <div class="grid-item"> Medium </div>
                                        <div class="grid-item"> Medium Italic </div>
                                        <div class="grid-item"> Bold </div>
                                        <div class="grid-item"> Bold Italic </div>
                                        <div class="grid-item"> Black </div>
                                        <div class="grid-item"> Black Italic </div>
                                        <div class="grid-item"> Variable </div>
                                        <div class="grid-item"> Variable Italic </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- supported language -->
                        <div class="item-wrapper">
                            <div class="item toggler" :class="{ expanded: isLanguageExpanded }"
                                @click="isLanguageExpanded = !isLanguageExpanded">
                                <div class="propname"> supported languages </div>
                                <div>
                                    {{ details.supported_languages }}
                                </div>
                                <div class="icon">
                                    <LeftArrowIcon />
                                </div>
                            </div>
                        </div>
                        <!-- version -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> version </div>
                                <div>
                                    {{ details.version }}
                                </div>
                            </div>
                        </div>
                        <!-- fontshare debut -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> fontshare debut </div>
                                <div>
                                    {{ details.fontshare_debut }}
                                </div>
                            </div>
                        </div>
                        <!-- tags -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> tags / keywords </div>
                                <div>
                                    <span v-for="tag, index in details.tags"> {{ tag }}{{ details.tags.length - 1 ===
                                            index
                                            ? '' : ', '
                                    }} </span>
                                </div>
                            </div>
                        </div>
                        <!-- tags -->
                        <div class="item-wrapper">
                            <div class="item">
                                <div class="propname"> license </div>
                                <div>
                                    {{ details.license }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Part -->
                    <div class="right">
                        <h3> Story </h3>
                        <div class='story'>
                            Satoshi is a modernist sans serif typeface. Its design combines typically grotesk-style
                            letterforms, with some characters that are quite geometrically-designed. In terms of its
                            appearance, Satoshi was inspired by Modernism and Industrial-Era graphic and typographic
                            design. The family has five weights on offer, ranging from Light to Black. It is an
                            excellent choice for use in branding, editorial, and poster design. Satoshi’s lowercase ‘a’
                            and ‘g’ are double-storied; however, single-storied alternates are available, through an
                            OpenType feature. The fonts’ other OpenType features include 10 ligatures per font, as well
                            as alternate versions of the ‘G’ and ’t’. The default numeral style in each of the fonts is
                            proportional lining figures; three other styles of numbers are included, too. There are
                            tabular lining figures, as well as numerators and denominators for typesetting fractions.
                            The fonts’ lining figures have the same height as the uppercase letters. The lowercase’s
                            ascenders are drawn to be slightly taller than the common height of the capital letters and
                            numerals. Each Satoshi font contains ten directional-arrow glyphs, as well as six glyphs of
                            circles, squares, and triangles. There is also a peace sign in the character set, a
                            smiling-face emoji, a check mark, and two versions of the numbers one through nine, each
                            enclosed inside of differently-filled circles. Satoshi is the work of Deni Anggara, an
                            Indonesian designer based in Medan.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


</template>




<style scoped>
.section {
    margin-top: 90px;
    margin-bottom: 130px;
}

.section h3 {
    font-family: var(--font-bold);
    font-size: 16px;
    margin-bottom: 40px;
}

.tabpanel {
    padding: 0 40px;
}

.tabs {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    gap: 40px;
    margin-bottom: 50px;
}

.tab {
    font-size: 26px;
    font-family: var(--font-semiBold);
    color: rgb(100, 100, 100);
    cursor: pointer;

    padding: 20px;
    margin: -20px;
}

.tab:hover {
    color: white;
}

.box {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.left {
    padding-right: 40px;
}


/* ======= LEFT ======== */
.item {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
    border-top: 2px solid white;
    text-transform: capitalize;
    align-items: center;

    background-color: black;
}

.item .propname {
    font-family: var(--font-bold);
    padding-right: 20px;
}

.item a {
    color: white;
    text-decoration: underline;
    padding: 2px 8px;
    margin-left: -8px;
}

.icon {
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
}

.icon svg {
    transform: rotate(0deg);
    transform-origin: center center;
    transition: all 0.5s ease-out;
}

.item.toggler {
    cursor: pointer;
    transition: all 0.5s ease-out;
}

.item.toggler:hover {
    color: rgb(165, 165, 165);
}

.item.expanded .icon svg {
    transform: rotate(180deg) translateY(25%);
}


.dropdown {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
}

.dropdown .content {
    padding-top: 25px;
    padding-bottom: 40px;
    border-top: 2px solid rgb(32, 32, 32);
    background-color: black;
}

.dropdown .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 50%;
    gap: 10px;
}

.dropdown.expanded {
    max-height: 600px;
    overflow: visible;
}



/* ============ right ============ */
.right {
    padding-right: 140px;
}

.right h3 {
    margin-bottom: 30px;
}

.right .story {
    font-size: 16px;
    line-height: 1.5;
}




/* =========== RESPONSIVE-NESS =========== */
@media screen and (max-width: 1532px) {
    .right {
        padding-right: 0;
    }
}


@media screen and (max-width: 1278px) {
    .tabpanel {
        padding: 0 20px;
    }

    .dropdown .grid {
        margin-left: 0;
    }
}


@media screen and (max-width: 1024px) {
    .section {
        margin-bottom: 90px;
    }

    .box {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .tabs {
        margin-bottom: 40px;
    }

    .tab {
        font-size: 24px;
    }

    .left {
        padding-right: 0;
    }

    .left h3 {
        margin-bottom: 20px;
    }

    .right {
        margin-top: 40px;
    }

    .right h3 {
        margin-bottom: 20px;
    }

}
</style>