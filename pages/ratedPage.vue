<script setup>
import { useThemeStore,useStore } from '@/stores/store.js';
import { onMounted, ref } from "vue";

const themeStore = useThemeStore();
const store = useStore()

</script>

<template>
<div :class="{ 'dark': themeStore.isDarkMode }">
    <div class="bg-primaryBlueLight dark:bg-primaryBlueDark min-h-screen flex justify-center items-center w-full">
        <div class="flex flex-col items-center gap-5 p-10 w-4/5 bg-secondaryBlueLight dark:bg-secondaryBlueDark md:w-3/6  rounded-xl">
            <div class="flex flex-col gap-5">
                <div>
                    <img class="w-42" src="https://tiago-henriquem.github.io/interactive-rating/assets/illustration-thank-you.svg" 
                    alt="feedback recived">
                </div>
                <span class="text-sm bg-primaryBlueDark dark:bg-primaryBlueLight p-2 h-7 rounded-3xl flex items-center 
                        justify-center text-secondaryBlueLight dark:text-primaryBlueDark brightness-125">
                    You selected {{ store.note }} out of 5</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <h2 class="text-xl font-bold text-primaryBlueDark dark:text-white">
                    Thank you!
                </h2>
                <p class="text-center dark:text-gray text-black">
                    We appreciate you taking the time to give a rating. 
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
            </div> 
    </div>
</div>
   
</template>