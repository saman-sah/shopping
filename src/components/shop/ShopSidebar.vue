<template>
  <!--Sidebar-->
            	<div class="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
					<div class="closeFilter d-block d-md-none d-lg-none"><i class="icon icon anm anm-times-l"></i></div>
					<div class="sidebar_tags">
						<!--Categories-->
						<div class="sidebar_widget categories filter-widget">
							<div class="widget-title"><h2>Categories</h2></div>
							<div class="widget-content" style="">
								<ul class="sidebar_categories">
									<li class="lvl-1">
										<router-link to="/shop"  @click="loadProducts" class="site-nav">
											All Categories
										</router-link>
									</li>
									<li v-for="(category, index) in productCategories" 
                                    :key="index" 
									class="lvl-1">
										<router-link :to="'/shop/'+category" @click="getProductsofCategory(category)" class="site-nav">
											{{ category }}
										</router-link>
									</li>
								</ul>
							</div>
						</div>
						<!--Categories-->
						<!--Price Filter-->
						<div class="sidebar_widget filterBox filter-widget">
							<div class="widget-title">
								<h2>Price</h2>
							</div>
							<form action="#" method="post" class="price-filter">
								<div id="slider-range"></div>
								<div class="row">
									<div class="col-6">
										<p class="no-margin">
											<input :value="filterPrice.min" 
											@input="updateMinPriceFilter($event.target.value)" 
											id="min_price_filter" type="number">
											<!-- <input v-model="filterPrice.min" id="min_price_filter" type="number"> -->
										</p>
									</div>
									<div class="col-6">
										<p class="no-margin">
											<input :value="filterPrice.max" 
											@input="updateMaxPriceFilter($event.target.value)" 
											id="min_price_filter" type="number">
											<!-- <input v-model="filterPrice.max" id="max_price_filter" type="number"> -->
										</p>
									</div>
									<div class="col-md-12 mt-4">
										<MultiRangeSlider
											baseClassName="multi-range-slider"
											:min="0"
											:max="maxProdcutPrices"
											:step="1"
											:ruler="false"
											:label="true"
											:minValue="filterPrice.min"
											:maxValue="filterPrice.max"
											@input="UpdateValues"
										/>
									</div>
								</div>
							</form>
						</div>
						<!--End Price Filter-->
						<!--Brand-->
						<div class="sidebar_widget filterBox filter-widget brand-filter">
							<div class="widget-title"><h2>Brands</h2></div>
							<ul v-if="productsBrand && productsBrand.length">
								<li v-for="(brand, index) in productsBrand" :key="index+1">
								  <input type="checkbox" :value="brand" v-model="selectedBrandProducts" :id="'check'+ index">
								  <label :for="'check'+ index"><span><span></span></span>
								  	{{ brand}}
								  </label>
								</li>
							</ul>
						</div>
						<!--End Brand-->
						<!--Popular Products-->
						<div class="sidebar_widget sidePro">
							<div class="widget-title"><h2>Popular Products</h2></div>
							<div class="widget-content">
								<div class="sideProSlider grid-products">
									<div class="item">
										<!-- start product image -->
										<div class="product-image">
											<!-- start product image -->
											<a href="product-layout1.html" class="product-img">
												<!-- image -->
												<img class="primary blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
												<!-- End image -->
												<!-- Hover image -->
												<img class="hover blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
												<!-- End hover image -->
											</a>
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
												<a href="product-layout1.html">Martha Knit Top</a>
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
									<div class="item">
									<!-- start product image -->
									<div class="product-image">
										<!-- start product image -->
										<a href="product-layout1.html" class="product-img">
											<!-- image -->
											<img class="primary blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
											<!-- End image -->
											<!-- Hover image -->
											<img class="hover blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
											<!-- End hover image -->
										</a>
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
											<a href="product-layout1.html">Innerbloom Puffer Jacket</a>
										</div>
										<!-- End product name -->
										<!-- product price -->
										<div class="product-price">
											<span class="price">$199.01</span>
										</div>
										<!-- End product price -->
										<!--Product Review-->
										<div class="product-review">
											<i class="font-13 fa fa-star"></i>
											<i class="font-13 fa fa-star"></i>
											<i class="font-13 fa fa-star"></i>
											<i class="font-13 fa fa-star"></i>
											<i class="font-13 fa fa-star"></i>
										</div>
										<!--End Product Review-->
										<!-- Color Variant -->
										<ul class="swatches">
											<li class="swatch small rounded black"><span class="tooltip-label">Black</span></li>
											<li class="swatch small rounded navy"><span class="tooltip-label">Navy</span></li>
											<li class="swatch small rounded purple"><span class="tooltip-label">Purple</span></li>
										</ul>
										<!-- End Variant -->
									</div>
									<!-- End product details -->
								</div>
									<div class="item">
										<!-- start product image -->
										<div class="product-image">
											<!-- start product image -->
											<a href="product-layout1.html" class="product-img">
												<!-- image -->
												<img class="primary blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
												<!-- End image -->
												<!-- Hover image -->
												<img class="hover blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="assets/images/product-images/product1.jpg" alt="" title="">
												<!-- End hover image -->
											</a>
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
												<a href="product-layout1.html">Button Up Top Black</a>
											</div>
											<!-- End product name -->
											<!-- product price -->
											<div class="product-price">
												<span class="price">$99.01</span>
											</div>
											<!-- End product price -->
											<!--Product Review-->
											<div class="product-review">
												<i class="font-13 fa fa-star"></i>
												<i class="font-13 fa fa-star"></i>
												<i class="font-13 fa fa-star-o"></i>
												<i class="font-13 fa fa-star-o"></i>
												<i class="font-13 fa fa-star-o"></i>
											</div>
											<!--End Product Review-->
										   <!-- Color Variant -->
											<ul class="swatches">
												<li class="swatch small rounded red"><span class="tooltip-label">red</span></li>
												<li class="swatch small rounded orange"><span class="tooltip-label">orange</span></li>
												<li class="swatch small rounded yellow"><span class="tooltip-label">yellow</span></li>
											</ul>
											<!-- End Variant -->
										</div>
										<!-- End product details -->
									</div>
								</div>
							</div>
						</div>

						<!--End Popular Products-->
						
					</div>
				</div>
				<!--End Sidebar-->
</template>

<script>
import { mapActions, mapState } from "vuex";
import MultiRangeSlider from "multi-range-slider-vue";
export default {
	components: {
		MultiRangeSlider
	},
	computed: {
        ...mapState([
            'productCategories',
			'productsBrand',
			'filterPrice',
			'maxProdcutPrices'
        ]),
		selectedBrandProducts: {
            get () {				
                return this.$store.state.selectedBrandProducts
            },
            set (value) {
                this.$store.commit('SELECTED_BRAND_PRODUCTS', value)
            }
        }
    },
    methods: {
		UpdateValues(e) {
			this.updateMinPriceFilter(e.minValue)
			this.updateMaxPriceFilter(e.maxValue) 
		},
		updateMinPriceFilter(value) {
			this.$store.commit('UPDATE_MIN_PRICE_FILTER', value);

		},
		updateMaxPriceFilter(value) {
			this.$store.commit('UPDATE_MAX_PRICE_FILTER', value);
		},
        ...mapActions({
            getProductsofCategory: 'getProductsofCategory',
            loadProducts: 'loadProducts'
        }),
    },
}
</script>

<style>
.multi-range-slider {
  border: none;
  box-shadow: none;
}
.multi-range-slider .bar-inner {
    background-color: #000000;
}
</style>