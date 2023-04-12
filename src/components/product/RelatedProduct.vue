<template>
    <!--Related Product Slider-->
    <div class="related-product grid-products mt-4">
        <div class="section-header">
            <h2 class="section-header__title text-center h2"><span>Related Products</span></h2>
        </div>
        <div class="productPageSlider" v-if="products">
            <template v-for="(product, index) in products" :key="index">
                <div v-if="index < 6" class="col-12 item">
                    <!-- start product image -->
                    <div class="product-image">
                        <!-- start product image -->
                        <router-link :to="'/product/'+product.id+'/'+ product.slug"
                        @click="getSingleProduct(product.id)"
                        class="product-img">
                            <!-- image -->
                            <img class="primary blur-up lazyload" :data-src="product.images[0]" :src="product.images[0]" alt="image">
                            <!-- End image -->
                            <!-- Hover image -->
                            <img class="hover blur-up lazyload" :data-src="product.images[1]" :src="product.images[1]" alt="image">
                            <!-- End hover image -->
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
                                    <a href="javascript:void(0)" title="Quick View" class="btn-icon quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
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
                            <router-link :to="'/product/'+product.id+'/'+ product.slug"
                            @click="getSingleProduct(product.id)">
                                {{ product.title }}
                            </router-link>
                        </div>
                        <!-- End product name -->
                        <!-- product price -->
                        <div class="product-price">
                            <span class="price">{{ product.totalPrice }}</span>
                        </div>
                        <!-- End product price -->
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
                    </div>
                    <!-- End product details -->
                </div>
            </template>
        </div>
    </div>
    <!--End Related Product Slider-->
</template>

<script>
import { mapActions,mapMutations, mapState } from "vuex";
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    computed: {
        ...mapState([
            'products'
        ]),
    },
    mounted() {
        this.$customJS.product_slider_ppage();
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

<style>

</style>