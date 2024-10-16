Vue.createApp({
  data() {
    return {
      counter: 0,
      resetting: false,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter === 37) {
        return 'On the money!';
      } else {
        return 'Too much!';
      }
    },
  },
  watch: {
    result(value) {
      if (
        !this.resetting &&
        (value === 'On the money!' || value === 'Too much!')
      ) {
        this.resetting = true;
        const that = this;
        setTimeout(() => {
          that.counter = 0;
          that.resetting = false;
        }, 5000);
      }
    },
  },
  methods: {
    inc(value) {
      this.counter += value;
    },
    dec(value) {
      this.counter -= value;
    },
  },
}).mount('#assignment');
