<script setup>


</script>




<template>
    <div class="page">
        
        <!-- main -->
        <main class="main">
            <div class="content">
                <div class='main-heading'> About Fontshare </div>
                <div class='main-content'>
                    Fontshare is a free fonts service launched by the Indian Type Foundry (ITF). It’s a growing
                    collection of professional grade fonts that are 100% free for personal and commercial use. Our
                    mission is to make high-quality and technically sound fonts accessible to everyone.
                    <br>
                    <br>
                    For a number of years, ITF has offered students, design institutions and other not-for-profit
                    organisations all of its commercial fonts for free. Between 2014-2016, it released several
                    open-source fonts, including the incredibly popular Poppins (which is used on millions of websites
                    across the globe), Khand, Rajdhani, Hind and Teko, to name just a few. It has also invested a large
                    proportion of its resources in developing fonts for languages that are rare or on the brink of
                    extinction, even though this is not commercially profitable.
                    <br>
                    <br>
                    The launch of Fontshare is an extension of this ideology, with an aim to go even further and help
                    brands and individuals who do not have the budget but still want access to beautiful typography.
                    Every fourth Latin font-family that ITF designs will be released through Fontshare and offered for
                    free.
                    <br>
                    <br>
                    Apart from ITF’s own fonts, Fontshare also distributes free fonts from the other publishers. We
                    identify-top notch open-source fonts, review their quality, fix any design or technical bugs and
                    publish their latest versions on Fontshare. We ensure that these fonts are of the same quality as
                    ITF’s own free fonts on offer.
                    <br>
                    <br>
                    Unlike playing russian roulette with many of the widely available free fonts online, you can access
                    all Fontshare fonts, which have undergone a thorough selection process and are free fonts of the
                    highest standard.
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
    }
}
</style>