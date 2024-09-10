<template>
<div class="container">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="main">
        <div class="sidebar">
            <SideBar :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />
        </div>
        <div :class="[`content`,{collapse:isCollapsed}]">
            <RouterView />
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style lang="scss" scoped>
.container {
    .main {
        display: flex;

        .sidebar {
            margin-top: 4rem;
            max-width: 28rem;
            position: fixed;
            z-index: 99;
        }

        .content {
            margin-top: 10rem;
            width: 100%;
            margin-left: 20rem;
            transition: 0.5s;
        }

        .content.collapse {
            margin-left: 10rem;
        }
    }
}
</style>
