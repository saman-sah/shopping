<template>
  <header-component></header-component>
  <router-view/>
  <footer-component></footer-component>
  <quick-view-product v-if="toggle_quickview_modal" />
  <mini-cart-modal />
</template>
<script>
import myMixin from './mixins';
export default {
  mixins: [ myMixin ],
}
</script>


