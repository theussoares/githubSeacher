<template>
    <section v-if="Object.keys(userData).length !== 0" class="flex flex-col md:flex-row justify-between gap-3 bg-secondaryBlueLight dark:bg-secondaryBlueDark p-6 md:p-10 rounded-lg w-11/12 md:w-4/5 mb-4 md:mb-1">
            <div>
                <img class="w-20 rounded-full" :src="userData.avatar_url" alt="Imagem de Perfil">
            </div>
            <div class="w-full md:w-4/5">
                <ul class="flex flex-col justify-even gap-6 md:gap-10">
                    <li class="flex flex-col md:flex-row justify-between gap-5">
                        <div class="flex flex-col gap-1">
                            <p class="text-xl text-white">{{ userData.name}}</p> 
                            <p class="text-sm text-additionalBlueLight dark:text-additionalBlueDark"> @{{ userData.login }}</p>
                            <p class="text-sm text-white dark:text-gray" v-if="userData.bio">{{ userData.bio }}</p>
                            <p class="text-sm text-white dark:text-gray" v-else>O usuário não possui biografia.</p>
                        </div>
                        <p class="text-base text-white">Desde <br> {{ newDate }}</p>
                    </li>
                    <li class="bg-primaryBlueLight dark:bg-primaryBlueDark flex justify-evenly items-center p-6 rounded-lg flex-wrap gap-5">
                        <div>
                            <p class="text-base text-white">Repos</p>
                            <p class="text-xs text-white">{{ userData.public_repos }}</p>
                        </div>
                        <div>
                            <p class="text-base text-white">Followers</p>
                            <p class="text-xs text-white">{{ userData.followers }}</p>
                        </div>
                        <div>
                            <p class="text-base text-white">Following</p> 
                            <p class="text-xs text-white">{{ userData.following }}</p>
                        </div>
                    </li>
                    <li class="flex gap-10 justify-end">
                        <div>
                            <img class="w-8 filter invert mb-1" :src="location" alt="location icon">
                            <p v-if="userData.location" class="text-sm text-white font-thin">{{ userData.location }}</p>
                            <p v-else class="text-sm text-white dark:text-gray">Localização não informarda</p>
                        </div>
                        <div>
                            <img class="w-8 filter invert mb-1" :src="company" alt="company icon">
                            <p v-if="userData.company" class="text-sm text-white font-thin">{{ userData.company }}</p>
                            <p v-else class="text-sm text-white dark:text-gray">O usuário não possui uma companhia.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>
    <section v-else-if="store.userNotFound" class="w-11/12 md:w-4/5 text-xl font-thin text-white flex justify-center items-center gap-3 secondaryBlueLight dark:bg-secondaryBlueDark p-10 rounded-lg h-96">User not found :(</section>
    <section v-else class="w-11/12 md:w-4/5 text-xl font-thin text-white flex justify-center items-center gap-3 bg-secondaryBlueLight dark:bg-secondaryBlueDark p-10 rounded-lg h-96">
        Please enter a user to searche.
    </section>
</template>

<script setup>
import location from './assets/location-pin-alt-1-svgrepo-com.svg'
import company from './assets/data-storage-database-server-svgrepo-com.svg'
import { useStore } from '@/stores/store.js'

    const store = useStore()
    const userData = computed(() => store.userData);
    const newDate = computed(() => store.newDate);
</script>
