<template>
  <div class="pt-8 pt-md-12">
    <h1 class="pt-4 text-center">Stark-utils</h1>
    <h2 class="text-center">A Cairo toolbox</h2>
    <div class="text-center sm-6 pt-5">
      <router-link to="/converter">Open converter</router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
h1 {
  font-size: 8vw;
  color: hsl(0, 0%, 95%);
}

h2 {
  color: hsl(0, 0%, 95%);
  font-size: 3vw;
}

a {
  padding: 20px;
  font-size: 1.5vw;
  background-color: hsl(14, 81%, 52%);
  border-radius: 10px;
  text-decoration: none;
  color: hsl(0, 0%, 95%);
  transition: all 200ms ease-in;
}

a:hover {
  font-size: 1.8vw;
  background-color: hsl(14, 81%, 46%);
  color: hsl(0, 0%, 100%);
}

@media only screen and (max-width: 600px) {
  a {
    font-size: 1.5em;
  }

  a:hover {
    font-size: 2em;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 2em;
  }
}
</style>
