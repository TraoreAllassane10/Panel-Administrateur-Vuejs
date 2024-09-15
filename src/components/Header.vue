<template>
    <div class="header" :class="{ 'header-full' : toggleMenu===false}">
        <div class="links">
            <button @click="changeToggleMenuValue"><i class="fa-solid fa-bars"></i></button>
            <a href="">Acceuil</a>
            <a href="">Contact</a>
        </div>
        <a href="">Profile</a>
    </div>
</template>

<script setup>
import { inject } from "vue";

let {toggleMenu, changeToggleMenuValue} = inject('toggleMenu')

</script>

<style scoped>
.header {
    background-color: #FFF;
    width: 84%;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 0;
    box-shadow: 7px 0px 8px #E0E0E0;
    margin-left: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.header-full{
    width: 100%; 
    margin-left: 0;
}

.header .links {
    display: flex;
    gap: 20px;
    padding: 50px;
    place-items: center;
}

.header .links button{
    background-color: transparent;
    font-size: 30px;
    border: none;
    cursor: pointer;
}

.header .links a, a{
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;
}

.header .links a:hover{
    color: #171717;
}

.header a{
    padding-right: 10px;
}
</style>