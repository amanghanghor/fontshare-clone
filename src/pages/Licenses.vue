<script setup>


</script>






<template>
    <div class="page">
        <!-- main -->
        <main class="main">
            <div class="content">
                <div class='main-heading'> Licenses </div>
                <div class='main-content'>
                    All Fontshare fonts are 100% free for personal and commercial use.
                    <br>
                    <br>
                    Currently there are two types of free fonts offered on Fontshare: “Closed Source” and “Open Source”.
                    Closed Source fonts are proprietary freeware designed, produced and owned by the parent company of
                    Fontshare, the Indian Type Foundry (ITF) and are governed by ITF’s Free Font License (FFL).
                    <br>
                    <br>
                    Closed Source fonts are exclusive to Fontshare, meaning you will not find them anywhere else online.
                    <br>
                    <br>
                    Open Source fonts, on the other hand, are the property of their respective designers and publishers,
                    and are governed by SIL Open Font License (OFL). We identify top-notch open source fonts, review
                    their quality, fix any design or technical bugs, and host their latest files on Fontshare, so you
                    don’t have to go anywhere else. All Fontshare fonts, whether they are Closed or Open Source, are
                    free fonts of the highest standard. Although Fontshare fonts are 100% free and can be used in any
                    media, at any scale, at any location worldwide, we’d still recommend you to go through their
                    licenses carefully.
                    <br>
                    <br>
                    Below are the license terms for both “Closed Source” and “Open Source” fonts. Before accessing,
                    downloading, sharing or using any of the fonts from this website, you must agree to the terms
                    specified in each license:
                </div>
            </div>
        </main>

    </div>
</template>





<style scoped>
.page {
    width: 100%;
}

.main {
    padding-top: 100px;
}

.content {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0 40px;
}

.main-heading {
    font-size: 120px;
    font-family: var(--font-semiBold);
    padding-right: 40px;
    grid-column: 1 / span 4;
    line-height: 0.9;
}

.main-content {
    grid-column: 5 / span all;
    font-size: 32px;
    line-height: 1.35;
}


/* ============ RESPONSIVENESS =========== */

@media screen and (max-width: 1350px) {
    .main-heading {
        font-size: 80px;
    }
}


@media screen and (max-width: 1278px) {
    .content {
        padding: 0 20px;
    }
    .main-content {
        font-size: 24px;
        line-height: 1.25;
    }
}


@media screen and (max-width: 1024px) {
    .main {
        padding-top: 60px;
    }
    .content {
        grid-template-columns: repeat(1, 1fr);
    }
    .main-heading {
        margin: 40px 0;
        grid-column: 1 / span all;
        font-size: 48px;
        line-height: 1;
    }
    .main-content {
        grid-column: 1 / span all;
        font-size: 16px;
        margin-top: 20px;
    }
}



</style>