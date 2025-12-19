<script>
    import { toDoStore } from '@/stores/todo';
    export default{
        data(){
            return{
                newTask:"", 
                newTaskStatus:"",
                newTaskDescription:"",
                view: false,
            }
        },
        computed:{
            todo() {
                return toDoStore();
            }
        },
        methods:{
            add(){
                if (this.newTask) {
                    this.todo.addItem({"task":this.newTask, "status":this.newTaskStatus, "description":this.newTaskDescription});
                    this.newTask = "";
                    this.newTaskStatus = "",
                    this.newTaskDescription = "",
                    this.view = false;
                }
                
            },
            viewCout(){
                this.view = true;
                this.todo.count();
            },
        },
    }
</script>

<template>
    
    <div class="form-style">
        <div>
            <h2>ToDo List</h2>
        </div>
        <div class="container">
            <div>
                <label>Task Name : </label>
                <input v-model="newTask" placeholder="Enter a task" required />
            </div>

            <div>
                <label>Task Status : </label>
                <input v-model="newTaskStatus" placeholder="Enter a status" required />
            </div>

            <div>
                <label>Task Description : </label>
                <input v-model="newTaskDescription" placeholder="Enter a description" required />
            </div>
        </div>


    <div class="buttons">
        <button @click="add">Add</button>
        <button @click="viewCout">view count</button>
    </div>
    <div v-if="view">Count : {{ this.todo.total }}</div>
    <div>Count : {{ this.todo.total }}</div>

    <ul>
        <li v-for="(item, index) in this.todo.items" :key="index">
            <label>Task :</label> {{  item.task }}
            <label>Status :</label> {{  item.status }}
            <label>Description :</label> {{  item.description }}

        <!-- {{ item }} -->
        </li>
    </ul>
    </div>
</template>

<style scoped>
    .form-style, .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin:20px;
        padding: 10px;
    }
    
    .container{
        border: 1px solid black;
        border-radius: 10px;
    }
    
    .buttons{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>