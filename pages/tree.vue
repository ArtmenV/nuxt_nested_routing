<template>
  <div class="container">
    <TreeMenu :label="label" :nodes="nodes" :depth="0"></TreeMenu>
  </div>
</template>

<script>
import TreeMenu from "../components/TreeMenu.vue";
export default {
  components: {
    TreeMenu
  },

  data() {
    return {
      label: "root",
      nodes: [
        {
          label: "item1",
          nodes: [
            {
              label: "item1.1"
            },
            {
              label: "item1.2",
              nodes: [
                {
                  label: "item1.2.1"
                }
              ]
            }
          ]
        },
        {
          label: "item2"
        }
      ]
    };
  }
};
</script>
