<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i v-if="nodes" class="fas" :class="iconClasses"></i>
        {{ label }}
      </div>
    </div>
    <tree-menu
      v-if="showChildren"
      v-for="(node, index) in nodes"
      :nodes="node.nodes"
      :label="node.label"
      :depth="depth + 1"
      :key="index"
    ></tree-menu>
  </div>
</template>
<script>
export default {
  props: ["label", "nodes", "depth"],
  data() {
    return { showChildren: false };
  },
  name: "tree-menu",
  computed: {
    iconClasses() {
      return {
        "fa-plus-square": !this.showChildren,
        "fa-minus-square": this.showChildren
      };
    },
    labelClasses() {
      return { "has-children": this.nodes };
    },
    indent() {
      return { transform: `translate(${this.depth * 15}px)` };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1em;
}

.container {
  width: 300px;
  margin: 0 auto;
}

.label-wrapper {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.has-children {
  cursor: pointer;
}
</style>
