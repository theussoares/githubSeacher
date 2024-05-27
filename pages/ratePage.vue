<script setup>
import { useThemeStore } from '@/stores/store.js';
import { submitFeedback } from '@/composables/feedbackService';

const themeStore = useThemeStore();
const rateBtns = [1, 2, 3, 4, 5]

</script>

<template>
    <div :class="{ 'dark': themeStore.isDarkMode }">
        <div class="bg-primaryBlueLight dark:bg-primaryBlueDark min-h-screen flex justify-center items-center w-full">
            <div class="flex flex-col justify-between p-10 w-4/5 bg-secondaryBlueLight dark:bg-secondaryBlueDark md:w-2/5 rounded-xl">
                <div class="bg-primaryBlueLight dark:bg-primaryBlueDark w-10 h-10 flex justify-center items-center rounded-full">
                    <svg height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 47.94 47.94" xml:space="preserve">
                        <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                        C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                    </svg>
                </div>
                <div class="flex flex-col gap-2 mt-1">
                    <h1 class="text-white font-medium text-xl">
                        How was It?
                    </h1>
                    <p class="text-black dark:text-gray text-sm">
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering!
                    </p>
                </div>
                <div class="flex justify-between mt-5">
                    <div v-for="rateBtn in rateBtns">
                        <RateButton  :rateValue="rateBtn"/>
                    </div>
                </div>
                <NuxtLink @click="submitFeedback(store.note)" to="/ratedPage" class="bg-primaryBlueLight dark:bg-primaryBlueDark hover:brightness-90 dark:hover:brightness-125 w-full h-10 rounded-3xl mt-5 text-white flex items-center justify-center">SUBMIT</NuxtLink>
            </div>
        </div>
    </div>
</template>