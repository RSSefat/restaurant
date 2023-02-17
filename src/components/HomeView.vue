<template>
    <div>
      <span>
        <Header/>
      </span>
      
        <h1>Hello {{name}}, Welcome on Home Page</h1>
        <table border="1">
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
          </tr>
          <tr v-for="i in restaurants" :key="i.id">
            <td>{{i.id}}</td>
            <td>{{i.name}}</td>
            <td>{{i.address}}</td>
            <td>{{i.contact}}</td>
            <td>
              <router-link :to="'/update-resturant/'+ i.id">update</router-link>
              <button @click="deleteRest(i.id)">Delete</button>
            </td>
          </tr>
        </table>
    </div>
</template>

<script>
import Header from './HeaderSection.vue'
import axios from 'axios';

export default {
  data(){
    return{
      name:'',
      restaurants:[],
    }
  },
    name:'HomeView',
    components:{Header},
    methods:{
      async deleteRest(id){
        let res =await axios.delete("http://localhost:3000/restaurant/"+ id);
        if(res.status== 200){
          this.loadData()
        }
      },
   async loadData(){
        let user = localStorage.getItem('user-info');
    this.name= JSON.parse(user).name;
    if(!user){
      this.$router.push({name:'SignUp'})
    }
    let res =await axios.get("http://localhost:3000/restaurant");
    console.log(res);
    this.restaurants=res.data;
      }
    },

   async mounted()
   {
   this.loadData()
   
  },
    
}
</script>

<style scoped>

 table tr td{
  width: 130px;
  height: 50px;
 }
</style>