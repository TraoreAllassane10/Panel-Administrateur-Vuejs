<template>
    <Header />
    <Nav />
    <div class="content">
        <slot name="content" />
    </div>
    <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.content{
    position: absolute;
    top: 60px;
    left: 18%;
}
</style>