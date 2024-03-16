<template>
  <div class="rows">
  <h1>redact yo shit mr. {{ id }}</h1>
    <div>
     <div class="mb-3">
     <label for="CatName" class="form-label">Name</label>
     <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="CatAge" class="form-label">Age</label>
      <input v-model="staff.age" type="text" class="form-control" id="CatAge">
    </div>
    <div class="mb-3">
      <label for="CatStreet" class="form-label">Stuurito</label>
      <input v-model="staff.street" type="text" class="form-control" id="CatStreet">
    </div>
      <button v-on:click="editJob" type="submit" class="btn btn-primary">Submit</button>
      <router-link to="/liststaff" class="btn btn-primary">Return Back</router-link>
    </div>
</div>
</template>

<script>
import Cat from '@/lib/sorcerer.js'
export default {
  name: 'Hiring',
  props: {
    id: '',
    nickname: ''
  },
  data(){
    return{
    staff: Cat  
    }
     
  },
  methods:{
    editJob(){
      this.$store.commit('editWorker', {...this.staff})
      //this.staff = new Cat()
    }
  },
  mounted(){
    this.staff = this.$store.getters.getCatById(this.id);
  }
}
</script>
