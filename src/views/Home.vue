<template>   
    <div id="page-content" class="template-index index-demo3">        
    	<!--Home slider-->
        <div class="container-fluid">       
            <div class="slideshow slideshow-wrapper slideshow-carousel">
        	   <div class="home-slideshow-carousel">
                   <div class="slide">
                       <div class="img"><img class="blur-up lazyload" data-src="assets/images/slideshow-banner/dome3-banner1.jpg" src="assets/images/slideshow-banner/dome3-banner1.jpg" alt=" New Arrivals" title="New Arrivals" /></div>
                        <div class="details">
                            <div class="inner">
                                <h3 class="collection-grid-item__title">New Arrivals</h3>
                                <router-link class="btn" to="/shop/womens-dresses">View Collection</router-link>
                            </div>
                        </div>
                    </div>
                   <div class="slide">
                       <div class="img"><img class="blur-up lazyload" data-src="assets/images/slideshow-banner/dome3-banner2.jpg" src="assets/images/slideshow-banner/dome3-banner2.jpg" alt="Back in Stock" title="Back in Stock" /></div>
                        <div class="details">
                            <div class="inner">
                                <h3 class="collection-grid-item__title">Back in Stock</h3>
                                <router-link class="btn" to="/shop/smartphones">View Collection</router-link>
                            </div>
                        </div>
                    </div>
                   <div class="slide">
                        <div class="img"><img class="blur-up lazyload" data-src="assets/images/slideshow-banner/dome3-banner3.jpg" src="assets/images/slideshow-banner/dome3-banner3.jpg" alt="Weekend Fashion" title="Weekend Fashion" /></div>
                        <div class="details">
                            <div class="inner">
                                <h3 class="collection-grid-item__title">Weekend Fashion</h3>
                                <a class="btn" href="#">View Collection</a>
                            </div>
                        </div>
                    </div>
                   <div class="slide">
                       <div class="img"><img class="blur-up lazyload" data-src="assets/images/slideshow-banner/dome3-banner4.jpg" src="assets/images/slideshow-banner/dome3-banner4.jpg" alt="Shop Denims" title="Shop Denims" /></div>
                        <div class="details">
                            <div class="inner">
                                <h3 class="collection-grid-item__title">Shop Denims</h3>
                                <router-link class="btn" to="/shop/womens-dresses">View Collection</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Home slider-->
        
        <!--Body Container-->
        <div class="container">
            <!--Image Banner-->
            <div class="section imgBanners style2 no-pb-section">
                <div class="section-header">
                    <h2>Shop The Edit</h2>
                    <p>The easiest and fastest way to create grid banners.</p>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 img-banner-item">
                        <div class="imgBanner-grid-item">
                            <div class="inner">
                                <a href="#">
                                    <span class="img">
                                        <img class="blur-up lazyload" data-src="assets/images/collection-banner/demo3-collection-bnr1.jpg" src="assets/images/collection-banner/demo3-collection-bnr1.jpg" alt="Trend Alert" title="Trend Alert" />
                                    </span>
                                </a>
                                <div class="details w-50 center">
                                    <h3 class="title">Trend Alert</h3>
                                    <p> Vacation Must Have </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 img-banner-item">
                        <div class="imgBanner-grid-item">
                            <div class="inner">
                                <a href="#">
                                    <span class="img">
                                        <img class="blur-up lazyload" data-src="assets/images/collection-banner/demo3-collection-bnr2.jpg" src="assets/images/collection-banner/demo3-collection-bnr2.jpg" alt="Hot Occasion" title="Hot Occasion" />
                                    </span>
                                </a>
                                <div class="details w-50 center">
                                    <h3 class="title">Hot Occasion</h3>
                                    <p>Weekend Fashion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 img-banner-item">
                        <div class="imgBanner-grid-item">
                            <div class="inner btmleft">
                                <a href="#">
                                    <span class="img">
                                        <img class="blur-up lazyload" data-src="assets/images/collection-banner/demo3-collection-bnr3.jpg" src="assets/images/collection-banner/demo3-collection-bnr3.jpg" alt="" title=" " />
                                    </span>
                                </a>
                                <div class="details w-50 center">
                                    <h3 class="title">Meet The Best Html Template</h3>
                                    <p>Enjoy the flexibility of template and powerful features</p>
                                    <a href="#" class="btn">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Image Banner-->
            	
            <new-arrivals></new-arrivals>
        </div>
        
        <testimonial></testimonial>

        <!--Brand Logo Slider-->
        <brand-logo></brand-logo>
        <!--End Brand Logo Slider-->
        
        <div class="section info-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="simple-text text-center">
                            <a href="#">END OF SEASON SALE LIVE NOW | FLAT 50% OFF   |  WOMEN TOPS 50% OFF  |  MEN JEANS 30% OFF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--End Page Wrapper-->
</template>

<script>
import NewArrival from '../components/home/NewArrivals.vue'
import Testimonial from '../components/home/Testimonial.vue'
import BrandLogo from '../components/home/BrandLogo.vue'
export default {
    name: 'Home',
    components: {
        'new-arrivals': NewArrival,
        'testimonial': Testimonial,
        'brand-logo': BrandLogo
    },
    mounted() {
        this.$nextTick(function() {
            this.$customJS.home_slider_carousel();            
        })
        
    },
}
</script>
