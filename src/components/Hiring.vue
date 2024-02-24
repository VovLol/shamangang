<template>
  <div class="rows">
  <h1>Hiring Sorcerers</h1>
    <div>
     <div class="mb-3">
     <label for="CatName" class="form-label">Name</label>
     <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="CatAge" class="form-label">Age</label>
      <input v-model="staff.age" type="text" class="form-control" id="CatAge">
    </div>
    <div class="mb-3 form-check">
     <label for="catJobDate" class="form-label">G</label>
      <input v-model="staff.dateStartJob" type="date" class="form-control" id="catJobDate">
     
    </div>
      <button v-on:click="addJob" type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>
</template>

<script>
import Cat from '@/lib/sorcerer.js'
export default {
  name: 'Hiring',
  props: {
    msg: String
  },
  data(){
    return{
    staff: Cat  
    }
     
  },
  methods:{
    addJob(){
      this.$store.commit('addWorker, this.staff')
    }
  }
}
</script>
