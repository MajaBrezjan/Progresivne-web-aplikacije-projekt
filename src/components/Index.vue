  <template>
  <div class="index">
    <div class="intro">
        <strong class="text">Student Assistant - for easier study.</strong>
         <p class="text">   Add subjects you have and record all the tasks and notes you need to have remembered. </p>
    </div>
    
    <div class="add">
        <router-link :to="{ name: 'AddSubject' }">
           <button class="btn">Add Subject</button>
        </router-link>
    </div>
    <div class="container">
        <div class="card" v-for="subject in subjects" :key="subject.id">
            <div class="card-content"> 
                <h2 class="subject-text">{{subject.title}}</h2>
                <ul class="task">
                    <li v-for="(task,index) in subject.tasks" :key="index">
                        <p>{{task}}</p>
                    </li>
                </ul>
                <div class="icons">
                    <router-link :to="{ name: 'EditSubject', params: {subject_slug: subject.slug}}">
                        <i class="material-icons edit">edit</i>
                    </router-link>
                    <i class="material-icons" @click="deleteSubject(subject.id)">delete</i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import db from './firebaseinit'

export default {
    data(){
        return{
            subjects:[

            ]
        }       
    },
    methods:{
        deleteSubject(id){
            //delete document form firestore
            db.collection('subjects').doc(id).delete()
            .then(() => {
                this.subjects = this.subjects.filter(subject => {
                return subject.id != id
            })
            })    
        }
    },
    created(){
        //fetch data from the firestore
        db.collection('subjects').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let subject =doc.data()
                subject.id = doc.id
                this.subjects.push(subject)
            })
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{
    text-align: center;  
    margin:30px 0px 30px 0px;
}

h2{
    font-weight: bold;
    padding-bottom: 10px;
    font-size:1.4em;
    text-align: center;
}
.container{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 20px;
    padding:0px 20px 0px 10px;
}
.icons{
    position:absolute;
    right:5px;
    bottom:5px;
    color:#028090;
}
i{
    cursor:pointer;
}
.edit{
    color:#028090;
}
.intro {
    padding:30px 5px 20px 5px;
    max-width:800px;
    margin:0 auto;
    text-align:center;
    font-size:1.2em;
}
.task p {
     display: list-item;      
    list-style-type: disc;       
    list-style-position: inside;
}
.text{
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
