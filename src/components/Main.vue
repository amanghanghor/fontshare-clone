<script setup>
import HomeBanner from '../components/HomeBanner.vue'
import FontList from '../components/FontList.vue';
</script>







<template>
    <main class="main">
        <HomeBanner />
        <FontList />
    </main>
</template>






<style scoped>
.main {
    padding-top: 60px;
    padding-bottom: 40px;
}

@media screen and (max-width: 1024px) {
    .main {
        padding-top: calc(60px + 60px);
    }
}

</style>