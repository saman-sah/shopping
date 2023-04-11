<template>
    <!--New Arrivals-->
    <div class="section product-slider no-pb-section" v-if="$store.state.products && $store.state.products.length">
        <div class="section-header">
            <h2>New Arrivals</h2>
        </div>
        <div class="productSlider grid-products">
            <template v-for="(product, index) in $store.state.products" :key="product.id">
                <div class="col-12 item" v-if="index <10">
                    <!-- start product image -->
                    <div class="product-image">
                        <!-- start product image -->
                        <a href="product-layout1.html" class="product-img">
                            <!-- image -->
                            <img class="primary blur-up lazyload" :data-src="product.images[0]" :src="product.images[0]" alt="" title="">
                            <!-- End image -->
                            <!-- Hover image -->
                            <img class="hover blur-up lazyload" :data-src="product.images[1]" :src="product.images[1]" alt="" title="">
                            <!-- End hover image -->
                            <!-- product label -->
                            <div class="product-labels"><span class="lbl on-sale">Sale</span></div>
                            <!-- End product label -->
                        </a>
                        <!-- end product image -->
                        
                        <!--Product Button-->
                        <div class="button-set style1">
                            <ul>
                                <li>
                                    <!--Cart Button-->
                                    <form class="add" action="cart-variant1.html" method="post">
                                        <button class="btn-icon btn btn-addto-cart btn-square" type="button" tabindex="0">
                                            <i class="icon anm anm-cart-l"></i>
                                            <span class="tooltip-label">Add to Cart</span>
                                        </button>
                                    </form>
                                    <!--end Cart Button-->
                                </li>
                                <li>
                                    <!--Quick View Button-->
                                    <a href="javascript:void(0)" title="Quick View" class="btn-icon quick-view-popup quick-view btn-square" data-toggle="modal" data-target="#content_quickview">
                                        <i class="icon anm anm-search-plus-l"></i>
                                        <span class="tooltip-label">Quick View</span>
                                    </a>
                                    <!--End Quick View Button-->
                                </li>
                                <li>
                                    <!--Wishlist Button-->
                                    <div class="wishlist-btn">
                                        <a class="btn-icon wishlist add-to-wishlist btn-square" href="wishlist.html">
                                            <i class="icon anm anm-heart-l"></i>
                                            <span class="tooltip-label">Add To Wishlist</span>
                                        </a>
                                    </div>
                                    <!--End Wishlist Button-->
                                </li>
                                <li>
                                    <!--Compare Button-->
                                    <div class="compare-btn">
                                        <a class="btn-icon compare add-to-compare btn-square" href="compare-variant1.html" title="Add to Compare">
                                            <i class="icon icon-reload"></i>
                                            <span class="tooltip-label">Add to Compare</span>
                                        </a>
                                    </div>
                                    <!--End Compare Button-->
                                </li>
                            </ul>
                        </div>
                        <!--End Product Button-->
                    </div>
                    <!-- end product image -->

                    <!--start product details -->
                    <div class="product-details text-center">
                        
                        <!-- product name -->
                        <div class="product-name">
                            <a href="product-layout1.html">{{ product.title }}</a>
                        </div>
                        <!-- End product name -->
                        
                        <!-- product price -->
                        <div class="product-price">
                            <span class="price">${{ product.price}}</span>
                        </div>
                        <!-- End product price -->
                        
                        <!--Product Review-->
                        <div class="product-review">
                            <star-rating
                            v-model:rating="product.rating"
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
                        </div>
                        <!--End Product Review-->
                        
                        <!--Color Variant -->
                        <!-- <ul class="swatches">
                            <li class="swatch small rounded navy"><span class="tooltip-label">Navy</span></li>
                            <li class="swatch small rounded green"><span class="tooltip-label">Green</span></li>
                            <li class="swatch small rounded gray"><span class="tooltip-label">Gray</span></li>
                            <li class="swatch small rounded aqua"><span class="tooltip-label">Aqua</span></li>
                            <li class="swatch small rounded orange"><span class="tooltip-label">Orange</span></li>
                        </ul> -->
                        <!-- End Variant -->
                    </div>
                    <!-- End product details -->
                </div>
            </template>
            
            
        </div>
    </div>
    <!--End New Arrivals-->
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    mounted(){
        this.$customJS.product_slider();
    },
    updated(){
        this.$customJS.product_slider();
    }
}
</script>

<style scoped>
    .vue-star-rating {
        justify-content: space-around;    
    }
    .grid-products .item .product-image {
        height: 230px;
    }
</style>