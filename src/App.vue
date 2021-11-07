<script lang="ts" setup>
import TodoAdd from '@/components/todo-add.vue'
import todoList from './components/todo-list.vue';
</script>


<template>
  <div class="container w-full flex flex-col items-center pt-8 font-mono">
    <div class="title text-3xl font-bold">Easy Todo List</div>
    <todo-add class="mt-8 w-10/12 md:w-1/2 flex justify-center"></todo-add>
    <todo-list class="mt-8 w-11/12 md:w-2/3 flex justify-center"></todo-list>
  </div>
</template>