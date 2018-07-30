<template>
    <div class="ToDoItem">
        <p class="ToDoItem-Text">{{todo.text}}</p>
        <div class="ToDoItem-Delete" @click="deleteItem(todo)">-</div>
    </div>
</template>

<script>
    export default {
        name: "to-do-item",
        props: ['todo'],
        methods: {
            deleteItem(todo) {
                this.$emit('delete', todo)
            }
        }
    }
</script>

<style>
    .ToDoItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ToDoItem-Text {
        width: 90%;
        background-color: white;
        border: 1px solid lightgrey;
        box-shadow: 1px 1px 1px lightgrey;
        padding: 12px;
        margin-right: 10px;
    }

    .ToDoItem-Delete {
        width: 20px;
        padding: 5px;
        height: 20px;
        cursor: pointer;
        background: #ff7373;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #c70202;
        color: white;
        font-size: 18px;
        margin-right: 5px;
    }

    .ToDoItem-Delete:hover {
        box-shadow: none;
        margin-top: 1px;
        margin-left: 1px;
    }
</style>