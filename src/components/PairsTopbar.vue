<script setup>
import {ref} from 'vue'

const totalFonts = ref(59)


</script>




<template>
    <div class="topbar">
        <div class="grid">
            <!-- total -->
            <div class="grid-item total">
                <div class="item total">
                    {{ totalFonts }}
                </div>
            </div>
            <!-- filter 2 -->
            <div class="grid-item sortlist">
                <div class="item"> Shortlisted </div>
            </div>
            <!-- sort by -->
            <div class="grid-item sortby">
                <div class="item"> Sort by </div>
                <div class="item separator"> </div>
                <div class="item"> New </div>
                <div class="item"> Popular </div>
                <div class="item"> Hot </div>
            </div>
        </div>
    </div>
</template>






<style scoped>

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

.grid-item.total {
    grid-template-columns: 1;
}

.grid-item.sortlist {
    grid-column: 5 / span 1;
}

.grid-item.sortby {
    grid-column: 7 / span 2 ;
    display: grid;
    grid-template-columns: repeat(5, min-content) ;
    gap: 20px;
    justify-self: flex-end;
}



.grid-item .separator {
    padding: 0;
    margin: 0;
    height: 1px;
    background-color: gray;
    width: 100%;
}


@media screen and (max-width: 1532px) {

}


@media screen and (max-width: 1278px) {
    .topbar {
        margin: 100px 20px 40px 20px;
    }

    .grid-item.sortby {
        grid-template-columns: repeat(3, min-content);
    }
    .grid-item.sortby :is(:nth-child(1), :nth-child(2)) {
        display: none;
    }

}

@media screen and (max-width: 1080px) {

}

@media screen and (max-width: 1024px) {
    .topbar {
       margin: calc(var(--height-header) + 80px) 20px 20px 20px;
    }

    .grid {
        grid-template-columns: repeat(2, auto);
    }

    .grid-item.sortlist {
        display: none;
    }
    .grid-item.sortby {
        grid-column: 2 / span 1;
    }
}


@media screen and (max-width: 360px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
        grid-row: repeat(2, auto);
    }
    .grid-item.sortby {
        grid-column: 1 / span all;
        grid-row: 2 / 3;
        justify-self: flex-start;
        margin-top: 10px;
    }


}
</style>