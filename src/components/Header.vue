<template>
  <!--Header-->
    <header class="header animated d-flex align-items-center header-3">
	    <div class="container-fluid">
            <div class="row">
            	<!--Mobile Icons-->
            	<div class="col-4 col-sm-4 col-md-4 d-block d-lg-none mobile-icons">
                    <!--Mobile Toggle-->
                    <button type="button" class="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                        <i class="icon anm anm-times-l"></i>
                        <i class="anm anm-bars-r"></i>
                    </button>
                    <!--End Mobile Toggle-->
                    <!--Search-->
                    <div class="site-search iconset">
                        <i class="icon anm anm-search-l"></i>
                    </div>
                    <!--End Search-->
                </div>
                <!--Mobile Icons-->
                <!--Desktop Logo-->
                <div class="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                    <router-link to="/">
                        <img src="assets/images/avon-logo.svg" alt="Samman's shopping website" title="Samman's shopping website" />
                    </router-link>
                </div>
                <!--End Desktop Logo-->
                <div class="col-1 col-sm-1 col-md-1 col-lg-8 align-self-center d-menu-col">
                    <!--Desktop Menu-->
                    <nav class="grid__item" id="AccessibleNav">
                        <ul id="siteNav" class="site-nav medium center hidearrow">
                            <li class="lvl1 parent megamenu mdropdown">
                                <router-link to="/">Home <i class="anm anm-angle-down-l"></i></router-link>                             
                            </li>
                            <li class="lvl1 parent megamenu">
                                <router-link to="/shop">Shop <i class="anm anm-angle-down-l"></i></router-link>
                                <div class="megamenu style2">
                                    <ul class="grid mmWrapper">
                                        <li class="grid__item one-whole">
                                            <ul class="grid">
                                                <li class="grid__item lvl-1 col-md-6 col-lg-6"><h4 class="site-nav lvl-1 menu-title">Shop Page</h4>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2">
                                                            <router-link to="/shop"  @click="loadProducts" class="site-nav lvl-2">All Categories</router-link>
                                                        </li>
                                                        <li class="lvl-2" 
                                                        v-for="(category, index) in productCategories" 
                                                        :key="index">
                                                            <router-link :to="'/shop/'+category" @click="getProductsofCategory(category)" class="site-nav lvl-2">{{ category }}</router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-6 col-lg-6"><h4 class="site-nav lvl-1 menu-title">Top Brands</h4>
                                                    <div class="menu-brand-logo">
                                                        <router-link @click="getProductsofCategory('womens-dresses')" to="/shop/womens-dresses">
                                                            <img src="https://source.unsplash.com/random/150x150/?fashion" alt=""/>
                                                        </router-link>
                                                        <router-link @click="getProductsofCategory('smartphones')" to="/shop/smartphones">
                                                            <img src="https://source.unsplash.com/random/150x150/?smartphone" alt=""/>
                                                        </router-link>
                                                        <router-link @click="getProductsofCategory('laptops')" to="/shop/laptops">
                                                            <img src="https://source.unsplash.com/random/150x150/?laptop" alt=""/>
                                                        </router-link>
                                                    </div>
                                                    <div class="menu-brand-logo">
                                                        <router-link @click="getProductsofCategory('furniture')" to="/shop/furniture">
                                                            <img src="https://source.unsplash.com/random/150x150/?furniture" alt=""/>
                                                        </router-link>
                                                        <router-link @click="getProductsofCategory('sunglasses')" to="/shop/sunglasses">
                                                            <img src="https://source.unsplash.com/random/150x150/?sunglasses" alt=""/>
                                                        </router-link>
                                                        <router-link @click="getProductsofCategory('skincare')" to="/shop/skincare">
                                                            <img src="https://source.unsplash.com/random/150x150/?skincare" alt=""/>
                                                        </router-link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="lvl1 parent dropdown">
                                <router-link to="/blog">Blog <i class="anm anm-angle-down-l"></i></router-link>                         
                            </li>
                            <li class="lvl1 parent dropdown">
                                <router-link to="/about">About <i class="anm anm-angle-down-l"></i></router-link>
                            </li>                        
                            <li class="lvl1 parent dropdown">
                                <router-link to="/contact">Contact <i class="anm anm-angle-down-l"></i></router-link>                          
                            </li>                        
                            <li class="lvl1 parent dropdown">
                                <router-link to="/faq">Faq <i class="anm anm-angle-down-l"></i></router-link>                          
                            </li>                        
                      </ul>
                    </nav>
                    <!--End Desktop Menu-->
                </div>
                <div class="col-4 col-sm-4 col-md-4 col-lg-2 align-self-center icons-col text-right">
                	<!--Search-->
                    <div class="site-search iconset">
                        <i class="icon anm anm-search-l"></i>
                    </div>
                    <div class="search-drawer">
                    	<div class="container">
                            <span class="closeSearch anm anm-times-l"></span>
                            <h3 class="title">What are you looking for?</h3>
                            <div class="block block-search">
                                <div class="block block-content">
                                    <form class="form minisearch" id="header-search" action="#" method="get">
                                        <label for="search" class="label"><span>Search</span></label>
                                        <div class="control">
                                            <div class="searchField">
                                            		<div class="search-category">
                                                        <select id="rgsearch-category">
                                                            <option value="0">All Categories</option>
                                                            <option value="4">Shop</option>
                                                            <option value="6">- All</option>
                                                            <option value="8">- Men</option>
                                                            <option value="10">- Women</option>
                                                            <option value="12">- Shoes</option>
                                                            <option value="14">- Blouses</option>
                                                            <option value="16">- Pullovers</option>
                                                            <option value="18">- Bags</option>
                                                            <option value="20">- Accessories</option>
                                                        </select>
                                                    </div>
                                                <div class="input-box">
                                                    <input id="search" type="text" name="q" value="" placeholder="Search for products, brands..." class="input-text">
                                                    <button type="submit" title="Search" class="action search" disabled=""><i class="icon anm anm-search-l"></i></button>
                                                </div>
                                            </div>
                                      </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Search-->
                    <!--Setting Dropdown-->
                    <div v-if="currentUser" class="login-register-icon">
                        <div class="dropdown">
                            
                            <button class="dropdown-toggle" type="button" id="dropdownUserMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon icon-user"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownUserMenuButton">
                                <router-link class="dropdown-item" to="/account">Acount</router-link>
                                <span class="dropdown-item" @click="logOut">Logout</span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="login-register-icon">
                        <div @click="showLoginModal" class="setting-link iconset">
                            <img src="@/assets/images/login.png" alt="">
                        </div>
                    </div>
                    
                    <!-- <template>
                        <div class="setting-link iconset">
                            <i class="icon icon-user"></i>
                        </div>
                        <div id="settingsBox">
                            <div class="customer-links">
                                <p><router-link to="#" class="btn">Profile</router-link></p>
                                <p><router-link to="#" class="btn">Account</router-link></p>
                                <p><router-link to="#" class="btn">Dashboard</router-link></p>
                                <p><router-link to="#" class="btn">Orders</router-link></p>
                            </div>
                        </div>
                    </template> -->
                    
                    <!--End Setting Dropdown-->
                    <!--Wishlist-->
                    <div class="wishlist-link iconset">
                        <router-link to="/wishlist">
                            <i class="icon anm anm-heart-l"></i>
                            <span class="wishlist-count">0</span>
                        </router-link>
                    </div>
                    <!--End Wishlist-->
                    <!--Minicart Dropdown-->
                    <div class="header-cart iconset">
                        <a href="#" class="site-header__cart btn-minicart" data-toggle="modal" data-target="#minicart-drawer">
                            <i class="icon anm anm-basket-l"></i>
                            <span class="site-cart-count">2</span>
                        </a>
                    </div>
                    <!--End Minicart Dropdown-->
                </div>
            </div>
        </div>
    </header>
    <!--End Header-->
    <!--Mobile Menu-->
    <div class="mobile-nav-wrapper" role="navigation">
		<div class="closemobileMenu"><i class="icon anm anm-times-l pull-right"></i> Close Menu</div>
        <ul id="MobileNav" class="mobile-nav">
        	<li class="lvl1 parent">
                <router-link to="/">Home </router-link>
            </li>
        	<li class="lvl1 parent megamenu">
                <router-link to="/shop">Shop <i class="anm anm-plus-l"></i></router-link>
                <ul>
                    <li v-for="(category, index) in productCategories" 
                    :key="index">
                        <router-link :to="'/shop/'+category" 
                        @click="getProductsofCategory(category)" 
                        class="site-nav">
                            {{ category }}
                        </router-link>
                    </li>
                </ul>
            </li>
        	<li class="lvl1 parent megamenu">
                <router-link to="/blog">
                    Blog 
                </router-link>
            </li>
            <li class="lvl1 parent megamenu">
                <router-link to="/about">
                    About 
                </router-link>        
            </li>
            <li class="lvl1 parent megamenu">
                <router-link to="/contact">
                    Contact 
                </router-link>          
            </li>
            <li class="lvl1 parent megamenu">
                <router-link to="/faq">
                    FAQ 
                </router-link>          
            </li>
        
        </ul>
	</div>
	<!--End Mobile Menu-->
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    mounted() {
        this.$customJS.setting_box();
        this.$customJS.mobile_menu();
    },
    computed: {
        ...mapState([
            'productCategories',
            'currentUser'
        ])
    },
    methods: {
        ...mapMutations({
            showLoginModal: 'SHOW_LOGIN_MODAL',
        }),
        ...mapActions({
            getProductsofCategory: 'getProductsofCategory',
            loadProducts: 'loadProducts',
            logOut: 'logOut'
        }),
    },
}
</script>

<style>

</style>