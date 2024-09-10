<template>
<div class="container">
    <div class="note">
        <div :class="['close',{toggle:isCollapsed}]">
            <input type="text" placeholder="Title" v-model="title" required />
        </div>
        <input @click="toggleInput(true)" type="text" placeholder="Take a note..." v-model="desc" required />
        <div :class="['close',{toggle:isCollapsed}]">
            <div :class="['note-actions']">
                <font-awesome-icon icon="bell" class="note-action-icon" />
                <font-awesome-icon icon="user-plus" class="note-action-icon" />
                <font-awesome-icon icon="palette" class="note-action-icon" />
                <font-awesome-icon icon="image" class="note-action-icon" />
                <font-awesome-icon icon="archive" class="note-action-icon" />
                <font-awesome-icon icon="ellipsis-v" class="note-action-icon" />
                <span @click="addItem">OK</span>
                <span @click="toggleInput(false)">Close</span>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
const title = ref('');
const desc = ref('');
const isCollapsed = ref(false);
interface CollapsedItem {
    id: number;
    title: string;
    desc: string;
    labels: string[];
    list: number;
}
const emit = defineEmits<{ (e: 'task-added', newTask: CollapsedItem): void }>();
const toggleInput = (value: boolean) => {
    isCollapsed.value = value;
};
const getIdMax = (items: CollapsedItem[]) => {
    let max = -1;
    for (let i = 0; i < items.length; i++) {
        if (max < items[i].id) {
            max = items[i].id;
        }
    }
    return max + 1;
}
const collapsedItem = localStorage.getItem('collapsed');

const items = ref < CollapsedItem[] > (collapsedItem ? JSON.parse(collapsedItem) : []);
const addItem = () => {
    const newItem: CollapsedItem = {
        id: getIdMax(items.value),
        title: title.value,
        desc: desc.value,
        labels: ['cty', 'sce'],
        list: 1
    };
    emit('task-added', newItem)
    
    title.value = "";
    desc.value = "";

}

</script>

<style lang="scss" scoped>
.container {
    padding: 2rem 0;

    .note {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 0.1rem 0.2rem 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 1rem;
            font-size: 1.8rem;
            width: 90%;
            padding: 1.5rem;
        }

        .note-actions {
            margin-top: 1rem;
            transition: 0.5s;
            display: flex;
            gap: 2rem;
            align-items: center;

            .note-action-icon {
                margin-left: 1rem;
                font-size: 18px;
                color: #202124;
                cursor: pointer;
                padding: 1rem;
                cursor: pointer;
                border-radius: 50%;
                width: 1.5rem;
                height: 1.5rem;

                &:hover {
                    background-color: var(--bgColor);
                }
            }

            span {
                cursor: pointer;
            }
        }

        .close {
            display: none;
        }

    }

    .toggle {
        display: inline !important;
    }
}
</style>
