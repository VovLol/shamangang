<template>
  <div class="rows">
  <h1> List of sorcerers</h1> 
<div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
       <h5 class="card-title">{{ nickname }}</h5>
       <p class="card-text">
        I am {{ age }} years old <br />
        Hiring on {{ startDate }} <br />
        Gonna work on {{ street }}
       </p>
       <router-link class="btn btn-danger"  :to="{ name: 'edit', params:{id: id} }">redact</router-link>
       <button v-on:click="deleteCat" type="button" class="btn btn-danger">delt</button>
   
      </div>
    </div>
</div>
  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobCard',
  emits:['delete', 'edit'],
  props:{
    username: '',
    id: '',
    nickname: '',
    age : '',
    startDate : '',
    street: '',
  },
  methods:{
    deleteCat(){
      this.$emit('delete', this.$props.id)
    },
    editCat(){
      this.$emit('edit', this.$props.nickname)
    }
  }
}
</script>
