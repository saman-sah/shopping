import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    base_url: 'http://localhost:3000/',
    posts: {},
    products: {},
    productCategories:{},
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
    loadPosts(state, data) {
      state.posts= data.posts;
      // console.log('state.posts');
      // console.log(state.posts);
    },
    loadProducts(state, data) {
      state.products= data.products;
      console.log('state.products');
      console.log(state.products);
    },
    loadProductsCategories(state, productCategories) {
      state.productCategories= productCategories;
      // console.log('state.productCategories');
      // console.log(state.productCategories);
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
        commit('loadPosts', response.data)
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
        commit('loadProducts', response.data)
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
        commit('loadProductsCategories', response.data)
      })
    },
  },


  // ---------------   Modules   --------------------
  modules: {
  }
})
