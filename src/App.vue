<script lang="ts" setup>
import TodoAdd from '@/components/todo-add.vue'
import todoList from './components/todo-list.vue';
import { ref, Ref, watch } from 'vue-demi';
import { useLocalStorage } from '@vueuse/core';

const container: Ref<HTMLElement | null> = ref(document.documentElement)

const isDarkMode: Ref<boolean> = useLocalStorage('dark-mode', false) as Ref<boolean>
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
watch(() => isDarkMode.value, (isDark: boolean) => {
  if (isDark) {
    container.value?.classList.add('dark')
  } else {
    container.value?.classList.remove('dark')
  }
}, {
  immediate: true,
})

</script>


<template>
  <div
    class="container h-screen overflow-y-scroll w-full flex flex-col items-center pt-8 font-mono dark:bg-gray-400"
  >
    <button @click="toggleDarkMode">toggle dark/light mode</button>
    <div class="title text-3xl font-bold">Easy Todo List</div>
    <todo-add class="mt-8 w-10/12 md:w-1/2 flex justify-center"></todo-add>
    <todo-list class="mt-8 w-11/12 md:w-2/3 flex justify-center"></todo-list>
  </div>
</template>