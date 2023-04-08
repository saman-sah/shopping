<template>
    <div v-for="(product, index) in filteredProducts"
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
                <span class="price">{{ product.totalPrice }}</span>
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
        </div>
        <!-- End product details -->
    </div> 
</template>

<script>
import { mapActions,mapMutations,mapGetters, mapState } from "vuex";
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    computed: {
        ...mapState([
            'products',
            'filterProductText',
            'selectedBrandProducts'
        ]),
        ...mapGetters([
            
        ]),
        filteredProducts() {
            var count= 0;
            var Prdcts= [];
            // var prices= [];  
            var productsTitles= [];
            // Prdcts= this.products.filter((element)=>{
            //     prices.push(element.price);
            // })



            // Filter By Search Text
            let txt =this.filterProductText.toLowerCase();
            if(txt== ''){
                Prdcts= this.products
            }else {
                for (let i = 0; i < this.products.length; i++) {
                    if(count < 30) {
                        if((this.products[i].title).toLowerCase().indexOf(txt)== 0) {
                            Prdcts.push(this.products[i]);
                            productsTitles.push(this.products[i].title)
                            count++
                        }
                    }          
                }
                for (let i=0; i<this.products.length; i++){
                    const found = productsTitles.some(el => el === this.products[i].title);
                    if(count < 30){
                        if (~(this.products[i].title).toLowerCase().indexOf(txt) && !found){
                            Prdcts.push(this.products[i]);
                            count++;
                        }
                    }
                }
            }
        

            // Filter By Brands
            if(this.selectedBrandProducts.length !=0) {
                return Prdcts.filter(prdct=>  this.selectedBrandProducts.includes(prdct.brand))                
            }


        
            // let max_pr_price= Math.max(...prices)
            // this.range_min_price=0;
            // if(this.range_max_price!= max_pr_price){          
            // this.range_max_price= Math.max(...prices)
            // }
            // if(this.selected_min_price== null || this.selected_max_price== null){
            // this.selected_min_price= this.range_min_price;
            // this.selected_max_price= this.range_max_price
            // }
            // // if(this.selected_min_price!= this.range_min_price || this.selected_max_price!= this.range_max_price){
            // Prdcts= Prdcts.filter((element)=>{
            //     if(element.price >= this.selected_min_price && element.price <= this.selected_max_price) {
            //     return true
            //     }
                
            // })
            // }      
            console.log('products---------------------------------------------------');  
            console.log(Prdcts);  
            return Prdcts;
      }
    },
    mounted() {
        $(".product-load-more .item").slice(0, 21).show();
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

        console.log('filterProductText');
        console.log(this.filterProductText);    
    },
    updated() {
        $(".product-load-more .item").slice(0, 21).show();
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
    .vue-star-rating {
        justify-content: space-around;    
    }
</style>
