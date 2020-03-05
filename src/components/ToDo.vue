<template>
  <div id="todo">
    <h1>ToDO</h1>
    <div class="container todo">
        <div class="row mb-1 main">
         <div class="col"><i class="far fa-check-square"></i></div>
         <div class="col">item</div>
         <div class="col">price $ </div>
         <div class="col"><i class="fas fa-trash-alt"></i></div>
        </div>
        
        <div class="row mb-1 secondry" v-for="(thing,index) in todos" v-bind:key="thing" v-bind:id="thing.id">
          
        <div class="col"><i class="far fa-check-square tol" @click="check(index)"></i></div>
         <div class="col" >{{thing.item}}</div>
         <div class="col" >{{thing.price}} $ </div>
         <div class="col"><i class="fas fa-trash-alt tol" @click="removeItem(index)"></i></div>

         
        
        </div>

        <div class="row third">
          <div class="col-12 col-md-6">
            <p>Number of items:  <br class="d-sm-block d-none"> {{todos.length}}</p>
          </div>
          <div class="col-12 col-md-6">
            <p>The Budget: <br class="d-sm-block d-none"> {{totalPrice}}$</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// :class="{'main':checkClass}"
import {mapGetters} from 'vuex';
import $ from 'jquery'
export default {
    computed:mapGetters({
        todos:'todos',
        totalPrice:'totalPrice'
        
    }),

    data() {
      return {
       
      }
    },
    methods: {
      removeItem(index){
        const itemId=this.todos[index].id
        $(`#${itemId}`).removeClass("main")
        this.$store.dispatch('removeTodo',itemId)
        console.log(itemId)
      },

      check(index){
        var checkClass=false
        const itemId=this.todos[index].id
        checkClass=!checkClass
        if(checkClass){
           $(`#${itemId}`).removeClass("none")
           $(`#${itemId}`).toggleClass("withLine")
          console.log($(`#${itemId}`) )
        }
        else{
             $(`#${itemId}`).removeClass("withLine")
             $(`#${itemId}`).toggleClass("none")
            console.log($(`#${itemId}`))
        }
        
      }
    },

    created(){
      console.log('this.$store.getters.totalPrice')
    }
}   
</script>

<style lang="scss">
@import "../scss/todo.scss";
 
 #todo{
   h1{
     color:white;
   }
 }
</style>
