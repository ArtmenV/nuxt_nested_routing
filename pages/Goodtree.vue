<template>
  <ul id="demo" class="portfolio__item">
    <TreeItem class="item" :item="treeData" />
  </ul>
</template>

<script>
import TreeItem from "../components/TreeItem";
let treeData = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }]
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }]
        }
      ]
    }
  ]
};

export default {
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    };
  },
  methods: {
    // makeFolder: function(item) {
    //   Vue.set(item, "children", []);
    //   this.addItem(item);
    // },
    // addItem: function(item) {
    //   item.children.push({
    //     name: "new stuff"
    //   });
    // }
  }
};
</script>

<style>
.portfolio__item {
  list-style: none;
  cursor: pointer;
}

ul {
  padding-left: 20px;
}
</style>
