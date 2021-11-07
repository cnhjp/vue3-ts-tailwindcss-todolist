<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { useTodo } from '@/composables/useTodo';

const content = ref('')
const { addItem } = useTodo();

const add = () => {
    if (content.value.trim() === '') return
    addItem(content.value)
    content.value = ''
}


</script>

<template>
    <div class="wrapper">
        <input
            type="text"
            placeholder="Please input your todo."
            v-model="content"
            @keyup.enter="add"
            class="w-full shadow-inner py-4 pl-8 pr-4 italic focus:border-green-400"
        />
    </div>
</template>