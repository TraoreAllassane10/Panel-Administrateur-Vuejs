import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router/index'

// Cette variable sera accessible partout dans l'app ainsi que sa fonction qui permettra de changer sa valeur
let toggleMenu = ref(true)
const changeToggleMenuValue = () => {
    toggleMenu.value = !toggleMenu.value
    console.log(toggleMenu.value)
}

createApp(App).use(router).provide('toggleMenu',{toggleMenu, changeToggleMenuValue}).mount('#app')
