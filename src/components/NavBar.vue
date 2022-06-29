<template lang="html">
  <section class="navigator">
    <button
      id="reset"
      @click="init()"
    >
      {{this.$store.state.restartButton}}
    </button>
    <span
      class="message"
      :style="getStyles(this.$store.state.messageDisplay)"
    >
      {{this.$store.state.messageDisplay}}
    </span>

    <button
      :class="getClass(!this.$store.state.isHard, this.$store.state.messageDisplay)"
      @click="clickEasy()"
    >
      easy
    </button>
    <button
      :class="getClass(this.$store.state.isHard, this.$store.state.messageDisplay)"
      @click="clickHard()"
    >
      hard
    </button>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      getClass(isHard, messageDisplay) {
          return [{
            'selected': isHard,
            'message-visible': messageDisplay
          }]
      },
      getStyles(messageDisplay) {
        return {
          color: messageDisplay ? "#000000" : "#ffffff"
        }
      },
      clickEasy(){
        if (this.$store.state.isHard) {
          this.$store.dispatch('handlerClickEasy', [3, false])
          this.init();  
        }
      },
      clickHard(){
        if (!this.$store.state.isHard) {
          this.$store.dispatch('handlerClickHard', [6, true])
          this.init();
        }
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.message {
  color: #ffffff;
  display: inline-block;
  width: 20%;
}
.message-visible {
  color: #000000;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
