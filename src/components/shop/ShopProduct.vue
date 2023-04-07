<template>
    <div v-for="(product, index) in products"
    :key="index"
    class="col-6 col-sm-6 col-md-4 col-lg-4 item">
        <!-- start product image -->
        <div class="product-image">
            <!-- start product image -->
            <router-link 
            :to="'/product/'+product.id+'/'+ product.slug"
            @click="getSingleProduct(product.id)" 
            class="product-img">
                <!-- image -->
                <img class="primary blur-up lazyload" :data-src="product.thumbnail" :src="product.thumbnail" alt="" title="">
                <!-- End image -->
                <!-- Hover image -->
                <img class="hover blur-up lazyload" :data-src="product.thumbnail" :src="product.thumbnail" alt="" title="">
                <!-- End hover image -->
                <!-- product label -->
                <div class="product-labels"><span class="lbl on-sale">Sale</span></div>
                <!-- End product label -->
            </router-link>
            <!-- end product image -->
            
            <!--Product Button-->
            <div class="button-set style1">
                <ul>
                    <li>
                        <!--Cart Button-->
                        <form class="add" action="cart-variant1.html" method="post">
                            <button class="btn-icon btn btn-addto-cart" type="button" tabindex="0">
                                <i class="icon anm anm-cart-l"></i>
                                <span class="tooltip-label">Add to Cart</span>
                            </button>
                        </form>
                        <!--end Cart Button-->
                    </li>
                    <li>
                        <!--Quick View Button-->
                        <a @click="showQuickViewModal(product)" href="javascript:void(0);" title="Quick View" class="btn-icon quick-view-popup">
                            <i class="icon anm anm-search-plus-l"></i>
                            <span class="tooltip-label">Quick View</span>
                        </a>
                        <!--End Quick View Button-->
                    </li>
                    <li>
                        <!--Wishlist Button-->
                        <div class="wishlist-btn">
                            <a class="btn-icon wishlist add-to-wishlist" href="my-wishlist.html">
                                <i class="icon anm anm-heart-l"></i>
                                <span class="tooltip-label">Add To Wishlist</span>
                            </a>
                        </div>
                        <!--End Wishlist Button-->
                    </li>
                    <li>
                        <!--Compare Button-->
                        <div class="compare-btn">
                            <a class="btn-icon compare add-to-compare" href="compare-style2.html" title="Add to Compare">
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
                <span class="price">$399.01</span>
            </div>
            <!-- End product price -->
            <!--Product Review-->
            <div class="product-review">
                <i class="font-13 fa fa-star"></i>
                <i class="font-13 fa fa-star"></i>
                <i class="font-13 fa fa-star"></i>
                <i class="font-13 fa fa-star"></i>
                <i class="font-13 fa fa-star-o"></i>
            </div>
            <!--End Product Review-->
            <!--Color Variant -->
            <ul class="swatches">
                <li class="swatch small rounded navy"><span class="tooltip-label">Navy</span></li>
                <li class="swatch small rounded green"><span class="tooltip-label">Green</span></li>
                <li class="swatch small rounded gray"><span class="tooltip-label">Gray</span></li>
                <li class="swatch small rounded aqua"><span class="tooltip-label">Aqua</span></li>
                <li class="swatch small rounded orange"><span class="tooltip-label">Orange</span></li>
            </ul>
            <!-- End Variant -->
        </div>
        <!-- End product details -->
    </div> 
</template>

<script>
import { mapActions,mapMutations,mapGetters, mapState } from "vuex";
export default {
    computed: {
        ...mapState([
            'products',
        ]),
        ...mapGetters([
            
        ])
    },
    mounted() {
        $(".product-load-more .item").slice(0, 18).show();
        $(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .item:hidden").slice(0, 4).slideDown();
            if ($(".product-load-more .item:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn loadMore">no more products</div>');
            }
        });
  
        $(".product-load-more .list-product").slice(0, 7).show();
        $(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .list-product:hidden").slice(0, 5).slideDown();
            if ($(".product-load-more .list-product:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn loadMore">no more products</div>');
            }
        });
    },
    methods: {
        ...mapMutations({
            showQuickviewModal: 'SHOW_QUICKVIE_MODAL',
            setQuickviewProduct :'SET_QUICKVIEW_PRODUCT'
        }),
        ...mapActions({
            getSingleProduct: 'getSingleProduct'
        }),
        showQuickViewModal(product) {
            this.showQuickviewModal();
            this.setQuickviewProduct(product);
        },
    },
}
</script>

<style scoped>
    .grid-products .item .product-image {
        height: 300px;
    }
</style>
