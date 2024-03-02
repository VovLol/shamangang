<template>
    <div class="rows">
    <h1> List of sorcerers</h1> 
  <div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">{{ nickname }}</h5>
         <p class="card-text">
          I am {{ age }} years old <br />
          Hiring on {{ startDate }}
         </p>
         <button type="button"  v-on:click="editCat" class="btn btn-danger">chag</button>
         <button v-on:click="deleteCat" type="button" class="btn btn-danger">delt</button>
     
        </div>
      </div>
  </div>
    
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'JobEdit',
    emits:['delete', 'edit'],
    props:{
      nickname: '',
      age : '',
      startDate : ''
    },
    methods:{
      deleteCat(){
        this.$emit('delete', this.$props.nickname)
      },
      editCat(){
        this.$emit('edit', this.$props.nickname)
      }
    }
  }
  </script>
  