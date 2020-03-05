<template>
  <div class="budget">
    <h1>BUDGET</h1>
    <div class="container budget">
        <div class="row justify-content-around">
            <div class="col col-md-6">
                <p>Item</p>
                <input type="text" v-model="item">
            </div>
            <div class="col col-md-6">
                <p>Cost</p>
                <input type="number" v-model="price">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <button class="btn" @click="sendTodo">Add Item</button>
            </div>
        </div>
    </div>
    <br><br>
  </div>
</template>

<script>
 export default {
     data() {
         return {
             item:'',
             price:0,
             id:0
         }
     },
     methods: {
         sendTodo(){
             var priceNum=parseInt(this.price)
             this.id+=1
             const thing={
                 item:this.item,
                 price:priceNum,
                 id:this.id
             }
             this.$store.dispatch('sendTodo',thing)
             
         }
     },
}
</script>

<style lang="scss">
@import "../scss/budget.scss";

</style>
