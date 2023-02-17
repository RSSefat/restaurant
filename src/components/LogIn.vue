<template>
   
    <div class="login
    -page">
        <div><img src="../assets/restaurant-logo-design-template_79169-56.avif" alt="">
         </div>
 
    <div id="log-in">
        <span>
         
          <input type="email" v-model="email"  placeholder=" email">
          <input type="password" v-model="password" placeholder=" password">
         
          <button @click="login">Log In</button>
          <span>
            <router-link :to="{name:'SignUp'}">Signup</router-link>
          </span>
        </span>
      </div>

    </div>
</template>

<script>


import axios from 'axios'
export default {
    
    data () {
        

        return {
            email:"",
            password:""
        }
    },
    methods: {
       async login(){
            let res = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`

            )

            if(res.status ==200 && res.data.length>0){
      
      localStorage.setItem("user-info", JSON.stringify(res.data[0]))
      this.$router.push({name:'HomeView'})
    }else{
        alert('password is wrong')
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
   .login-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
#log-in{
   margin: auto;
}
#log-in span {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
   }
   #log-in span input{
    min-width: 100px;
    width: 200px;
    padding: 1.5%;
    margin: 1%;
    border: none;
    box-shadow:1px 3px 80px -9px #7a7474;
    border-radius: 2%;
   }
   #log-in span button{
    width: 30%;
    background-color: #FAC100;
    color: #5f3317;
   border-radius: 7%;
    border: none;
   
    padding: 1.5%;
   }
</style>