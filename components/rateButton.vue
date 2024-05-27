<script setup>
import { useThemeStore, useStore } from '@/stores/store.js';

const props = defineProps(({
    rateValue: Number
}))

const store = useStore();
const rate = (nota) => {
    store.note = nota
}
</script>

<template>
    <button @click="rate(rateValue)" 
        class="bg-primaryBlueLight dark:bg-primaryBlueDark focus:bg-primaryBlueDark dark:focus:bg-primaryBlueLight 
        hover:brightness-90 dark:hover:brightness-125 w-10 h-10 rounded-full text-white">
        {{ rateValue }}
    </button>
</template>