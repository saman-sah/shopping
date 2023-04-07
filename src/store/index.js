import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    base_url: 'http://localhost:3000/',
    posts: {},
    products: {},
    productCategories:{},
    toggle_quickview_modal: false,
    quickviewProduct: null,
    singleProduct: null,  
    body: document.getElementById('ss_shopping_body'),       
    route_details:{},
    loading_products: true,
    show_login_modal: false,
    updateKey:0,
  },


  // ---------------   Getters   --------------------
  getters: {
  },


  // ---------------   Mutations   --------------------
  mutations: {
    LOAD_POSTS(state, data) {
      state.posts= data.posts;
      // console.log('state.posts');
      // console.log(state.posts);
    },
    LOAD_PRODUCTS(state, data) {
      state.products= data.products;
      state.products.forEach(product => {
        var slug = product.title.toLowerCase().replace(/[^\w-]+/g, '-');
        product.slug=slug
        var discount= (product.discountPercentage* product.price) / 100;
        var total= product.price - discount;
        product.discount= discount.toFixed(2);
        product.totalPrice= total.toFixed(2);
      });
      console.log('state.products');
      console.log(state.products);      
    },
    LOAD_PRODUCTS_CATEGORIES(state, productCategories) {
      state.productCategories= productCategories;
      // console.log('state.productCategories');
      // console.log(state.productCategories);
    },
    GET_SINGLE_PRODUCT(state, singleProduct) {
      var slug = singleProduct.title.toLowerCase().replace(/[^\w-]+/g, '-');
      singleProduct.slug=slug
      var discount= (singleProduct.discountPercentage* singleProduct.price) / 100;
      var total= singleProduct.price - discount;
      singleProduct.discount= discount.toFixed(2);
      singleProduct.totalPrice= total.toFixed(2);
      state.singleProduct= singleProduct;
      console.log(singleProduct);
    },
    SET_QUICKVIEW_PRODUCT(state, product) {
      console.log('setquick vue product');
      console.log(product);
      state.quickviewProduct= product;      
    },
    SHOW_QUICKVIE_MODAL(state) {
      console.log('toggle_quickview_modal');
      state.toggle_quickview_modal= !state.toggle_quickview_modal
      console.log(state.toggle_quickview_modal);
      state.body.classList.add('overflowhidden-body');
    },
    CLOSE_QUICKVIE_MODAL(state) {
      state.toggle_quickview_modal= false;
      state.quickviewProduct= null;
      state.body.classList.remove('overflowhidden-body');
    }
  },




  // ---------------   Actions   --------------------
  actions: {
    loadPosts({commit}){
      // console.log('actionsssssssss');
      axios.get('https://dummyjson.com/posts',  {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response=> {
        commit('LOAD_POSTS', response.data)
      })
    },
    loadProducts({commit}){
      // console.log('actionsssssssss');
      axios.get('https://dummyjson.com/products',  {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response=> {
        commit('LOAD_PRODUCTS', response.data)
      })
    },
    loadProductsCategories({commit}){
      // console.log('actionsssssssss');
      axios.get('https://dummyjson.com/products/categories',  {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response=> {
        commit('LOAD_PRODUCTS_CATEGORIES', response.data)
      })
    },
    getSingleProduct({commit}, productId) {
      console.log('getSingleProduct Actionnnnnnn');
      console.log(productId);
      axios.get('https://dummyjson.com/products/'+ productId,  {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response=> {
        commit('GET_SINGLE_PRODUCT', response.data)
      })
    }
  },


  // ---------------   Modules   --------------------
  modules: {
  }
})
