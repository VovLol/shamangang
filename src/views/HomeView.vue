<template>
  <div class="rows">
   <h1> I love making cheez ballz</h1>
   
   <Editor />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'
export default {
  name: 'HomeView',
  components:{
  Editor
  }
} 
</script>