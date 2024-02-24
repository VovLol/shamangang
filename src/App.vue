<template>
  <nav>
   <Menu /> 
  </nav>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
