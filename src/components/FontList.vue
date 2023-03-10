<script setup>
import { ref } from 'vue';
import FontItem from './FontItem.vue';

const totalFonts = ref(100);


</script>





<template>
    <div class="list-wrapper">
        <div class="topbar">
            <div class="grid">
                <!-- total -->
                <div class="grid-item total">
                    <div class="item total">
                        {{ totalFonts }}
                    </div>
                </div>
                <!-- view -->
                <div class="grid-item view">
                    <div class="item total"> {{ totalFonts }} </div>
                    <div class="item"> List view </div>
                    <div class="item"> Grid view </div>
                </div>
                <!-- filter 1 -->
                <div class="grid-item filter-1">
                    <div class="item"> Top 20 </div>
                    <div class="item"> Hot 20 </div>
                    <div class="item"> Variable </div>
                </div>
                <!-- filter 2 -->
                <div class="grid-item">
                    <div class="item"> Fontshare Originals </div>
                    <div class="item"> Shortlisted </div>
                </div>
                <!-- sort by -->
                <div class="grid-item">
                    <div class="item"> Sort by </div>
                    <div class="item separator"> </div>
                    <div class="item"> New </div>
                    <div class="item"> Popular </div>
                    <div class="item"> Hot </div>
                    <div class="item"> Alphabetical </div>
                </div>
            </div>
        </div>
        <div class="list">
            <FontItem />
            <FontItem />
            <FontItem />
        </div>
    </div>
</template>





<style scoped>
.list-wrapper {
    display: flex;
    flex-direction: column;
}

.topbar {
    margin: 100px 40px 40px 40px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

}

.grid-item {
    display: grid;
    gap: 20px;
    align-items: center;
    font-family: var(--font-regular);
    font-size: 12px;
    line-height: 14px;
    color: #606060;
    white-space: nowrap;
}

.grid-item .item {
    padding: 10px;
    margin: -10px;
    cursor: pointer;
}

.grid-item .item:hover {
    color: rgb(255, 255, 255);
}

.grid-item.total,
.grid-item .total {
    font-family: var(--font-semiBold);
    font-size: 24px;
    line-height: 29px;
    color: white;
}

.grid-item:nth-of-type(1) {
    grid-template-columns: 1;
}

.grid-item:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
}

.grid-item:nth-of-type(3) {
    grid-column: 3 / 4;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
}

.grid-item:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-template-columns: repeat(2, minmax(min-content, max-content));
}

.grid-item:nth-of-type(5) {
    grid-column: 7 / span 2;
    grid-template-columns: repeat(6, minmax(min-content, max-content));
    justify-content: flex-end;
}

.grid-item:nth-of-type(5) .separator {
    padding: 0;
    margin: 0;
    height: 1px;
    background-color: gray;
}


.list {
    display: flex;
    flex-direction: column;
    margin: 0 40px;
}



@media screen and (max-width: 1532px) {
    .grid-item:nth-of-type(1) {
        display: none;
    }

    .grid-item:nth-of-type(2) {
        grid-column: 1 / 2;
    }
}


@media screen and (max-width: 1278px) {
    .topbar {
        margin: 100px 20px 40px 20px;
    }

    .list {
        margin: 0 20px;
    }

    .grid-item:nth-of-type(5) {
        grid-template-columns: repeat(4, minmax(min-content, max-content));
    }

    .grid-item:nth-of-type(5) :is(:nth-child(1), :nth-child(2)) {
        display: none;
    }
}

@media screen and (max-width: 1080px) {
    .grid-item:nth-of-type(3) :last-child {
        display: none;
    }
}

@media screen and (max-width: 1024px) {
    .topbar {
        padding-bottom: 20px;
        margin: 20px;
    }

    .grid {
        grid-template-columns: repeat(2, auto);
    }

    .grid-item {
        display: none;
    }

    .grid-item:is(:first-child, :last-child) {
        display: grid;
    }

    .grid-item:first-child {
        grid-column: 1 / 2;
    }

    .grid-item:last-child {
        grid-column: 2 / 3;
    }
}


@media screen and (max-width: 360px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-item:last-of-type {
        grid-column: 1 / span all;
        grid-row: 2 / 3;
        justify-content: flex-start;
        margin-top: 10px;
    }

}
</style>