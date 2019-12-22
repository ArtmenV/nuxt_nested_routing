<template>
  <div>
    <h3 @click="dataItems">Trave</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      idPage: null,
      items: [
        {
          id: 7,
          Name: "Shimpo"
        },
        {
          id: 14,
          Name: "Shimpo"
        }
      ]
    };
  },
  methods: {
    dataItems() {
      this.$router.push({
        path: "/cameras/manufactory/camera",
        query: { id: 1, cumId: 7 }
      });
    }
  },

  computed: {
    dataItemss() {
      return (this.idPage = this.$route.query);
      debugger;
    }
  }
};
</script>

<style>
</style>
