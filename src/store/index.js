import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    base_url: 'http://localhost:3000/',
    posts: {},
    products: {},
    productCategories:{},
    singleProduct: null,
    productsByCategory:{},
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
      console.log(singleProduct);
    },
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
