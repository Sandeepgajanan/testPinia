import { defineStore } from "pinia";

export const toDoStore = defineStore('todo', {
    state:() =>({
        items:[],
        total:0,
    }),
    actions:{
        addItem(item){
            for (let i = 0; i < 10000; i++) {
                this.items.push(item);
            }
        },
        count(){
            this.total = this.items.length;
        },
       
    },
//     getters:{
//         total: (state) => state.items.length
//     }
})