<template lang="pug">
  #app
    a(href="#") {{ message }}
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Reza"
    };
  }
};
</script>

<style lang="scss">
#app {
  color: red;
}
</style>
