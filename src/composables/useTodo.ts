import { ref, Ref, computed, ComputedRef } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { TodoItem, TodoList } from './todo'

const todoList: Ref<TodoList> = ref(useLocalStorage('todolist', []))
const allCount: ComputedRef<number> = computed(() => todoList.value.length)
const completedCount: ComputedRef<number> = computed(() => todoList.value.filter(item => item.completed).length)

function addItem(content: string) {
    const item: TodoItem = {
        id: Math.random(),
        content: content,
        completed: false,
    }
    todoList.value.push(item)
}

function removeItem(id: number) {
    const idx = todoList.value.findIndex(item => item.id === id)
    if (idx === -1) return
    todoList.value.splice(idx, 1)
}

function toggleTodoStatus(id: number) {
    const item: TodoItem | undefined = todoList.value.find(item => item.id === id)
    if (item === undefined) return
    item.completed = !item.completed
}

function getList(): TodoItem[] {
    return todoList.value
}

export function useTodo() {
    return {
        addItem,
        removeItem,
        toggleTodoStatus,
        getList,
        allCount,
        completedCount,
    }
}