<template>
<header-component></header-component>
  <router-view/>
  <footer-component></footer-component>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  mounted() {
    const mainJs= document.createElement("script");
    mainJs.setAttribute("src", "../assets/js/main.js");
    document.body.appendChild(mainJs);
  },
}
</script>


