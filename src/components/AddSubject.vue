<template>
  <div class="add-subject container">
    <h2 class="center-align indigo-text"> ADD NEW SUBJECT </h2>
    <form>
        <div class="field title">
            <label for="title">Subject Title:</label>
            <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ta, index) in tasks" :key="index">
            <label for="task">Task:</label>
            <input type="text" name="task" v-model="tasks[index]">
            <i class="material-icons delete" @click="deleteTask(ta)">delete</i>
        </div>
        <div class="field add-task">
            <label for="add-task">Add a task:</label>
            <input type="text" name="add-task" @keydown.enter="addTask" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback">{{feedback}}</p>
            <br>
            <b-button type="is-dark" >ADD SUBJECT</b-button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
          title:null,
          another: null,
          tasks: [],
          feedback:null
        }
    },
    methods:{
        addTask(){
            if(this.another){
                this.tasks.push(this.another)
                this.another = null
                this.feedback = null
            }else{
                this.feedback = 'You must enter a value to add task'
            }
        },
        deleteTask(ta){
            this.tasks = this.tasks.filter(task =>{
                return ta != task
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-subject{
    margin-top:60px;
    padding:20px;
    max-width:800px;
}
.add-subject h2{
    font-size:2em;
    margin: 20px auto;
    
}
.add-subject .field{
    margin:20px auto;
}
.add-subject .delete{
    position:absolute;
    right:20px;
}
</style>
