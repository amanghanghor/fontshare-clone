<script setup>
import FontBanner from '../components/FontBanner.vue';
import FontGlyphsSection from '../components/FontGlyphsSection.vue';
import FontIntroSection from '../components/FontIntroSection.vue';
import FontMain from '../components/FontMain.vue';
import FontStylesSection from '../components/FontStylesSection.vue';
import FontDetailsSection from '../components/FontDetailsSection.vue'
import PageUp from '../components/PageUp.vue';


</script>






<template>
    <div class="page">
        <FontBanner />
        <FontIntroSection />
        <FontMain />
        <FontGlyphsSection />
        <FontDetailsSection />
        <PageUp />
    </div>
</template>





<style scoped>
.page {
    width: 100%;
}
</style>