<template>
    <section class="flex flex-col w-11/12 md:w-4/5 m-0">
        <div class="p-4 flex items-center justify-between w-full">
            <p class="text-xl text-white">github searcher</p>
        </div>
        <div class="p-6 flex flex-col md:flex-row justify-between items-center bg-secondaryBlueLight dark:bg-secondaryBlueDark rounded-lg gap-4">
            <input type="text" v-model="inputText" @input="setStorage" 
            class="placeholder-white dark:placeholder-gray focus:outline-0 w-full md:w-4/5 text-white text-2lg bg-transparent border-b-2 border-btnBlueLight dark:border-btnBlueDark h-8 mb-4 md:mb-0" 
            placeholder="Search GitHub username...">
            <button v-on:click="searchUser" class="w-full md:w-1/5 text-white text-2lg bg-btnBlueLight dark:bg-btnBlueDark h-8 rounded-lg"> Search </button>
        </div>
    </section>
</template>

<script setup>
import { useStore } from '@/stores/store.js'

const store = useStore()

let inputText = ''

function setStorage(event) {
    inputText = event.target.value
}

function searchUser() {
    store.searchUser(inputText)
}
</script>


