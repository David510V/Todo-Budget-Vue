import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[{item:'Wallet',price:100,id:0}],
    totalPrice:0,

  },
  mutations: {
    'testTodo'(state,{item,price,id}){
      state.todos.push({
        item:item,
        price:price,
        id:id
      })
      state.totalPrice= state.totalPrice + price
      console.log(item)
    },

    'removeTodo'(state,itemId){
      const todos=state.todos
      const todoFound = todos.find(thing => thing.id === itemId)
      todos.splice(todos.indexOf(todoFound),1)
      state.totalPrice= state.totalPrice - todoFound.price
 
    }
  },
  actions: {
    sendTodo: ({commit}, thing) => {
      commit('testTodo', thing);
      console.log(thing)
    },

    removeTodo:({commit},itemId)=>{
      commit('removeTodo',itemId)
    }
  },
  getters:{
      todos(state){
        return state.todos
      },
      totalPrice(state){
        return state.totalPrice
      }
  },
})
