<template>
    <div :class="['sidebar', { 'is-collapsed': isCollapsed }]">
      <ul>
        <li v-for="item in menuItems" :key="item.name" :class="{ active: isActiveRoute(item.path) }">
          <RouterLink :to="item.path">
             <font-awesome-icon :icon="['fas', item.icon]" class="icon"/>
             <span v-if="!isCollapsed">{{ item.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps } from 'vue';
  import { useRoute } from 'vue-router';
  
  const props = defineProps<{ isCollapsed: boolean }>();
  const menuItems = ref([
    { name: 'Notes', icon: 'tachometer-alt',path:'/' },
    { name: 'Reminders', icon: 'cog' ,path:"/reminders"},
    { name: 'Trash', icon: 'user' ,path:"/trash"},
    { name: 'Edit labels', icon: 'envelope' ,path:"/edit-labels"},
  ]);

    const route = useRoute();
    const isActiveRoute = (path: string) => {
    return route.path === path;
    };
  </script>
  
<style scoped lang="scss">
.sidebar {
    transition: width 0.3s;
    background-color: white;
    color: var(--color);
    width: 28rem;
    overflow-y: auto;
    overflow-x: hidden;
    
    ul {
        margin-top: 2rem;
        list-style: none;
        padding: 0;
    }
    li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 1.3rem;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        
        a{
            width: 100%;
            display: flex;
            gap: 2rem;
            
            .icon{
                color: var(--color);
            }
            span{
                color: black;
                font-size: 1.45rem;
                font-weight: 500;
                color: rgb(32, 33, 36);
                overflow-wrap: break-word;
            }
        }
        &:hover{
            background-color: var(--bgColor);
        }
    }
    .active{
        background-color: rgb(254, 239, 195);
        &:hover{
            background-color: rgb(254, 239, 195);
        }
    }
}
.sidebar.is-collapsed {
  width: 5rem;
}
</style>
