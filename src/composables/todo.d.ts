export declare type TodoItem = {
    id: number,
    content: string,
    completed: boolean,
    tag?: string[]
}

export declare type TodoList = TodoItem[]