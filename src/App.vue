<script setup>
import LayoutDasboard from './Layouts/LayoutDashboard.vue'
</script>

<template>
  <LayoutDasboard>
    <template v-slot:content>
      <div class="container">
        <router-view></router-view>
      </div>
    </template>
  </LayoutDasboard>
</template>

<style scoped>
.container{
  padding: 20px;
}
</style>
