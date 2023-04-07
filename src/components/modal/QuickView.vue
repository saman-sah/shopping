<template>
    <!--Quickview Popup-->
	<div class="loadingBox"><div class="anm-spin"><i class="anm anm-spinner4"></i></div></div>
	<div class="modalOverly" @click.self="closeQuickviewModal"></div>
    <div id="quickView-modal" class="mfp-with-anim">
		<button title="Close (Esc)" type="button" class="mfp-close">×</button>
		<div class="row quickview-row">
			<div class="col-12 col-sm-6 col-md-6 col-lg-6 left-section-images">
				<div id="slider">
					<!-- model thumbnail -->
					<div id="myCarousel" class="carousel slide">
						<!-- image slide carousel items -->
						<div class="carousel-inner">
							<!-- slides-->
							<div v-for="(imageSrc, index) in quickviewProduct.images"
							:key="index+100"
							:class="['item', 'carousel-item', { 'active': index==0}]" :data-slide-number="index">
								<img :data-src="imageSrc" :src="imageSrc" alt="" title="">
							</div>
							<!-- End slides -->
						</div>
						<!-- End image slide carousel items -->
						<!-- model thumbnail image -->
						<div class="model-thumbnail-img">
							<!-- model thumbnail slide -->
							<ul class="carousel-indicators list-inline">
								<!-- slides -->
								<li v-for="(imageSrc, index) in quickviewProduct.images"
								:key="index"
								 class="list-inline-item active">
									<a :id="'carousel-selector-'+index" class="selected" :data-slide-to="index" data-target="#myCarousel">
										<img :data-src="imageSrc" :src="imageSrc" alt="" title="">
									</a>
								</li>
								<!-- End slides -->
							</ul>
							<!-- End model thumbnail slide -->
							<!-- arrow button -->
							<a class="carousel-control left" href="#myCarousel" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
							<a class="carousel-control right" href="#myCarousel" data-slide="next"><i class="fa fa-chevron-right"></i></a>
							<!-- End arrow button -->
						</div>
						<!-- End model thumbnail image -->
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-6 col-md-6 col-lg-6 right-section-details">
				<!-- <div class="product-brand"><a href="#">Charcoal</a></div> -->
				<h2 class="product-title">{{ quickviewProduct.title }}</h2>
				<div class="product-review">
					<div class="rating">
						<div class="product-review">
                            <star-rating
                            v-model:rating="quickviewProduct.rating"
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
                        </div>					</div>
					<div class="reviews"><span>5 Reviews</span></div>
				</div>
				<div class="product-info">
					<div class="product-stock"> 
						<span v-if="quickviewProduct.stock > 0" class="instock">In Stock</span> 
						<span v-else class="outstock">Unavailable</span> 
					</div>
					<div class="product-sku">SKU: <span class="variant-sku">19115-rdxs</span></div>
				</div>
				<div v-if="quickviewProduct.discountPercentage > 0" class="pricebox">
					<span class="price old-price">{{ quickviewProduct.discount }}</span>
					<span class="price">{{ quickviewProduct.totalPrice }}</span>
				</div>
				<div v-else class="pricebox">
					<span class="price">{{ quickviewProduct.price }}</span>
				</div>
				<div class="sort-description">{{ quickviewProduct.description }}</div>
				<form method="post" action="#" id="product_form--option" class="product-form">
					<div class="product-options">
						<div class="product-action clearfix">
							<div class="quantity">
								<div class="wrapQtyBtn">
									<div class="qtyField">
										<a class="qtyBtn minus" href="javascript:void(0);"><i class="fa anm anm-minus-r" aria-hidden="true"></i></a>
										<input type="text" id="Quantity" name="quantity" value="1" class="product-form__input qty">
										<a class="qtyBtn plus" href="javascript:void(0);"><i class="fa anm anm-plus-r" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>                                
							<div class="add-to-cart">
								<button type="button" class="btn button-cart">
									<span>Add to cart</span>
								</button>
							</div>
						</div>
					</div>
				</form>
				<div class="wishlist-btn">
					<a class="wishlist add-to-wishlist" href="#" title="Add to Wishlist"><i class="icon anm anm-heart-l" aria-hidden="true"></i> <span>Add to Wishlist</span></a>
				</div>
				<div class="share-icon">
					<span>Share:</span>
					<ul class="list--inline social-icons">
						<li><a href="#" target="_blank"><i class="icon icon-facebook"></i></a></li>
						<li><a href="#" target="_blank"><i class="icon icon-twitter"></i></a></li>
						<li><a href="#" target="_blank"><i class="icon icon-pinterest"></i></a></li>
						<li><a href="#" target="_blank"><i class="icon icon-instagram"></i></a></li>
						<li><a href="#" target="_blank"><i class="icon icon-youtube"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!--End Quickview Popup-->
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
            'quickviewProduct',
        ]),
    },
	methods: {
        ...mapMutations({
            closeQuickviewModal: 'CLOSE_QUICKVIE_MODAL'
        }),
    },
}
</script>

<style scoped>
#slider,
#myCarousel,
.item.carousel-item,
.left-section-images,
.right-section-details,
.quickview-row {
	height: 100%;
}
.carousel-inner {
    height: 75%;
}
.carousel-item  img {
	height: 100%;
    width: 100%;
    object-fit: cover;
}

/* Thumbnail Images */
.model-thumbnail-img {
    height: 20%;
}
.model-thumbnail-img .carousel-indicators {
	height: 100%;
}
.model-thumbnail-img .carousel-indicators > li {
    width: auto;
    height: 100%;
}
.model-thumbnail-img .carousel-indicators > li > a {
    width: 100%;
    height: 100%;
	display: block;
}
.model-thumbnail-img .carousel-indicators > li > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#quickView-modal .sort-description {
    height: 135px;
	overflow-y: auto;
}
</style>