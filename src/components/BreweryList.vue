<template>
    <div>
        <article v-for="brewery in breweries" :key="brewery.id">
            <h2>{{brewery.name}}</h2>
            <p>{{brewery.street}}</p>
            <p>{{brewery.city}}</p>
            <a :href="['tel:'].join(brewery.phone)">{{brewery.phone}}</a>
        </article>
    </div>
</template>

<script>
    export default {
        name: 'brewery-list',
        computed: {
            breweries() {
                return this.$store.state['breweries']; 
            }
        },
    }
</script>

<style scoped>

</style>