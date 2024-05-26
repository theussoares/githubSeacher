import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', {
    state: () => ({
      user: '',
      userNotFound: false,
      userData: {},
      newDate: '',
      note: 1
    }),
    actions: {
        date() {
            let dateUser = this.userData.created_at.slice(0,10)
            let day = dateUser.slice(8,10)
            let month = dateUser.slice(5,7)
            let year = dateUser.slice(0,4)
            this.newDate = day.replace(/0/,'') + "/" + month.replace(/0/,'') + "/" + year
    },
      searchUser(username) {
        this.user = username
        if(username !== ''){
          this.fechtUserData()
        }
      },
      async fechtUserData () {
        try {
            const response = await axios.get(`https://api.github.com/users/${this.user}`)
            this.userData = response.data
            await this.date()
        }catch (error) {
            this.userNotFound = true
            this.userData = {}
        }
      }
    } 
})

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
});