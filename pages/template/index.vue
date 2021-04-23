<template>
  <div class="template-container">
    <side-menu-container />
    <content-view-container />
  </div>
</template>

<script>
import '~/assets/css/template/template.scss';

import SideMenuContainer from '~/components/template/sideMenu/index';
import ContentViewContainer from '~/components/template/contentView/index';

export default {
  components: {
    SideMenuContainer,
    ContentViewContainer,
  },
};
</script>

<style scoped></style>
