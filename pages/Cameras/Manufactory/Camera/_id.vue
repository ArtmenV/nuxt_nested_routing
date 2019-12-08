<template>
  <div>
    <h4>Ship</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idPage: null
    };
  },
  methods: {
    // dataSet() {
    //   this.idPage = this.$route.query;
    // }
  },

  // dataSet() {
  //   return (this.idPage = this.$route.query);
  //   debugger;
  //   console.log("id", this.idPage);
  // },

  computed: {
    dataItemss() {
      const data = this.$route.query;
      debugger;
      console.log(data);
      return data;
    }
  },
  watch: {
    idPage: {
      handler: function(val) {
        if (val !== this.idPage) {
          debugger;
          console.log("id", this.idPage);
          this.idPage = val;
        }
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
