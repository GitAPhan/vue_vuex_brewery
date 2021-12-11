<template>
  <div>
    <!-- for loop to place info of breweries -->
    <article v-for="brewery in breweries" :key="brewery.id">
      <h2>{{ brewery.name }}</h2>
      <p>{{ brewery.street }}</p>
      <p>{{ brewery.city }}, {{brewery.state}}</p>
      <!-- used join function to create string to put inside href -->
      <a :href="['tel:'].join(brewery.phone)">{{ brewery.phone }}</a>
    </article>
  </div>
</template>

<script>
export default {
  name: "brewery-list",
  computed: {
    breweries() {
      return this.$store.state["breweries"];
    },
  },
};
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
    margin: 25px;
}

article {
    border: solid 1px black;
    display: grid;
    place-items: center;
    padding: 10px;
}
</style>