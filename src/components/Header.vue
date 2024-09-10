<template>
<div class="container">
    <div class="logo">
        <font-awesome-icon icon="fa-solid fa-bars" class="icon" @click="$emit('toggle-sidebar')"/>
        <div class="main-logo">
            <img src="/src/assets/images/logo.png" />
            <RouterLink to="/">Keep</RouterLink>
        </div>
    </div>
    <div class="util">
        <div class="left">
            <font-awesome-icon icon="magnifying-glass" class="icon" />
            <input class="search" placeholder="Search" />
            <font-awesome-icon :icon="['fas', 'times']" class="icon-close"/>
        </div>
        <div class="right">
            <font-awesome-icon icon="fa-solid fa-rotate-right" class="icon" />
            <font-awesome-icon :icon="['fas', 'th-large']" class="icon" />
            <font-awesome-icon :icon="['fas', 'cog']" class="icon" />
        </div>
    </div>
    <div class="profile">
        <font-awesome-icon :icon="['fas', 'th']" class="icon" />
        <img src="/src/assets/images/avatar.jfif" />
    </div>
</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.container {
    height: 6.4rem;
    border-bottom: 0.01rem var(--color) solid;
    display: flex;
    justify-content: space-between;
    padding: 0 -2rem;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 999;
    .logo {
        min-width: 20rem;
        display: flex;
        gap: 1.5rem;
        align-items: center;
        padding-right: 3rem;

        .icon {
            font-size: 1.8rem;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
                background-color: #ececec;
            }
        }

        .main-logo {
            display: flex;
            gap: 1px;
            justify-content: center;
            align-items: center;

            img {
                width: 4rem;
                height: 4rem;
            }

            a {
                font-size: 2.5rem;
                color: var(--color);
                font-weight: 500;
            }
        }
    }

    .util {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem;

        .left {
            position: relative;
            min-width: 70%;
            align-items: center;
            display: block;

            .search {
                width: 100%;
                position: absolute;
                padding: 1.5rem ;
                z-index: 1;
                top: 0;
                left: 0;
                border-radius: 0.5rem;
                border-color: var(--bgColor);
                background-color: var(--bgColor);
                outline: none;
                padding-left: 4rem;

                &:focus {
                    box-shadow: 0 0.1rem 0.1rem 0 rgba(65, 69, 73, .3), 0 0.1rem 0.1rem 0.3rem rgba(65, 69, 73, .15);
                    background-color: white;
                    border-color: white;
                }
            }

            .icon {
                position: absolute;
                z-index: 2;
                top: 1.5rem;
                left: 1.5rem;
                font-size: 1.5rem;
                align-items: center;
            }
            .icon-close{
                position: absolute;
                z-index: 2;
                top: 1.5rem;
                right: -2rem;
                font-size: 1.5rem;
                align-items: center;
                cursor: pointer;
            }
        }

        .right {
            display: flex;
            gap: 3rem;
            font-size: 2rem;

            .icon {
                padding: 1rem;
                border-radius: 50%;
                cursor: pointer;

                &:hover {
                    background-color: #ececec;
                }
            }
        }
    }

    .profile {
        display: flex;
        gap: 3rem;
        padding-left: 3rem;
        align-items: center;

        .icon {
            font-size: 2.5rem;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                background-color: #ececec;
            }
        }

        img {
            cursor: pointer;
            width: 4.8rem;
            height: 4.8rem;
            border-radius: 50%;
            transform: scale(0.8);
        }
    }
}
</style>
