<template>
    <div class="nav">
       <router-link to="/">Home</router-link>
       <router-link to="/add-resturant">Add Resturent</router-link>
       <a href="" @click="logout">Logout</a>
    </div>
  
</template>

<script>

export default {
    name:'HeaderSection',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"LogIn"})
        }
    },
   
}
</script>

<style  scoped>
.nav{
    background-color: #FAC102;
    overflow: hidden;
}
.nav a{
    float: left;
    padding: 1%;
    text-decoration: none;
    color:#583017 ;
    
}
.nav a:hover{
    color:#ebebeb ;
    background-color: #583017;
}
</style>