import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import loginForm from './components/modals/login.vue';
import _ from 'lodash';
import $store from './store'
export default {
    components: {
        'header-component': Header,
        'footer-component': Footer
    },
    created() {
        $store.dispatch('loadPosts')
        $store.dispatch('loadProducts', '')
        $store.dispatch('loadProductsCategories')
    },      
    mounted() {        
        // this.route_details= this.$route;
        // console.log("=============================");
        // console.log(this.posts);
    },
    updated() {
        // this.route_details= this.$route;
    },
    methods: {
        addToCart(product){
            var cartId= localStorage["cart_id"];         
            if(this.logedUser){
                var userCardId= this.logedUser.cart.cart_id;
            if(cartId){
                console.log(cartId && cartId.length);
                console.log('user+cartID');
                this.logedUser.cart.cart_id= localStorage["cart_id"];          
                console.log('addtocart');
            }else if(userCardId && userCardId.length) {
                console.log('user+User Cart ID+ !!storage');
                localStorage["cart_id"]= userCardId;  
                console.log('addtocart');
            }else {
              console.log('user+!!!!User Cart ID+ !!storage');
              localStorage["cart_id"]='cart_id'+Math.round(Math.random()*1000000);
              console.log(cartId);
              this.logedUser.cart.cart_id= localStorage["cart_id"]; 
              console.log('addtocart');
            }
            this.logedUser.cart.items.push(product.id);
            console.log(this.logedUser);
          }else {
            
            if(cartId && cartId.length){
              console.log(' storage');
              console.log('addtocart');
            }else {
              console.log(' !!!storage');
              localStorage["cart_id"]='cart_id'+Math.round(Math.random()*1000000);
              console.log('addtocart');
            }
          }
          
          console.log(product);          
        },
        addToWishlist(data) {
          if(data[0]== 'product'){
            if(this.logedUser.wishlists.products.includes(data[1])){
              this.logedUser.wishlists.products= _.without(this.logedUser.wishlists.products, data[1]);

            }else{
              this.logedUser.wishlists.products.push(data[1]);
            }
            this.updateUser(this.logedUser);
          }
        },
        logOut(){
          this.logedUser.cart.cart_id= '';
          localStorage["cart_id"]= '';
          this.logedUser= null;
          localStorage['access_token']= null;
          window.location.href = '/'
        },
        deleteUser(userId) {
          this.axios.delete(this.base_url+'users/'+ userId)
            .then(response => {
              console.log(response);
              this.loadUsers();
              // this.componentKey += 1;
            });
        },
        updateUser(user){
          if (user.action=='create'){
            this.axios.post(this.base_url+'users', {
              firstName: user.firstName,
              lastName: user.lastName,
              fullName: user.firstName +" "+ user.lastName,
              gender: 'male',
              email: user.email,
              phone: user.phone,
              username: user.username,
              password: user.password,              
              // image: https://robohash.org/hicveldicta.png
            })
            .then(response => {
              console.log(response);
              this.loadUsers();
              // this.componentKey += 1;
            });
          }else{
            this.axios.patch(this.base_url+'users/'+user.id, {
              firstName: user.firstName,
              lastName: user.lastName,
              fullName: user.firstName +" "+ user.lastName,
              gender: user.gender,
              email: user.email,
              phone: user.phone,
              username: user.username,
              password: user.password,
              wishlists: user.wishlists
              // image: https://robohash.org/hicveldicta.png
            })
            .then(response => {
              console.log(response);
              this.loadUsers();
              // this.componentKey += 1;
            });
          }
          
        },
        signIn(userTnfo){
          var userExist= null;
          userExist = this.users.find(item => item.email === userTnfo.email && item.password === userTnfo.pass)
    
          if (userExist) {
            // login success
            this.logedUser=userExist;
            localStorage['access_token']= this.logedUser.access_token;
          }
          else {
              // login failed
              console.log("login failed");
          }
        },        
        loadPosts() {
          this.axios.get(this.base_url+'posts', {
            headers: {
              Accept: "application/json",
            }
          })
          .then((response) => {
            this.posts= response.data;
            this.posts.forEach(post => {
              var slug = post.title.toLowerCase().replace(/[^\w-]+/g, '-');
              post.slug=slug
            });   
          })
          .catch((err)=>{
            console.log(err.message);
          })
          
          
        },
        loadProducts(catSlug) {
          this.loading_products=true;
          if(catSlug){

          }
          
          this.axios.get(this.base_url+'products', {
            headers: {
              Accept: "application/json",
            }
          })
          .then((response) => {
            this.products= response.data;
            this.products.forEach(product => {
              var slug = product.title.toLowerCase().replace(/[^\w-]+/g, '-');
              product.slug=slug
            });
            if(catSlug) {
              this.products= _.filter(this.products, ['category', catSlug])
            }
            
            this.updateKey++;
            this.loading_products=false;
          })
          
        },
        loadProductsCategories() {
          this.axios.get(this.base_url+'product_categories', {
            headers: {
              Accept: "application/json",
            }
          })
          .then((response) => {
            this.productCategories= response.data;
          })
          
        },
      },
}