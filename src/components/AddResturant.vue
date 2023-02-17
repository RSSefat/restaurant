<template>
    <div>
        <Header/>
 <form id="addRestaurant">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="adddress" placeholder="Enter Address" v-model="restaurant.address" >
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
    <button type="button" @click="addRestaurant">Add new Restaurant</button>
 </form>

    </div>
</template>

<script>
import  Header from './HeaderSection.vue';
import axios from 'axios';
export default {
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
       async addRestaurant(){
            const res =await axios.post(" http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(res.status== 201){
                this.$router.push({name:'HomeView'})
            }
          
        }
    },
    components: {
        Header
    },
   
}
</script>

<style scoped>
#addRestaurant {
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
   }
   #addRestaurant input{
    min-width: 100px;
    width: 200px;
    padding: 1.5%;
    margin: 1%;
    border: none;
    box-shadow:1px 3px 80px -9px #7a7474;
    border-radius: 2%;
   }
   #addRestaurant button{
    width: 30%;
    background-color: #FAC100;
    color: #5f3317;
   border-radius: 7%;
    border: none;
   
    padding: 1.5%;
   }

</style>