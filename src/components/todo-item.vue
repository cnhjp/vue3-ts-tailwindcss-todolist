<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useTodo } from "@/composables/useTodo";
export default defineComponent({
    props: {
        content: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },
    setup() {
        const { toggleTodoStatus, removeItem } = useTodo()
        return {
            toggleTodoStatus,
            removeItem,
        }
    }
})

</script>

<template>
    <div class="w-full wrapper flex items-center py-4 break-all">
        <input type="checkbox" @change="_ => toggleTodoStatus(id)" class="w-4 rounded-full" />
        <span class="flex-1 px-4 italic text-gray-400 line-through" v-if="completed">{{ content }}</span>
        <span class="flex-1 px-4" v-else>{{ content }}</span>
        <span
            @click="_ => removeItem(id)"
            class="remove w-4 h-4 bg-red-500 flex justify-center items-center"
        >X</span>
    </div>
</template>