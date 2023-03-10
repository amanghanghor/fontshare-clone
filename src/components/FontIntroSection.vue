<script setup>
import StarFillIcon from '../components/icons/StartFillIcon.vue';

</script>






<template>
    <section class="section">
        <div class="grid">
            <h1 class="grid-item heading"> Satoshi </h1>
            <div class="grid-item name">
                <span> Satoshi </span>
                <span class="icon star">
                    <StarFillIcon />
                </span>
            </div>
            <div class="grid-item styles">
                <span> 10 styles </span>
                <span> variable </span>
            </div>
            <div class="grid-item designer">
                <div class="link">
                    <span> Designed By &nbsp; </span>
                    <span> Indian Type Foundry </span>
                </div>
            </div>
            <div class="grid-item license">
                <span> Closed Source </span>
            </div>
            <div class="grid-item download">
                <span> Download Family </span>
            </div>
        </div>
    </section>
</template>





<style scoped>
.section {
    width: 100%;
    min-height: 250px;
    height: auto;
    border-bottom: 1px solid rgb(65, 65, 65);
}

.grid {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: 80px auto minmax(80px, auto);
    padding: 0 40px;
}

.grid-item {
    display: grid;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
}

.heading {
    grid-column: 1 / span all;
    grid-row: 2 / 3;
    font-family: var(--font-regular);
    font-size: calc(((1vh + 1vw)/2) * 16);
    line-height: 1;
    font-weight: 100;
    padding-top: 0.15em;
    padding-bottom: 0.15em;
}

.name {
    grid-template-columns: repeat(2, minmax(0, auto));
}

.styles {
    grid-template-columns: repeat(2, minmax(0, auto));
    gap: 30px;
}

.designer {
    grid-column: 1 / span 4;
    grid-row: 3 / 4;
    border-right: 1px solid rgb(44, 44, 44);
}

.designer .link {
    display: flex;
}

.license {
    grid-row: 3 / 4;
    grid-column-start: 8;
    justify-self: flex-end;
}

.download {
    display: none;
    justify-self: flex-end;
}



.icon {
    display: flex;
    align-items: center;
    padding: 10px;
}

.icon svg {
    height: 12px;
    width: 12px;
    fill: transparent;
    stroke: white;
}

.icon:hover svg {
    fill: white;
}

.icon.star {
    cursor: pointer;
}


@media screen and (max-width: 1400px) {
    .styles {
        gap: 15px;
    }
}


@media screen and (max-width: 1278px) {
    .grid {
        padding: 0 20px;
    }
}

@media screen and (max-width: 1024px) {
    .grid {
        grid-template-columns: minmax(150px, auto) 1fr 1fr auto;
        padding: 20px;
    }

    .styles {

    }

    .heading {
        grid-column: 1 / span all;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    .designer {
        display: none;
    }

    .license {
        grid-column: 4 / 5;
    }
}



@media screen and (max-width: 850px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .styles {
        display: none;
    }
    .license {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: flex-start;
    }
    .name {
        display: none;
    }

    .download {
        display: grid;
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }

}

@media screen and (max-width: 460px) {
    .license {
        font-size: 12px;
    }
}






</style>