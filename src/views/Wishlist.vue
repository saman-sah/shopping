<template>
  <div id="page-content" class="small-heading my-wishlist-page">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a> <span aria-hidden="true">|</span> <span>My Wishlit</span></div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <!--Page Title with Image-->
        <div class="page-title"><h1>My Wishlit</h1></div>
        <!--End Page Title with Image-->
        <div class="container">
            <div class="row">
				<!--Main Content-->
				<div class="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                	<form v-if="wishlistProducts">
                        <div class="wishlist-table table-content table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    	<th class="product-name text-center alt-font">Remove</th>
                                        <th class="product-price text-center alt-font"></th>
                                        <th class="product-name alt-font">Product</th>
                                        <th class="product-price text-center alt-font">Unit Price</th>
                                        <th class="stock-status text-center alt-font">Stock Status</th>
                                        <th class="product-subtotal text-center alt-font">Add to Cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in wishlistProducts" :key="index">
                                    	<td class="product-remove remove-product-wishlist text-center" valign="middle">
                                            <span @click="toggleWishlist(product.id)">
                                                <i class="icon icon anm anm-times-l"></i>
                                            </span>
                                        </td>
                                        <td class="product-thumbnail text-center">
                                            <router-link :to="'/product/'+product.id+'/'+ product.slug"
                                            @click="getSingleProduct(product.id)">
                                                <img :src="product.thumbnail" alt="" title="">
                                            </router-link>
                                        </td>
                                        <td class="product-name">
                                            <h4 class="no-margin">
                                                <router-link :to="'/product/'+product.id+'/'+ product.slug"
                                                @click="getSingleProduct(product.id)">
                                                    {{ product.title }}
                                                </router-link>
                                            </h4>
                                        </td>
                                        <td class="product-price text-center">
                                            <span class="amount">{{ product.totalPrice }}</span>
                                        </td>
                                        <td class="stock text-center">
                                            <span v-if="product.stock" class="in-stock">In stock</span>
                                            <span v-else class="out-stock">Out of stock</span>
                                        </td>
                                        <td class="product-subtotal text-center">
                                            <button type="button" class="btn btn-small">
                                                Add To Cart
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>                   
               	</div>
				<!--End Main Content-->
			</div>
        
        </div><!--End Body Container-->
        
    </div><!--End Page Wrapper-->
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'wishlistProducts'
        ])
    },
    methods: {
        ...mapActions({
            getSingleProduct: 'getSingleProduct',
             toggleWishlist: 'toggleWishlist'
        })
    },
}
</script>

<style>

</style>