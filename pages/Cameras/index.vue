<template>
  <div>
    <h3 @click="dataItems">Zimalab</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      this.$router.push(`/cameras/manufactory?id=${7}`);
    }
  }
};
</script>

<style>
</style>
