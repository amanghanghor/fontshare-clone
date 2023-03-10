<script setup>
import { ref } from 'vue'

const showq = ref(false);


</script>





<template>
    <div class="page">

        <!-- heading -->
        <header class="heading">
            <div class="title">
                FAQs
            </div>
        </header>

        <!-- banner -->
        <div class="banner">
            <div class="grid-item">
                <div> Last updated on 11 Dec 2021 </div>
            </div>
            <div class="grid-item nav">
                <div class="nav-item">
                    General
                </div>
                <div class="nav-item">
                    Usage
                </div>
                <div class="nav-item">
                    Technical
                </div>
                <div class="nav-item">
                    Privacy
                </div>
            </div>
            <a href="/" class="grid-item">
                fontshare@indiantypefoundry.com
            </a>
        </div>

        <!-- dropdown list  -->
        <div class="main">
            <div class="list-heading"> General </div>
            <div class="faq-list">

                <div class="faq-item">
                    <div class="que" @click="showq = !showq">
                        What is Fontshare?
                    </div>
                    <div class="ans" :class="{ show: showq }">
                        <div class="text">
                            Most free fonts that are available online are of a poor quality. We pride ourselves on the
                            tshare fonts means that you’re legally protected.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="que" @click="showq = !showq">
                        What is Fontshare?
                    </div>
                    <div class="ans" :class="{ show: showq }">
                        <div class="text">
                            Most free fonts that are available online are of a poor quality. We pride ourselves on the
                            tshare fonts means that you’re legally protected.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="que" @click="showq = !showq">
                        What is Fontshare?
                    </div>
                    <div class="ans" :class="{ show: showq }">
                        <div class="text">
                            Most free fonts that are available online are of a poor quality. We pride ourselves on the
                            tshare fonts means that you’re legally protected.
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
    display: flex;
    flex-direction: column;
}

.heading {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 80px var(--padding-layout);

}

.title {
    font-size: 120px;
    font-family: var(--font-semiBold);
    line-height: 0.9;
}

/* ======== Banner ======= */
.banner {
    height: 80px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 var(--padding-layout);
    border-top: 1px solid rgb(51, 51, 51);
    border-bottom: 1px solid rgb(26, 26, 26);

    margin-bottom: 50px;
}

.grid-item {
    font-size: 16px;
    color: white;
}

.grid-item:first-child {
    color: rgb(72, 72, 72);
    padding-right: 30px;
    justify-self: flex-start;
}

.grid-item:last-child {
    display: grid;
    align-items: center;
    height: 100%;
    justify-self: end;
    padding-left: 30px;
    padding-right: 40px;
    margin-right: -40px;
    border-left: 1px solid rgb(41, 41, 41);

    font-family: var(--font-bold);
}

.grid-item:last-child:hover {
    color: rgb(216, 216, 216);
}

.nav {
    width: 760px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.nav-item {
    height: 100%;
    padding: 0 20px;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    border-bottom: 1px solid transparent;
}

.nav-item:hover {
    border-color: white;
}



/* ======== main ========= */
.main {
    padding: 0 var(--padding-layout);
    margin-bottom: 100px;
}

.faq-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 200vh;
}

.faq-item {
    font-size: 32px;
    line-height: 1.35;
    border-top: 2px solid rgb(41, 41, 41);
    border-bottom: 2px solid rgb(41, 41, 41);

    transition: all 0.125s ease;
}

.faq-item:hover {
    border-color: white;
}

.que {
    height: 42px;
    box-sizing: content-box !important;
    padding: 40px 130px 40px 0;
    cursor: pointer;
}

.ans {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    transition: all 0.15s ease;
}

.ans.show {
    max-height: 500vh;
    opacity: 1;
}

.ans .text {
    grid-column: 2 / 3;
    padding-bottom: 100px;
    padding-right: 160px;
}






@media screen and (max-width: 1380px) {
    .nav {
        width: 600px;
    }

    .title {
        font-size: 80px;
    }
}


@media screen and (max-width: 1278px) {
    /* ....... */
}


@media screen and (max-width: 1150px) {
    .banner {
        justify-content: space-between;
    }

    .nav {
        width: 375px;
    }
}

@media screen and (max-width: 1024px) {
    .heading {
        padding: 20px;
        padding-top: 0;
        margin-top: var(--height-header);
    }

    .title {
        margin: 40px 0;
        padding-right: 40px;
        font-size: 48px;
        line-height: 48px;
    }

    .banner {
        display: none;
    }
}
</style>