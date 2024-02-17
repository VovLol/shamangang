<template>
  <div class="rows">
    <h1>Hiring Sorcerers</h1>
    <div>
  <div class="mb-3">
    <label for="CatName" class="form-label">Name</label>
    <input type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="CatAge" class="form-label">Age</label>
    <input type="text" class="form-control" id="CatAge">
  </div>
  <div class="mb-3 form-check">
    <input type="text" class="form-check-input" id="CatAge">
    <label class="form-check-label" for="exampleCheck1">Technique</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</div>
  </div>
</template>

<script>
export default {
  name: 'Hiring',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
