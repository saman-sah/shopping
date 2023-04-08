import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import QuickViewProduct from '@/components/modal/QuickView.vue'
// import loginForm from './components/modals/login.vue';
import _ from 'lodash';
import { mapActions,mapMutations,mapGetters, mapState } from "vuex";
export default {
  components: {
      'header-component': Header,
      'footer-component': Footer,
      'guci-view-product': QuickViewProduct
  },
  computed: {
    ...mapState([
        'toggle_quickview_modal'
    ]),
    // Getters into computed
    ...mapGetters([
    ])
  },
  created() {
    this.loadPosts();
    this.loadProducts();
    this.loadProductsCategories();
  },      
  mounted() {        
      // this.route_details= this.$route;
  },
  updated() {
      // this.route_details= this.$route;
  },
  methods: {
    ...mapMutations([

    ]),
    ...mapActions([
      'loadPosts',
      'loadProducts',
      'loadProductsCategories'
    ]),
  },
}