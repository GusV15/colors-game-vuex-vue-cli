<template lang="html">

    <div
      class="square"
      :style="getColor()"
      @click="handlerSquareClick"
    >
    </div>

</template>

<script lang="js">

  export default  {
    name: 'square-view',
    props: ['color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      handlerSquareClick({ target }) {
        if (target.style.backgroundColor === this.$store.state.pickedColor) {
          this.$store.dispatch("setMessageDisplay", "You Picked Right!");
          this.setAllColorsTo(this.$store.state.pickedColor);
          this.$store.dispatch("setRestartButton", "Play Again!");
          this.$store.dispatch(
            "setHeaderStyleBackgroundColor",
            this.$store.state.pickedColor
          );
        } else {
          target.style.backgroundColor = "#232323";
          this.$store.dispatch("setMessageDisplay", "Try Again!");
        }
      },
      setAllColorsTo(selectedColor) {
        this.$store.dispatch(
          "setColors",
          this.$store.state.colors.map(() => selectedColor)
        );
      },
      getColor() {
        return { 
            backgroundColor: this.color, 
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
