<template>
<div class="container">
    <div class="drop-zone" @dragover.prevent @drop="onDrop($event, 1)">
        <h2>List 1</h2>
        <div class="drag-el" v-for="item in listOne" :key="item.id" draggable="true" @dragstart="startDrag($event, item)">
            <Note :item="item" />
        </div>

    </div>
    <div class="drop-zone" @dragover.prevent @drop="onDrop($event, 2)">
        <h2>List 2</h2>
        <div class="drag-el" v-for="item in listTwo" :key="item.id" draggable="true" @dragstart="startDrag($event, item)">
            <Note :item="item" />
        </div>
    </div>
    <div class="drop-zone" @dragover.prevent @drop="onDrop($event, 3)">
        <h2>List 3</h2>
        <div class="drag-el" v-for="item in listThree" :key="item.id" draggable="true" @dragstart="startDrag($event, item)">
            <Note :item="item" />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    computed
} from 'vue';
import Note from './Note.vue';

interface CollapsedItem {
    id: number;
    title: string;
    desc: string;
    labels: string[];
    list: number;
}

export default defineComponent({
    components: {
        Note
    },
    props: {
        tasks: {
            type: Array as() => CollapsedItem[],
            required: true
        }
    },
    setup(props) {
        const listOne = computed(() => props.tasks.filter(item => item.list === 1));
        const listTwo = computed(() => props.tasks.filter(item => item.list === 2));
        const listThree = computed(() => props.tasks.filter(item => item.list === 3));

        const startDrag = (evt: DragEvent, item: CollapsedItem) => {
            evt.dataTransfer!.setData('itemID', item.id.toString());
            evt.dataTransfer!.effectAllowed = 'move';
        };

        const onDrop = (evt: DragEvent, list: number) => {
            const itemID = evt.dataTransfer!.getData('itemID');
            const item = props.tasks.find((item) => item.id.toString() === itemID);
            if (item && item.list !== list) {
                item.list = list;
                localStorage.setItem('collapsed', JSON.stringify(props.tasks));
            }
        };

        return {
            listOne,
            listTwo,
            listThree,
            startDrag,
            onDrop,
        };
    },
});
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 1rem;
    padding-left: 10rem;

    .drop-zone {
        background-color: #eee;
        margin-bottom: 1rem;
        padding: 1rem;
        width: 30%;
        min-height: 10rem;
    }

    .drag-el {
        background-color: #fff;
        margin-bottom: 1rem;
        user-select: none;
        cursor: grab;

    }

    .drag-el:active {
        cursor: grabbing;
    }
}
</style>
