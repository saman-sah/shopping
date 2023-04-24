<template>
      <div id="page-content">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a> <span aria-hidden="true">|</span> <span>My Account</span></div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <div class="container">
        	<div class="page-title"><h1>My Account</h1></div>
            <div class="dashboard-upper-info">
            	<div class="row align-items-center no-gutters">
                <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="d-single-info">
                        <p class="user-name">Hello <span class="font-weight-600">yourmail@info</span></p>
                        <p>(not yourmail@info? <a class="font-weight-600" href="index.html">Log Out</a>)</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12">
                    <div class="d-single-info">
                        <p>Need Assistance? Customer service at.</p>
                        <p>admin@yoursite.com.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="d-single-info">
                        <p>E-mail them at </p>
                        <p>support@yoursite.com</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-12">
                    <div class="d-single-info text-lg-center">
                        <a class="view-cart" href="cart-style1.html"><i class="icon anm anm-bag-l"></i> View Cart</a>
                    </div>
                </div>
            </div>
	        </div>
            <div class="row mb-5">
                <div class="col-xl-2 col-lg-2 col-md-12 md-margin-20px-bottom">
                    <!-- Nav tabs -->
                    <ul class="nav flex-column dashboard-list" role="tablist">
                        <li @click="selected_tab_account='orders-tab'">
                            <router-link to="#orders">
                                Orders
                            </router-link>
                        </li>
                        <li @click="selected_tab_account='addresses-tab'">
                            <router-link to="#addresses">
                                Addresses
                            </router-link>
                        </li>
                        <li @click="selected_tab_account='profile-tab'">
                            <router-link to="#profile">
                                Account details
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="nav-link" @click="logOut">logout</router-link>
                        </li>
                    </ul>
                    <!-- End Nav tabs -->
                </div>

                <div class="col-xs-10 col-lg-10 col-md-12">
                    <!-- Tab panes -->
                    <div class="tab-content dashboard-content padding-30px-all md-padding-15px-all" style="">
                        <component :is="selected_tab_account"/>
                    </div>
                    <!-- End Tab panes -->
                </div>
            </div>
        </div><!--End Body Container-->
    </div><!--End Page Wrapper-->
</template>

<script>
import { mapActions, mapState } from "vuex";
import Profile from '../components/account/Profile.vue'
import Orders from '../components/account/Orders.vue'
import Addresses from '../components/account/Addresses.vue'
export default {
    data() {
        return {
            selected_tab_account:'orders-tab',
            tempUserInfo: {},
        }
    },
    components: {
        'profile-tab': Profile,
        'orders-tab': Orders,
        'addresses-tab': Addresses
    },
    computed: {
        ...mapState([
            'userInfo',
            'currentUser'
        ])
    },
    mounted() {
        if(this.$route.hash) {            
            let hash=this.$route.hash.substring(1)
            this.selected_tab_account=hash+'-tab';
        }
        if(this.userInfo) {
            this.tempUserInfo= this.userInfo
        }        
    },
    watch: {
        currentUser: {
            handler(user) {
                if(!user.auth) { 
                    this.$router.push('/')
                }
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        ...mapActions({
            logOut: 'logOut'
        }),
    },
}
</script>

<style>

</style>