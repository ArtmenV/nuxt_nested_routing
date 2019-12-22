<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle">
      <span v-if="isFolder">{{ isOpen ? "-" : "+" }} </span> {{ item.name }}
    </div>
    <ul v-show="isOpen" v-if="isFolder" class="portfolio__item">
      <!-- <nuxt-link :to="goThere"> -->
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      />
      <!-- </nuxt-link> -->
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    item: Object
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }

    // goThere() {
    //   const isVoting = this.$route.path === "/voting";

    //   if (isVoting) {
    //     return "/voting-entries?id=" + 1;
    //   } else {
    //     return "/challenge-results?id=" + 1;
    //   }
    // }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    }
  }
};
</script>

<style>
ul {
  padding-inline-start: 15px !important;
}
.bold {
  font-weight: bold;
}
</style>
