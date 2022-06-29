<template lang="html">

  <section class="container">
    <Square
      v-for="(color, key) of this.$store.state.colors"
      :key="key"
      :color="color"
    />
  </section>

</template>

<script lang="js">
  import Square from "./Square.vue";
  export default  {
    
    components: {
      Square
    },
    name: 'game-container',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
