<template>
    <div class="signup-page">
      <div><img src="../assets/restaurant-logo-design-template_79169-56.avif" alt="">
       
      </div>

      <div id="register">
        <span>
          <input type="text" v-model="name" placeholder="Name">
          <input type="email" v-model="email"  placeholder=" email">
          <input type="password" v-model="password" placeholder=" password">
         
          <button @click="signUp">Sign Up</button>
          <span>
            <router-link :to="{name:'LogIn'}">Login</router-link>
          </span>
        </span>
      </div>
    </div>

 
</template>

<script>
import axios from 'axios'

export default {
  name: 'signUp',
  data(){
    return{
       email: "",
       name: "",
       password: "",
    }
  },
  methods:{
   async signUp(){
      let res = await axios.post("http://localhost:3000/users", {
        email:this.email,
        name:this.name,
        password:this.password
      });

      console.log(res);

      if(res.status ==201){
      
        localStorage.setItem("user-info", JSON.stringify(res.data))
        this.$router.push({name:'HomeView'})
      }
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name:'HomeView'})
    }
  }
}
</script>

<style scoped>
 img{
  height: 250px;
  width: 250px;
 }
 .signup-page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
 h1{
  justify-content: center;
  align-items: center;
  color: #4D1F03;
  font: bold;
 }
 #register span {
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
 }
 #register span input{
  min-width: 100px;
  width: 200px;
  padding: 5%;
  margin: 2%;
  border: none;
  box-shadow:1px 3px 80px -9px #7a7474;
  border-radius: 2%;
 }
 #register span button{
  width: 100%;
  background-color: #FAC100;
  color: #4D1F03;
 border-radius: 7%;
  border: none;
 
  padding: 4%;
 }
</style>