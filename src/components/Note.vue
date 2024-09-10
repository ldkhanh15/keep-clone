<template>
<div class="keep-note">
    <div class="note-header">
        <h3 class="note-title">{{ item.title }}</h3>
        <font-awesome-icon icon="bell" class="note-icon" />
    </div>
    <p class="note-description">{{ item.desc }}</p>
    <div class="note-labels">
        <span v-for="label in item.labels" :key="label" class="note-label">
            {{ label }}
            <span @click="handleDelete(label)"><font-awesome-icon icon="times" class="del"/></span>
        </span>
    </div>
    <div class="note-actions">
        <font-awesome-icon icon="bell" class="note-action-icon" />
        <font-awesome-icon icon="user-plus" class="note-action-icon" />
        <font-awesome-icon icon="palette" class="note-action-icon" />
        <font-awesome-icon icon="image" class="note-action-icon" />
        <font-awesome-icon icon="archive" class="note-action-icon" />
        <font-awesome-icon icon="ellipsis-v" class="note-action-icon" />
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    inject,
    PropType
} from 'vue';

interface CollapsedItem {
    id: number;
    title: string;
    desc: string;
    labels: string[];
    list: number;
}

export default defineComponent({
    props: {
        item: {
            type: Object as PropType < CollapsedItem > ,
            required: true
        }
    },
    setup(props) {
        const {
            item
        } = props;
        const data=inject('tasks')
        console.log(data);
        
        
        const handleDelete=(label:string)=>{
            console.log(label);
            
        }
        return {
            item,
            handleDelete
        };
    }
});
</script>

<style lang="scss" scoped>
.keep-note {
    border-radius: 0.8rem;
    border: 0.1rem solid #e0e0e0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12);

    .note-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .note-title {
            flex-grow: 1;
            font-size: 1.6rem;
            font-weight: 500;
            margin: 0;
            padding: 0;
        }

        .note-icon {
            font-size: 1.8rem;
            color: #202124;
            opacity: 0;
            transition: 0.5s;
        }
    }

    .note-description {
        font-size: 1.4rem;
        color: #5f6368;
        margin: 10px 0;
    }

    .note-labels {
        display: flex;
        gap: 0.8rem;
        text-align: center;
        align-items: center;
        cursor: pointer;
        transition: 0.5s;

        .note-label {
            background-color: #f1f3f4;
            color: #5f6368;
            padding: 0.4rem 0.8rem;
            border-radius: 1.2rem;
            font-size: 1.2rem;

            &:hover {
                .del {
                    display: inline;
                }
            }
        }

        .del {
            display: none;
            transition: 0.5s;
        }

    }

    .note-actions {
        display: flex;
        margin-top: 1rem;
        transition: 0.5s;
        opacity: 0;

        .note-action-icon {
            font-size: 1.8rem;
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
    }

    &:hover {
        box-shadow: 0 0.1rem 0.2rem 0 rgba(60, 64, 67, 0.3), 0 0.1rem 0.3rem 0.1rem rgba(60, 64, 67, 0.15);

        .note-actions {
            opacity: 1;
        }

        .note-header {
            .note-icon {
                opacity: 1;
            }
        }
    }
}
</style>
