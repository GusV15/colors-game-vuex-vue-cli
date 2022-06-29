import Vue from "vue";

const miMixinGlobal = {
  methods: {
    init() {
      this.$store.dispatch("setMessageDisplay", "");
      this.$store.dispatch("setRestartButton", "New Colors!");
      this.$store.dispatch("setHeaderStyleBackgroundColor", "steelblue");
      this.$store.dispatch(
        "setColors",
        this.createNewColors(this.$store.state.colorCount)
      );
      this.$store.dispatch(
        "setPickedColor",
        this.$store.state.colors[this.pickColor()]
      );
    },
    pickColor() {
      let quantity;
      if (this.$store.state.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    createNewColors(numbers) {
      let arr = [];
      for (let i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },
    createRandomStringColor() {
      let newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
  },
  computed: {},
};

Vue.mixin(miMixinGlobal);
