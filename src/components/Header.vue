<template>
    <div class="header" :class="{ 'header-full' : toggleMenu===false}">
        <div class="links">
            <button @click="changeToggleMenuValue">Toggle</button>
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
    width: 82%;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 0;
    box-shadow: 7px 0px 8px #E0E0E0;
    margin-left: 18%;
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