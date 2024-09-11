<script setup>
import { inject } from "vue";

    let {toggleMenu} = inject('toggleMenu')
</script>

<template>
    <nav :class="{'nav-close' : toggleMenu===false}">
        <div class="logo">
            FINANCE PERSONNELLE
        </div>
        <div class="user">
            <img src="../assets/profile.png" alt="">
            <p>Traore Allassane</p>
        </div>
        <ul class="navbar">
            <li class="nav_link"><a href=""><router-link to="/">Tableau de Bord</router-link></a></li>
            <li class="nav_link"><a href=""><router-link to="/revenu">Revenu</router-link></a></li>
            <li class="nav_link"><a href=""><router-link to="/depense">Dépense</router-link></a></li>
            <li class="nav_link"><a href=""><router-link to="/budget">Budget</router-link></a></li>
            <li class="nav_link"><a href=""><router-link to="/investissement">Investissement</router-link></a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 18%;
    height: 100vh;
    background-color: #FFF;
    box-shadow: 0 7px 8px #E0E0E0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-close{
    margin-left: -100%;
}

.nav-open{
    margin-left: 0;
}

nav .logo {
    color: #3f70f5;
    font-size: 24px;
    padding: 20px 0 0 20px;
}

/*Utilisateur */
.user {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}

.user img{
    width: 50px;
    height: 50px;
}

.user p{
    color: #171717;
    font-size: 16px;
}

/*Menu */
nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: 20px;
}

nav ul li a {
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease;
}

nav ul li a:hover {
    color: #171717;
}
</style>
