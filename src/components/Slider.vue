<script setup>
import { ref, reactive, unref } from 'vue'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

const props = defineProps({
    value: Number,
    width: {
        type: Number,
        default: 100,
    },
    dotSize: {
        type: Number,
        default: 18,
    },
    railHeight: {
        type: Number,
        default: 2
    },
    processHeight: {
        type: Number,
        default: 2
    }
})

const emit = defineEmits(['update: sliderValue'])

const width = ref(props.width)
const height = ref(2)
const value = ref(props.value)
const railStyle = ref({ background: '#212121', maxWidth: '380px', width: '100%', height: props.railHeight + 'px' })
const dotStyle = ref({ background: 'black', border: '0', outline: '3px solid red' })
const processStyle = ref({ background: 'white', height: props.processHeight + 'px'})
const dotSize = ref(props.dotSize)

const dotActiveStyle = ref({ background: 'white', border: '0', outline: '3px solid red' })

</script>




<template>
    <VueSlider class="custom-slider" v-model="value" :min="50" :max="300" :contained="true" :height="height"
        :duration="0" tooltip="none" :railStyle="railStyle" :processStyle="processStyle" :dotStyle="dotStyle"
        :dotSize="dotSize" :dotActiveStyle="dotActiveStyle" @change="$emit('update: sliderValue', $event)">
        <template v-slot:dot="{ value, focus }">
            <div :class="['custom-dot', { focus }]"></div>
        </template>
    </VueSlider>
</template>





<style scoped>
.custom-slider {
    width: 100%;
    padding: 10px 0 !important;
    cursor: pointer;
}

.custom-dot {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 99em;
    background-color: black;
    outline: 0;
    border: 2px solid rgb(217, 217, 217);
    transition: all .3s;
}

.custom-dot:hover {
    background-color: rgb(255, 255, 255);
}

.custom-dot.focus {
    background-color: rgb(255, 255, 255);
}
</style>