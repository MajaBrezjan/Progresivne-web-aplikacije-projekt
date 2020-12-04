<template>
  <div v-if="subject" class="edit-subject container">
    <h2 class="center-align subject-text"> Edit {{ subject.title }}  </h2>
    <form @submit.prevent="EditSubject">
        <div class="field title">
            <label for="title">Subject Title:</label>
            <input type="text" name="title" v-model="subject.title">
        </div>
        <div v-for="(ta, index) in subject.tasks" :key="index">
            <label for="task">Task:</label>
            <input type="text" name="task" v-model="subject.tasks[index]">
            <i class="material-icons delete" @click="deleteTask(ta)">delete</i>
        </div>
        <div class="field add-task">
            <label for="add-task">Add a task:  </label>
            <input type="text" name="add-task" v-model="another">
            <i class="material-icons add" @click="addTask">add</i>
        </div>
        <div class="field center-align">
            <p v-if="feedback">{{feedback}}</p>
            <br>
            <button class="btn">Update Subject</button>
        </div>
    </form>
  </div>
</template>

<script>

import db from './firebaseinit'
import slugify from 'slugify'

export default {
    name: 'EditSubject',
    data(){
        return{
            subject: null,
            another: null,
            fedback:null
        }
    },
    methods: {
        addTask(){
            if(this.another){
                this.subject.tasks.push(this.another)
                this.another = null
                this.feedback = null
            }else{
                this.feedback = 'You must enter a value to add task'
            }
        },
        deleteTask(ta){
            this.subject.tasks = this.subject.tasks.filter(task => {
                return ta != task
            })
        },
        EditSubject(){
            if(this.subject.title){
                this.feedback = null
                //create a slug
                this.subject.slug = slugify(this.subject.title, {
                    replacment:'-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('subjects').doc(this.subject.id).update({
                    title: this.subject.title,
                    tasks: this.subject.tasks,
                    slug: this.subject.slug
                }).then(() => {
                    this.$router.push({ name: 'Index'})
                }).catch(err => {
                    console.log(err)
                })
            }else{
               this.feedback = 'You must enter a subject title'
            }
        }
    },
    created(){
        let ref = db.collection('subjects').where('slug', '==', this.$route.params.subject_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.subject = doc.data()
                this.subject.id = doc.id
            })
        })
    }
}
</script>

<style scoped>
.edit-subject h2{
    font-size:2em;
    margin: 20px auto;
}
.edit-subject{
    margin-top:60px;
    padding:20px;
    max-width:800px;
}

.edit-subject .field{
    margin:20px auto;
}
.edit-subject .delete{
    position:absolute;
    right:20px;
    cursor:pointer;
    color:#028090;
}

.add{
    cursor:pointer;
    padding:20px 0px 20px 0px;
    font-size:2em;
    color:#028090;
}
.subject-text{
    color:#028090;
}
.btn{
     border-radius: 5px;
}
.btn:hover{
    color:black;
}
</style>
