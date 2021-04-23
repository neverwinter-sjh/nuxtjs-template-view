<template>
  <div class="side-menu-container">
    <div class="fixed-container">
      <div class="logo-area">
        <p class="logo">Template Viewer</p>
      </div>
      <div class="search-area">
        <input type="text" />
      </div>
    </div>
    <div class="component-list-area">
      <vue-scrollbar max-height="500px">
        <div class="tree-node-list" style="height: 2000px; background: yellow">
          <div class="node-item node-depth1 is-node-section">
            <div class="node-item-wrap">Component Section</div>
          </div>
          <div class="node-item node-depth1 is-node-folder">
            <div class="node-item-wrap">Buttons</div>
          </div>
          <div class="node-item node-depth2 is-node-button">
            <div class="node-item-wrap">Button1</div>
          </div>
          <div class="node-item node-depth2 is-node-button">
            <div class="node-item-wrap">Button2</div>
          </div>
          <div class="node-item node-depth2 is-node-button">
            <div class="node-item-wrap">Button3</div>
          </div>
        </div>
      </vue-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: {
        wheelSpeed: 0.5,
      },
    };
  },
};
</script>

<style scoped></style>
