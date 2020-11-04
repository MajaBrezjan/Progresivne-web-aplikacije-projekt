  <template>
  <div class="index">
    <div class="intro">
        <strong class="indigo-text">Student Assistant - for easier study.</strong>
         <p class="indigo-text">   Add subjects you have and record all the tasks and notes you need to have remembered. </p>
    </div>
    <div class="add">
        <b-button type="is-dark" >ADD SUBJECT</b-button>
    </div>
    <div class="container">
        <div class="card" v-for="subject in subjects" :key="subject.id">
            <div class="card-content"> 
                <h2 class="indigo-text">{{subject.name}}</h2>
                <ul class="task">
                    <li v-for="(task,index) in subject.task" :key="index">
                        <p>{{task}}</p>
                    </li>
                </ul>
                <div class="icons">
                    <i class="material-icons">edit</i>
                    <i class="material-icons" @click="deleteSubject(subject.id)">delete</i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            subjects:[
                {name:'Progressive Web App', task:['vue projekt'], id:1},
                {name:'Razvoj računalnih igara', task:['ispit iz teorije', 'projekt-igrica'], id:2},
                 {name:'Upravljanje bojama', task:['2kolokvija', 'prezentacija','usmeni'], id:3}
            ]
        }       
    },
    methods:{
        deleteSubject(id){
            this.subjects = this.subjects.filter(subject => {
                return subject.id != id
            })
        }
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
}
i{
    cursor:pointer;
}
.intro {
    padding:30px 5px 20px 5px;
    color:rgb(37, 37, 223);
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

</style>
