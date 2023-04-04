<template>
<header-component></header-component>
  <router-view/>
  <footer-component></footer-component>
</template>
<script>
import myMixin from './mixins';
export default {
  mixins: [ myMixin ],
  mounted() {
    const mainJs= document.createElement("script");
    mainJs.setAttribute("src", "../assets/js/main.js");
    document.body.appendChild(mainJs);
  },
}
</script>


