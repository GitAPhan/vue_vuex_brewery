<template>
  <div>
    <button @click="get_breweries_button">FIND BREWERIES</button>
  </div>
</template>

<script>
export default {
  name: "brewery-button",
  methods: {
    get_breweries_button() {
      this.$store.dispatch("get_breweries_from_api");
    },
  },
};
</script>

<style scoped>
</style>