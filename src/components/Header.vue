<template lang="html">

  <section class="header" :style="getStyles()">
		<h1>The Great <br>
			<span class="colorDisplay">{{ this.$store.state.pickedColor }}</span>
			<br>
			Guessing Game</h1>
	</section>

</template>

<script lang="js">

  export default  {
    name: 'header-view',
    props: ['headerStyleBackgroundColor'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      getStyles() {
        return {
          backgroundColor: this.headerStyleBackgroundColor
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
.colorDisplay {
  font-size: 200%;
}
</style>
