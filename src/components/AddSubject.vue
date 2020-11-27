<template>
  <div class="add-subject container">
    <h2 class="center-align indigo-text"> Add New Subject </h2>
    <form @submit.prevent="AddSubject">
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
            <label for="add-task">Add a task: </label>
            <input type="text" name="add-task"  placeholder="Press tab to add a task or add more tasks" @keydown.tab.prevent="addTask" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback">{{feedback}}</p>
            <br>
            <button class="btn black">Add Subject</button>
        </div>
    </form>
  </div>
</template>

<script>

import db from './firebaseinit'
import slugify from 'slugify'

export default {
    name: 'AddSubject',
    data(){
        return{
          title:null,
          another: null,
          tasks: [],
          feedback:null,
          slug: null
        }
    },
    methods:{
        AddSubject(){
            if(this.title){
                this.feedback = null
                //create a slug
                this.slug = slugify(this.title, {
                    replacment:'-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('subjects').add({
                    title: this.title,
                    tasks: this.tasks,
                    slug: this.slug
                }).then(() => {
                    this.$router.push({ name: 'Index'})
                }).catch(err => {
                    console.log(err)
                })
            }else{
               this.feedback = 'You must enter a subject title'
            }
        },
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
    cursor:pointer;
}
</style>
