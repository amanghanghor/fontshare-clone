<script setup>
import { ref, watchEffect } from 'vue'
import BackArrowIcon from '../components/icons/BackArrowIcon.vue'
import BackLongArrowIcon from '../components/icons/BackLongArrowIcon.vue'
import DownloadIcon from '../components/icons/DownloadIcon.vue'
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue'

const bannerRef = ref(null);

// detect when banner is pinned
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        console.log(entry.intersectionRatio)
        entry.target.classList.toggle('is-pinned', entry.intersectionRatio < 1);
    })
}, { threshold: [1] })

// watching banner
watchEffect(() => {
    if (bannerRef.value) {
        observer.observe(bannerRef.value)
    }
})



</script>








<!-- ============== HTML =========== -->
<template>
    <div class="banner grid" ref="bannerRef">
        <!-- backward -->
        <div class="grid-item backward">
            <span class="icon">
                <BackArrowIcon />
            </span>
            <span> Back to Fonts </span>
            <span> Go Back </span>
        </div>

        <!-- font family -->
        <div class="grid-item family">
            <div> Satoshi </div>
        </div>

        <!-- font info -->
        <div class="grid-item styles">
            <span> 10 styles </span>
            <span> Variable </span>
        </div>

        <!-- navigation -->
        <div class="grid-item nav">
            <div class="nav-item"> Styles </div>
            <div class="nav-item"> Glyphs </div>
            <div class="nav-item"> Layouts </div>
            <div class="nav-item"> Details </div>
            <div class="nav-item"> License </div>
        </div>

        <!-- download -->
        <div class="grid-item download">
            <span class="icon">
                <DownloadIcon />
            </span>
            <span> Download Family </span>
        </div>

        <!-- Selected Styles -->
        <div class="grid-item selected">
            <span>
                No styles selected
            </span>
            <span class="icon">
                <LeftArrowIcon />
            </span>
        </div>

    </div>
</template>








<!-- ============== CSS ============ -->
<style scoped>
.banner {
    position: sticky;
    top: -1px;
    left: 0;
    z-index: 100;
    height: 80px;
    padding: 0 40px;
    background-color: rgb(9, 9, 9);
    border-bottom: 1px solid rgb(131, 131, 131, 0.25);
}


.grid {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: 1fr 1fr;
    justify-content: center;
}

.grid-item {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    color: white;

    font-family: var(--font-regular);
    font-size: 16px;
    white-space: nowrap;
}


.icon {
    fill: white;
    display: flex;
    align-items: center;
}

/* backward */
.backward {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    padding: 0 40px;
    margin-left: -40px;
    border-right: 1px solid rgb(46, 46, 46);
    cursor: pointer;

    border-bottom: 1px solid transparent;
}

.banner.is-pinned .backward {
    display: none;
}

.backward:hover {
    border-bottom-color: white;
}

.backward span:nth-of-type(3) {
    display: none;
}


/* font name */
.family {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    display: none;
}

.banner.is-pinned .family {
    display: grid;
}

/* font style */
.styles {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    gap: 30px;
    padding-right: 30px;
    justify-content: flex-end;
    display: none;
    border-right: 1px solid rgb(52, 52, 52);
}

.banner.is-pinned .styles {
    display: grid;
}



/* navigation */
.nav {
    grid-column: 3 / span 4;
    grid-row: 1 / 3;
    justify-self: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
}

.nav-item {
    height: 100%;
    display: grid;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
}

.nav-item:hover {
    border-color: white;
}


/* Download */
.download {
    grid-column: 8;
    grid-row: 1 / 3;
    justify-content: center;
    gap: 20px;
    margin-right: -40px;
    margin-left: 20px;

    font-family: var(--font-semiBold);
    border-left: 1px solid rgb(40, 40, 40);
    border-bottom: 1px solid transparent;

    cursor: pointer;
}

.banner.is-pinned .download {
    display: none;
}

.download:hover {
    border-bottom-color: white;
}

/* selected styles */
.selected {
    grid-column: 7 / 9;
    grid-row: 1 / 3;
    justify-content: center;
    margin-right: -40px;
    display: none;
    border-left: 1px solid rgb(46, 46, 46);
    border-bottom: 1px solid transparent;

    color: white;
}

.selected:hover {
    border-bottom-color: white;
}

.selected.is-empty {
    border-bottom-color: transparent;
}


.banner.is-pinned .selected {
    display: grid;
}




@media screen and (max-width: 1532px) {
    .download .icon {
        display: none;
    }
}


@media screen and (max-width: 1400px) {

    .family,
    .styles {
        grid-column: 1 / span 2;
    }

    .family {
        grid-row: 1 / 2;
        align-items: flex-end;
        border-right: 1px solid rgb(58, 58, 58);
    }

    .styles {
        grid-row: 2 / 3;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        font-size: 12px;
    }

    .styles :nth-child(1) {
        grid-column: 2 / 3;
    }

    .styles :nth-child(2) {
        grid-column: 1 / 2;
    }

}


@media screen and (max-width: 1278px) {
    .banner {
        padding: 0 20px;
    }

    .backward span:nth-of-type(2) {
        display: none;
    }

    .backward span:nth-of-type(3) {
        display: flex;
    }

    .download {
        grid-column: 7 / span 2;
        margin-right: -20px;
        margin-left: calc(25% + 1.5rem);
    }
}

@media screen and (max-width: 1024px) {
    .banner {
        height: 120px;
        top: 60px;
        box-sizing: content-box;
        margin-top: calc(60px + 20px);
    }

    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .backward {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        border-right: 0;
    }

    .nav {
        justify-self: flex-end;
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .nav-item {
        justify-self: flex-end;
        margin: -10px;
        padding: 10px;
    }

    .nav-item:nth-child(3) {
        display: none;
    }

    .download {
        display: none;
    }

    .family {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: grid;
        align-items: center;
        border-right: 0;

        border-top: 1px solid rgb(37, 37, 37);
    }

    .styles {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        display: grid;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0;
        border-right: 0;
        font-size: 16px;

        border-top: 1px solid rgb(37, 37, 37);
    }

}


@media screen and (max-width: 578px) {
    .nav {
        gap: 10px;
    }
}


@media screen and (max-width: 460px) {
    .backward span:is(:nth-child(2), :nth-child(3) ){
        display: none;
    }
}



</style>