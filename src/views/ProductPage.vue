<template>
    <div id="page-content">  
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs">
                    <router-link to="/" title="Back Home Page">Home</router-link> 
                    <span aria-hidden="true">|</span> 
                    <router-link to="/shop" title="Back Shop Page">Products</router-link> 
                    <span aria-hidden="true">|</span> 
                    <span v-if="singleProduct">{{ singleProduct.title }}</span>
                </div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <div class="container" v-if="singleProduct">
            <div class="product-detail-container product-single-style2 mb-4">
				<div class="product-single">
					<div class="row">
                        <div class="col-lg-7 col-md-7 col-sm-12 col-12">
                                <div class="product-details-img">
                                    <div v-for="(image, index) in singleProduct.images"
                                    :key="index"
                                    class="zoompro-wrap product-zoom-right pl-20">
                                        <div class="zoompro-span">
                                            <img class="zoompro" :src="image" :data-zoom-image="image" alt="" />
                                        </div>
                                    </div>
                                    <div class="lightboximages">
                                        <a href="../assets/images/product-images/product1.jpg" data-size="1000x1280"></a>
                                    </div>
                                    
                                    <div class="social-sharing">
                                        <span class="label">Share:</span>
                                        <a target="_blank" href="#" class="btn btn--small btn--secondary btn--share share-facebook" title="Share on Facebook">
                                            <i class="anm anm-facebook-f" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Share</span>
                                        </a>
                                        <a target="_blank" href="#" class="btn btn--small btn--secondary btn--share share-twitter" title="Tweet on Twitter">
                                            <i class="fa fa-twitter" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Tweet</span>
                                        </a>
                                        <a href="#" title="Share on google+" class="btn btn--small btn--secondary btn--share" >
                                            <i class="fa fa-google-plus" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Google+</span>
                                        </a>
                                        <a target="_blank" href="#" class="btn btn--small btn--secondary btn--share share-pinterest" title="Pin on Pinterest">
                                            <i class="fa fa-pinterest" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Pin it</span>
                                        </a>
                                        <a href="#" class="btn btn--small btn--secondary btn--share share-pinterest" title="Share by Email" target="_blank">
                                            <i class="fa fa-envelope" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Email</span>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div class="product-sticky-style">
                                <div class="product-single__meta">
                                    <h1 class="product-single__title">{{ singleProduct.title}}</h1>
                                    <div class="prInfoRow">
                                        <div class="product-review">
                                            <a class="reviewLink" href="#tab2">
                                                <star-rating
                                                v-model:rating="singleProduct.rating"
                                                active-color="#ffb503"
                                                inactive-color="#ffffff"
                                                :increment="0.1"
                                                :border-width="2"
                                                border-color="#ffb503"
                                                :star-size="14"
                                                :read-only="true"
                                                :show-rating="false"
                                                :rounded-corners="true"
                                                :padding="2"
                                                />
                                                <!-- <span class="spr-badge-caption">6 reviews</span> -->
                                            </a>
                                        </div>
                                        <!-- <div class="product-sku">SKU: <span class="variant-sku">19115-rdxs</span></div> -->
                                        <div class="product-stock"> 
                                            <span v-if="singleProduct.stock > 0" class="instock">In Stock</span> 
                                            <span v-else class="outstock hide">Unavailable</span> 
                                        </div>
                                    </div>
                                    <p class="product-single__price product-single__price-product-template mt-4">
                                        <template v-if="singleProduct.discountPercentage > 0">
                                            <span class="visually-hidden">Regular price</span>
                                            <s id="ComparePrice-product-template">
                                                <span class="money">${{ singleProduct.price }}</span>
                                            </s>
                                            <span class="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                                <span id="ProductPrice-product-template">
                                                    <span class="money">${{ singleProduct.totalPrice }}</span>
                                                </span>
                                            </span>
                                        </template>
                                        <template v-else>
                                            <span class="visually-hidden">Regular price</span>
                                            <span class="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                                <span id="ProductPrice-product-template"><span class="money">${{ singleProduct.totalPrice }}</span></span>
                                            </span>
                                        </template>
                                        <span v-if="singleProduct.discountPercentage > 0" class="discount-badge"> 
                                            <span class="devider">|</span>&nbsp;
                                            <span>You Save&nbsp;</span>
                                            <span class="product-single__save-amount">
                                                <span class="money">${{ singleProduct.discount }}</span>
                                            </span>
                                            <span class="off">(<span>{{ singleProduct.discountPercentage }}</span>%)</span>
                                        </span>
                                          
                                    </p>
                                </div>
                                <div class="product-single__description rte mt-4">
                                    {{ singleProduct.description }}
                                </div>
                                <form method="post" action="" class="product-form product-form-product-template hidedropdown">                                                                      
                                    <p class="infolinks">
                                        <a class="wishlist add-to-wishlist" href="my-wishlist.html" title="Add to Wishlist"><i class="icon anm anm-heart-l" aria-hidden="true"></i> <span>Add to Wishlist</span></a>
                                        <a href="#ShippingInfo" class="mfp btn shippingInfo"><i class="anm anm-paper-l-plane"></i> Delivery &amp; Returns</a>
                                        <a href="#productInquiry" class="emaillink btn"> <i class="anm anm-envelope-l"></i> Enquiry</a>
                                    </p>
                                    <!-- Product Action -->
                                    <div class="product-action clearfix">
                                        <div class="product-form__item--quantity">
                                            <div class="wrapQtyBtn">
                                                <div class="qtyField">
                                                    <a class="qtyBtn minus" href="javascript:void(0);"><i class="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                    <input type="text" id="Quantity" name="quantity" value="1" class="product-form__input qty">
                                                    <a class="qtyBtn plus" href="javascript:void(0);"><i class="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>                                
                                        <div class="product-form__item--submit">
                                            <button type="button" name="add" class="btn product-form__cart-submit">
                                                <span>Add to cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- End Product Action -->
                                </form>
                                <!-- <p id="freeShipMsg" class="freeShipMsg mt-4" data-price="199"><i class="fa fa-truck" aria-hidden="true"></i> Getting Closer! Only <b class="freeShip"><span class="money" data-currency-usd="$199.00" data-currency="USD">$199.00</span></b> Away From <b>FREE SHIPPING!</b></p>
                                <p class="shippingMsg"><i class="fa fa-clock-o" aria-hidden="true"></i> Estimated Delivery Between <b id="fromDate">Wed. May 1</b> and <b id="toDate">Tue. May 7</b>.</p>
                                <div class="userViewMsg" data-user="20" data-time="11000">
                                    <i class="fa fa-users" aria-hidden="true"></i> <strong class="uersView">14</strong> People are Looking for this Product
                                </div> -->
                                <!-- <div class="type-product">
                                    <span>Type:</span> <a href="#">Dress</a>
                                </div> -->
                                <div v-if="Array.isArray(singleProduct.category) "
                                class="category-products-list mt-4">
                                    <span>Category:</span> 
                                    <router-link v-for="(category, index) in singleProduct.category" 
                                    :to="'/shop/'+ category"
                                    :key="index" class="ml-2">
                                        {{ category }}
                                    </router-link> 
                                </div>
                                <div v-else class="category-products-list mt-4">
                                    <span>Category:</span> 
                                    <router-link :to="'/shop/'+ singleProduct.category" class="ml-2">
                                        {{ singleProduct.category }}
                                    </router-link> 
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
            <!--Product Tabs-->
            <product-details-tabs></product-details-tabs>
            <!--End Product Tabs-->
            
            <!--Related Product Slider-->
            <related-product></related-product>
            <!--End Related Product Slider-->

            
        </div><!--End Body Container-->
        
        <!--Product Navigation-->
        <a href="#" class="product-nav prev-pro" title="Previous Product">
            <span class="details">Sunset Sleep Scarf Top<br>
                <span class="price">$49</span>
            </span>
            <!-- <span class="img"><img src="../assets/images/product-images/60x77.jpg" alt="" /></span> -->
        </a>
        <a href="#" class="product-nav next-pro" title="Next Product">
            <!-- <span class="img"><img src="../assets/images/product-images/60x77.jpg" alt=""></span> -->
            <span class="details">Toledo Mules shoes<br>
                <span class="price">$588</span>
            </span>
        </a>
        <!--End Product Navigation-->
    </div><!--End Page Wrapper-->
    
</template>

<script>
import { mapActions,mapMutations,mapGetters, mapState } from "vuex";
import StarRating from 'vue-star-rating'
import RelatedProduct from '../components/product/RelatedProduct.vue'
import ProductDetailsTabs from '../components/product/ProductDetailsTabs.vue'
export default {
    components: {
        StarRating,
        'related-product': RelatedProduct,
        'product-details-tabs': ProductDetailsTabs
    },
    mounted() {
        console.log(this.singleProduct);
        var productId=this.$route.params.id
        if(this.singleProduct == null) {
            this.getSingleProduct(productId)
        }
    	this.$customJS.product_page_tabs();
    },
    updated() {
        this.$customJS.product_page_tabs();
    },
    computed: {
        ...mapState([
            'singleProduct'
        ]),
        // Getters into computed
        ...mapGetters([
        ])
    },
    methods: {
        ...mapMutations({
            
        }),
        ...mapActions({
            getSingleProduct: 'getSingleProduct'
        })
    },
}
</script>

<style scoped>
    .product-detail-container .prInfoRow .product-review > a {
        display: flex;
    }
</style>