<template>
<div>
    <div class="container">
        <AddTask @task-added="handleTaskAdded"/>
        <Task :tasks="tasks"/>
    </div>
</div>
</template>

<script setup lang="ts">
import AddTask from '../components/AddTask.vue';
import Task from '../components/Task.vue';
import { provide, ref } from 'vue';

const tasks = ref<CollapsedItem[]>([]);
interface CollapsedItem {
    id: number;
    title: string;
    desc: string;
    labels: string[];
    list: number;
}

const handleTaskAdded = (newTask: CollapsedItem) => {
  tasks.value.push(newTask);
  localStorage.setItem('collapsed', JSON.stringify(tasks.value));
  loadTasks();
};

const loadTasks = () => {
  const collapsedItem = localStorage.getItem('collapsed');
  tasks.value = collapsedItem ? JSON.parse(collapsedItem) : [];
};
provide('tasks',tasks.value);
loadTasks();
</script>

<style lang="scss" scoped>
    .container{
        width: 80%;
        margin: auto;
    }
</style>
