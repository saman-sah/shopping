import { createStore } from "vuex";
import axios from "axios";
import { 
    auth, 
    db, 
    ref, 
    onValue, 
    set,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from '../firebase'

export default createStore({
    state: {
        base_url: "http://localhost:3000/",
        posts: {},
        products: {},
        productCategories: {},
        toggle_quickview_modal: false,
        toggle_login_modal: false,
        quickviewProduct: null,
        singleProduct: null,
        singlePost: null,
        filterProductText: "",
        productsBrand: [],
        filterPrice: {
            min: 0,
            max: 20000
        },
        currentUser: {},
        userInfo: {},
        maxProdcutPrices: 2000,
        selectedBrandProducts: [],
        body: document.getElementById("ss_shopping_body"),
        route_details: {},
        loading_products: true,
        show_login_modal: false,
        updateKey: 0,
    },

    // ---------------   Getters   --------------------
    getters: {},

    // ---------------   Mutations   --------------------
    mutations: {
        LOAD_POSTS(state, data) {
            state.posts = data.posts;
            state.posts.forEach((post) => {
                var slug = post.title.toLowerCase().replace(/[^\w-]+/g, "-");
                post.slug = slug;
                post.image =
                    "https://source.unsplash.com/random/1024x520/?blog-post";
            });
            console.log("postsssssssssssssssssss");
            console.log(state.posts);
        },
        GET_SINGLE_POST(state, post) {
            state.singlePost = post;
            console.log("get single post");
            console.log(state.singlePost);
        },
        GET_POSTS_COMMENTS(state, comments) {},
        LOAD_PRODUCTS(state, data) {
            state.products = data.products;
            var brands = [];
            var prices= [];
            state.products.forEach((product) => {
                var slug = product.title.toLowerCase().replace(/[^\w-]+/g, "-");
                product.slug = slug;
                var discount =
                    (product.discountPercentage * product.price) / 100;
                var total = product.price - discount;
                product.discount = discount.toFixed(2);
                product.totalPrice = total.toFixed(2);
                brands.push(product.brand);
                prices.push(product.price);
            });
            state.productsBrand = [...new Set(brands)];
            state.filterPrice.max= Math.max(...prices)
            state.maxProdcutPrices= Math.max(...prices)
        },
        LOAD_PRODUCTS_CATEGORIES(state, productCategories) {
            state.productCategories = productCategories;
        },
        GET_SINGLE_PRODUCT(state, singleProduct) {
            var slug = singleProduct.title
                .toLowerCase()
                .replace(/[^\w-]+/g, "-");
            singleProduct.slug = slug;
            var discount =
                (singleProduct.discountPercentage * singleProduct.price) / 100;
            var total = singleProduct.price - discount;
            singleProduct.discount = discount.toFixed(2);
            singleProduct.totalPrice = total.toFixed(2);
            state.singleProduct = singleProduct;
        },
        SET_QUICKVIEW_PRODUCT(state, product) {
            state.quickviewProduct = product;
        },
        SHOW_QUICKVIE_MODAL(state) {
            state.toggle_quickview_modal = true;
            state.body.classList.add("overflowhidden-body");
        },
        CLOSE_QUICKVIE_MODAL(state) {
            state.toggle_quickview_modal = false;
            state.quickviewProduct = null;
            state.body.classList.remove("overflowhidden-body");
        },
        SHOW_LOGIN_MODAL(state) {
            console.log('show login modal');
            state.toggle_login_modal = true;
            state.body.classList.add("overflowhidden-body");
        },
        CLOSE_LOGIN_MODAL(state) {
            state.toggle_login_modal = false;
            state.body.classList.remove("overflowhidden-body");
        },
        FILTER_PRODUCT_TEXT(state, txt) {
            state.filterProductText = txt;
            console.log("state.filterProductText");
            console.log(state.filterProductText);
        },
        UPDATE_MIN_PRICE_FILTER(state, minPrice) {
            state.filterPrice.min= parseInt(minPrice)
            console.log("state.filterPrice");
            console.log(state.filterPrice);
        },
        UPDATE_MAX_PRICE_FILTER(state, maxPrice) {
            state.filterPrice.max= parseInt(maxPrice)
            console.log("state.filterPrice");
            console.log(state.filterPrice);
        },
        SELECTED_BRAND_PRODUCTS(state, brand) {
            state.selectedBrandProducts = brand;
            console.log(state.selectedBrandProducts);
        },
        //SetUser 
        SET_USER(state, user) {
            state.currentUser= user;
            state.toggle_login_modal = false;
            state.body.classList.remove("overflowhidden-body");
            console.log(state.currentUser);
        },
        //End--------- SetUser 
        
        SET_USER_INFO(state, userInfo) {
            state.userInfo= userInfo;
            console.log('userInfo');
            console.log(state.userInfo);
        },
        
        // ClearUser 
        CLEAR_USER(state) {
            state.currentUser= null;
        }, 
        //End--------- ClearUser 
    },

    // ---------------   Actions   --------------------
    actions: {
        loadPosts({ commit }) {
            axios
                .get("https://dummyjson.com/posts", {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("LOAD_POSTS", response.data);
                });
        },
        getSinglePost({ commit }, postId) {
            console.log("action single post");
            axios
                .get("https://dummyjson.com/posts/" + postId, {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("GET_SINGLE_POST", response.data);
                });
        },
        loadProducts({ commit }) {
            axios
                .get("https://dummyjson.com/products", {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("LOAD_PRODUCTS", response.data);
                });
        },
        loadProductsCategories({ commit }) {
            axios
                .get("https://dummyjson.com/products/categories", {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("LOAD_PRODUCTS_CATEGORIES", response.data);
                });
        },
        getSingleProduct({ commit }, productId) {
            axios
                .get("https://dummyjson.com/products/" + productId, {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("GET_SINGLE_PRODUCT", response.data);
                });
        },
        getProductsofCategory({ commit }, category) {
            axios
                .get("https://dummyjson.com/products/category/" + category, {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    commit("LOAD_PRODUCTS", response.data);
                });
        },        
        register({  commit }, userData) {
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then(response=> {
                let userId= auth.currentUser.uid
                set(ref(db, 'users/'+ userId), {
                    firstName: userData.fname,
                    lastName: userData.lname,
                    email: userData.email,
                    phone: 0,
                    address: {
                        address: "",
                        city: "",
                        postalCode: "",
                        state: ""
                    },
                    wishlist: [1,2,3],
                    orders: {

                    },
                    cart: {

                    },
                });                 
                commit("SET_USER", response.user);
            })
            .catch(error=> {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                      alert("Email already in use")
                      break;
                    case 'auth/invalid-email':
                      alert("Invalid Email")
                      break;
                    case 'auth/operation-not-allowed':
                      alert("Operation not allowes")
                      break;
                    case 'auth/weak-password':
                      alert("Week Password")
                      break;
                  
                    default:
                      alert("Something went Wrong")
                      
                  }
                  return
            })
            
        },
        login({ commit }, userData) {
            signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then(response=> {
                commit("SET_USER", response.user);
                let userId= auth.currentUser.uid
                onValue(ref(db, 'users/'+ userId), (snapshot) => {
                    const userInfo = snapshot.val();
                    commit('SET_USER_INFO', userInfo)
                });
            })
            .catch(error=> {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert("User not Found")
                        break;
                    case 'auth/wrong-password':
                        alert("Wrong Password")
                        break;
                    
                    default:
                        alert("Something went Wrong")                      
                  }
                  return
            })
            
        },

        //Logout Firebase Auth
        logOut({ commit }) {
            console.log('logout');
            signOut(auth).then(res=> {
                commit("CLEAR_USER");
            })    
        },
        //End--------- Logout Firebase Auth
        
        // Check User Logged In
        handleAuthStateChange({commit}) {
            console.log('fetch userrrrrrr');
            auth.onAuthStateChanged(user=> {
                if(user) {
                    commit("SET_USER", user);
                    let userId= auth.currentUser.uid
                    onValue(ref(db, 'users/'+ userId), (snapshot) => {
                        const userInfo = snapshot.val();
                        commit('SET_USER_INFO', userInfo)
                    });
                }else {
                    console.log('user not logged in');
                    commit("CLEAR_USER");
                }
              })
        },
        //End--------- Check User Logged In
      
    },

    // ---------------   Modules   --------------------
    modules: {},
});
