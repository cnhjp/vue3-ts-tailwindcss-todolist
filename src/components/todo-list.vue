<script setup lang="ts">
import TodoItem from './todo-item.vue'
import { useTodo } from '@/composables/useTodo';

const { getList, allCount, completedCount } = useTodo()
const list = getList()
</script>


<template>
    <div class="wrapper flex flex-col">
        <div>all: {{ allCount }}</div>
        <div>completed: {{ completedCount }}</div>
        <transition-group tag="ul" name="slide">
            <todo-item
                v-for="item in list"
                :key="item.id"
                :content="item.content"
                :id="item.id"
                :completed="item.completed"
            ></todo-item>
        </transition-group>
    </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 500ms ease-in;
}
.slide-enter-from {
    opacity: 0;
    transform: translateX(-50%);
}
.slide-leave-to {
    opacity: 0;
    transform: translateX(50%);
}
.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>