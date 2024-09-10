<template>
    <div class="container">
        <Header/>
        <div class="main">
            <RouterView/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Header from '../components/Header.vue';
</script>
<style lang="scss" scoped>
    .container{
        .main{
            padding-top: 6.5rem;
        }
    }
</style>