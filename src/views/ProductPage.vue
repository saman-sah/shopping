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
            <div class="product-detail-container product-single-style2">
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
            <div class="tabs-listing tab-accordian-style">
                <div class="tab-container">
                    <h3 class="acor-ttl active" rel="tab1">Product Details</h3>
                    <div id="tab1" class="tab-content">
                        <div class="product-description rte">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8 mb-4">
                                    <h3>Specification</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <ul>
                                        <li>High-neck style</li>
                                        <li>Drop shoulders</li>
                                        <li>Flared cuffs</li>
                                        <li>Asymmetrical hem</li>
                                    </ul>
                                    <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
                                    <p>You can change the position of any sections such as slider, banner, products, collection and so on by just dragging and dropping.&nbsp;</p>
                                    <h3>Lorem Ipsum is not simply random text.</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    <p>Change colors, fonts, banners, megamenus and more. Preview changes are live before saving them.</p>
                                    <h3>1914 translation by H. Rackham</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <!-- <img data-src="assets/images/detail-img.jpg" src="assets/images/detail-img.jpg" alt="" /> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="acor-ttl" rel="tab2">Product Reviews</h3>
                    <div id="tab2" class="tab-content">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                <div class="spr-form clearfix">
                                    <form method="post" action="#" id="new-review-form" class="new-review-form">
                                        <h3 class="spr-form-title">Write Your Own Review</h3>
                                        <fieldset class="spr-form-contact">
                                            <div class="spr-form-review-rating">
                                                <label class="spr-form-label">How do you rate this product?<span class="required">*</span></label>
                                                <div class="spr-form-input spr-starrating">
                                                  <div class="product-review"><a class="reviewLink" href="#"><i class="fa fa-star-o"></i><i class="font-13 fa fa-star-o"></i><i class="font-13 fa fa-star-o"></i><i class="font-13 fa fa-star-o"></i><i class="font-13 fa fa-star-o"></i></a></div>
                                                </div>
                                            </div>
                                            <div class="spr-form-contact-name">
                                              <label class="spr-form-label" for="name">What's your nickname?<span class="required">*</span></label>
                                              <input class="spr-form-input spr-form-input-text" type="text" name="name" value="">
                                            </div>
                                            <div class="spr-form-contact-email">
                                              <label class="spr-form-label" for="email">Email Address<span class="required">*</span></label>
                                              <input class="spr-form-input spr-form-input-email " id="email" type="email" name="email" value="">
                                            </div>
                                        </fieldset>
                                        <fieldset class="spr-form-review">
                                          <div class="spr-form-review-title">
                                            <label class="spr-form-label" for="review">Review Title</label>
                                            <input class="spr-form-input spr-form-input-text " id="review" type="text" name="review" value="">
                                          </div>

                                          <div class="spr-form-review-body">
                                            <label class="spr-form-label" for="message">Body of Review <span class="spr-form-review-body-charactersremaining">(1500) characters remaining</span></label>
                                            <div class="spr-form-input">
                                              <textarea class="spr-form-input spr-form-input-textarea " id="message" name="message" rows="5"></textarea>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <div class="spr-form-actions">
                                            <input type="submit" class="spr-button spr-button-primary button button-primary btn btn-primary" value="Submit Review">
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="spr-reviews">
                                    <h3 class="spr-form-title">Customer Reviews</h3>
                                    <div class="review-inner">
                                    <div class="spr-review">
                                        <div class="spr-review-header">
                                            <span class="product-review spr-starratings spr-review-header-starratings"><span class="reviewLink"><i class="fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star-o"></i><i class="font-13 fa fa-star-o"></i></span></span>
                                            <h3 class="spr-review-header-title">Lorem ipsum dolor sit amet</h3>
                                            <span class="spr-review-header-byline"><strong>dsacc</strong> on <strong>Apr 09, 2019</strong></span>
                                        </div>
                                        <div class="spr-review-content">
                                            <p class="spr-review-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div class="spr-review">
                                      <div class="spr-review-header">
                                        <span class="product-review spr-starratings spr-review-header-starratings"><span class="reviewLink"><i class="fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i></span></span>
                                        <h3 class="spr-review-header-title">Lorem Ipsum is simply dummy text of the printing</h3>
                                        <span class="spr-review-header-byline"><strong>larrydude</strong> on <strong>Dec 30, 2018</strong></span>
                                      </div>

                                      <div class="spr-review-content">
                                        <p class="spr-review-content-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                      </div>
                                    </div>
                                    <div class="spr-review">
                                      <div class="spr-review-header">
                                        <span class="product-review spr-starratings spr-review-header-starratings"><span class="reviewLink"><i class="fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i></span></span>
                                        <h3 class="spr-review-header-title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                                        <span class="spr-review-header-byline"><strong>quoctri1905</strong> on <strong>Dec 30, 2018</strong></span>
                                      </div>

                                      <div class="spr-review-content">
                                        <p class="spr-review-content-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.<br>
                                        <br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                      </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="acor-ttl" rel="tab3">Size Chart</h3>
                    <div id="tab3" class="tab-content">
                        <h3>Women's Body Sizing Chart</h3>
                        <table>
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <th>XS</th>
                              <th>S</th>
                              <th>M</th>
                              <th>L</th>
                              <th>XL</th>
                            </tr>
                            <tr>
                              <td>Chest</td>
                              <td>31" - 33"</td>
                              <td>33" - 35"</td>
                              <td>35" - 37"</td>
                              <td>37" - 39"</td>
                              <td>39" - 42"</td>
                            </tr>
                            <tr>
                              <td>Waist</td>
                              <td>24" - 26"</td>
                              <td>26" - 28"</td>
                              <td>28" - 30"</td>
                              <td>30" - 32"</td>
                              <td>32" - 35"</td>
                            </tr>
                            <tr>
                              <td>Hip</td>
                              <td>34" - 36"</td>
                              <td>36" - 38"</td>
                              <td>38" - 40"</td>
                              <td>40" - 42"</td>
                              <td>42" - 44"</td>
                            </tr>
                            <tr>
                              <td>Regular inseam</td>
                              <td>30"</td>
                              <td>30½"</td>
                              <td>31"</td>
                              <td>31½"</td>
                              <td>32"</td>
                            </tr>
                            <tr>
                              <td>Long (Tall) Inseam</td>
                              <td>31½"</td>
                              <td>32"</td>
                              <td>32½"</td>
                              <td>33"</td>
                              <td>33½"</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <h3 class="acor-ttl" rel="tab4">Shipping &amp; Returns</h3>
                    <div id="tab4" class="tab-content">
                        <h4>Returns Policy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
                        <h4>Shipping</h4>
                        <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus.  Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
                    </div>
                    <div id="tab5" class="tab-content">
                        <p>You can set different tabs for each products.</p>
                    </div>
                </div>
            </div>
            <!--End Product Tabs-->
            
            <!--Related Product Slider-->
            <div class="related-product grid-products">
                <div class="section-header">
                    <h2 class="section-header__title text-center h2"><span>Related Products</span></h2>
                    <p class="sub-heading">You can stop autoplay, increase/decrease aniamtion speed and number of grid to show and products from store admin.</p>
                </div>
                <div class="productPageSlider">
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product-detail1.jpg" src="../assets/images/product-images/product-detail1.jpg" alt="image" title="product"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product-detail1.jpg" src="../assets/images/product-images/product-detail1.jpg" alt="image" title="product"> -->
                                <!-- End hover image -->
                                <!-- product label -->
                                <div class="product-labels rectangular"><span class="lbl pr-label1">new</span></div>
                                <!-- End product label -->
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
                                <a href="product-layout1.html">Edna Dress</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$399.01</span>
                            </div>
                            <!-- End product price -->

                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star-o"></i>
                                <i class="font-13 fa fa-star-o"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product-detail1.jpg" src="../assets/images/product-images/product-detail1.jpg" alt="image" title="product"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product-detail1.jpg" src="../assets/images/product-images/product-detail1.jpg" alt="image" title="product"> -->
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
                                <a href="product-layout1.html">Elastic Waist Dress</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$748.00</span>
                            </div>
                            <!-- End product price -->
                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End hover image -->
                                <!-- product label -->
                                <div class="product-labels rectangular"><span class="lbl pr-label2">Hot</span></div>
                                <!-- End product label -->
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
                                <a href="#">3/4 Sleeve Kimono Dress</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$550.00</span>
                            </div>
                            <!-- End product price -->

                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star-o"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"/> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" /> -->
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
                                <a href="product-layout1.html">Cape Dress</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="old-price">$900.00</span>
                                <span class="price">$788.00</span>
                            </div>
                            <!-- End product price -->

                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star-o"></i>
                                <i class="font-13 fa fa-star-o"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"/> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image" /> -->
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
                                <a href="product-layout1.html">Paper Dress</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$550.00</span>
                            </div>
                            <!-- End product price -->

                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
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
                                <a href="product-layout1.html">Zipper Jacket</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$788.00</span>
                            </div>
                            <!-- End product price -->

                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star-o"></i>
                                <i class="font-13 fa fa-star-o"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
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
                                <a href="product-layout1.html">Zipper Jacket</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$748.00</span>
                            </div>
                            <!-- End product price -->
                            <div class="product-review">
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                                <i class="font-13 fa fa-star"></i>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                </div>
                </div>
            <!--End Related Product Slider-->

            <!--Recently Product Slider-->
            <div class="related-product grid-products">
                    <div class="section-header">
                        <h2 class="section-header__title text-center h2"><span>Recently Viewed Product</span></h2>
                        <p class="sub-heading">You can manage this section from store admin as describe in above section</p>
                    </div>
                    <div class="productPageSlider">
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image" title="product"> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image" title="product"> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
                            </div>
                            <!-- end product image -->
                            <!--start product details -->
                            <div class="product-details text-center">
                                <!-- product name -->
                                <div class="product-name">
                                    <a href="product-layout1.html">Backpack With Contrast Bow</a>
                                </div>
                                <!-- End product name -->
                                <!-- product price -->
                                <div class="product-price">
                                    <span class="price">$399.01</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
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
                                    <span class="price">$748.00</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
                            </div>
                            <!-- end product image -->

                            <!--start product details -->
                            <div class="product-details text-center">
                                <!-- product name -->
                                <div class="product-name">
                                    <a href="#">Martha Knit Top</a>
                                </div>
                                <!-- End product name -->
                                <!-- product price -->
                                <div class="product-price">
                                    <span class="price">$550.00</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"/> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image" /> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
                            </div>
                            <!-- end product image -->

                            <!--start product details -->
                            <div class="product-details text-center">
                                <!-- product name -->
                                <div class="product-name">
                                    <a href="product-layout1.html">Toledo Mules shoes</a>
                                </div>
                                <!-- End product name -->
                                <!-- product price -->
                                <div class="product-price">
                                    <span class="old-price">$900.00</span>
                                    <span class="price">$788.00</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"/> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image" /> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
                            </div>
                            <!-- end product image -->

                            <!--start product details -->
                            <div class="product-details text-center">
                                <!-- product name -->
                                <div class="product-name">
                                    <a href="product-layout1.html">Zipper Jacket</a>
                                </div>
                                <!-- End product name -->
                                <!-- product price -->
                                <div class="product-price">
                                    <span class="price">$550.00</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                            <!-- start product image -->
                            <div class="product-image">
                                <!-- start product image -->
                                <a href="product-layout1.html" class="product-img">
                                    <!-- image -->
                                    <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End image -->
                                    <!-- Hover image -->
                                    <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                    <!-- End hover image -->
                                </a>
                                <!-- end product image -->
                            </div>
                            <!-- end product image -->

                            <!--start product details -->
                            <div class="product-details text-center">
                                <!-- product name -->
                                <div class="product-name">
                                    <a href="product-layout1.html">Sunset Sleep Scarf Top</a>
                                </div>
                                <!-- End product name -->
                                <!-- product price -->
                                <div class="product-price">
                                    <span class="price">$788.00</span>
                                </div>
                                <!-- End product price -->
                            </div>
                            <!-- End product details -->
                        </div>
                        <div class="col-12 item">
                        <!-- start product image -->
                        <div class="product-image">
                            <!-- start product image -->
                            <a href="product-layout1.html" class="product-img">
                                <!-- image -->
                                <!-- <img class="primary blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End image -->
                                <!-- Hover image -->
                                <!-- <img class="hover blur-up lazyload" data-src="../assets/images/product-images/product1.jpg" src="../assets/images/product-images/product1.jpg" alt="image"> -->
                                <!-- End hover image -->
                            </a>
                            <!-- end product image -->
                        </div>
                        <!-- end product image -->

                        <!--start product details -->
                        <div class="product-details text-center">
                            <!-- product name -->
                            <div class="product-name">
                                <a href="product-layout1.html">Toledo Mules shoes</a>
                            </div>
                            <!-- End product name -->
                            <!-- product price -->
                            <div class="product-price">
                                <span class="price">$748.00</span>
                            </div>
                        </div>
                        <!-- End product details -->
                    </div>
                    </div>
                </div>
            <!--End Recently Product Slider-->
            
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
export default {
    components: {
        StarRating
    },
    mounted() {
        console.log(this.singleProduct);
        var productId=this.$route.params.id
        if(this.singleProduct == null) {
            this.getSingleProduct(productId)
        }
        	/*-----------------------------------
	  28. Tabs With Accordian Responsive
	-------------------------------------*/
	$(".tab_content").hide();
	$(".tab_content:first").show();	
	/* if in tab mode */
	$("ul.tabs li").on('click', function () {
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		
		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
		
		$('.productSlider').slick('refresh');
		$('.productSlider-style2').slick('refresh');
	});
	/* if in drawer mode */
	$(".tab_drawer_heading").on('click', function () {
		$(".tab_content").hide();
		var d_activeTab = $(this).attr("rel"); 
		$("#"+d_activeTab).fadeIn();
		
		$(".tab_drawer_heading").removeClass("d_active");
		$(this).addClass("d_active");
		
		$("ul.tabs li").removeClass("d_active");
		$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("d_active");
		
		$('.productSlider').slick('refresh');
		$('.productSlider-style2').slick('refresh');
	});
	$('ul.tabs li').last().addClass("tab_last");
	
	/*-----------------------------------
	  End Tabs With Accordian Responsive
	-------------------------------------*/

	/*----------------------------------
	  29. Product Tabs
	------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content:first").show();
	/* if in tab mode */
	$(".product-tabs li").on('click', function () {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		
		$(".product-tabs li").removeClass("active");
		$(this).addClass("active");
		
		$(this).fadeIn();
      	if($(window).width()<767) {
			var tabposition = $(this).offset();
          	$("html, body").animate({ scrollTop: tabposition.top-70 }, 700);
        } else{
          	$("html, body").animate({ scrollTop: tabposition.top-90 }, 700);
        }
	});
    
    $('.product-tabs li:first-child').addClass("active");
	$('.tab-container h3:first-child + .tab-content').show();
	
	/* if in drawer mode */
	$(".acor-ttl").on("click", function() {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();
		
		$(".acor-ttl").removeClass("active");
		$(this).addClass("active");
		if($(window).width()<767) {
		  var tabposition = $(this).offset();
		  $("html, body").animate({ scrollTop: tabposition.top }, 700);
		}
	});
	
	/* Below 767 Accordian style */
	$(".tabs-ac-style").on("click", function() {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();
		
		$(".tabs-ac-style").removeClass("active");
		$(this).addClass("active");

      	$(this).fadeIn();
		if($(window).width()<767) {
		  var tabposition = $(this).offset();
		  $("html, body").animate({ scrollTop: tabposition.top }, 700);
		}
	});
    },
    updated() {
        	/*-----------------------------------
	  28. Tabs With Accordian Responsive
	-------------------------------------*/
	$(".tab_content").hide();
	$(".tab_content:first").show();	
	/* if in tab mode */
	$("ul.tabs li").on('click', function () {
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		
		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
		
		$('.productSlider').slick('refresh');
		$('.productSlider-style2').slick('refresh');
	});
	/* if in drawer mode */
	$(".tab_drawer_heading").on('click', function () {
		$(".tab_content").hide();
		var d_activeTab = $(this).attr("rel"); 
		$("#"+d_activeTab).fadeIn();
		
		$(".tab_drawer_heading").removeClass("d_active");
		$(this).addClass("d_active");
		
		$("ul.tabs li").removeClass("d_active");
		$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("d_active");
		
		$('.productSlider').slick('refresh');
		$('.productSlider-style2').slick('refresh');
	});
	$('ul.tabs li').last().addClass("tab_last");
	
	/*-----------------------------------
	  End Tabs With Accordian Responsive
	-------------------------------------*/

	/*----------------------------------
	  29. Product Tabs
	------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content:first").show();
	/* if in tab mode */
	$(".product-tabs li").on('click', function () {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		
		$(".product-tabs li").removeClass("active");
		$(this).addClass("active");
		
		$(this).fadeIn();
      	if($(window).width()<767) {
			var tabposition = $(this).offset();
          	$("html, body").animate({ scrollTop: tabposition.top-70 }, 700);
        } else{
          	$("html, body").animate({ scrollTop: tabposition.top-90 }, 700);
        }
	});
    
    $('.product-tabs li:first-child').addClass("active");
	$('.tab-container h3:first-child + .tab-content').show();
	
	/* if in drawer mode */
	$(".acor-ttl").on("click", function() {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();
		
		$(".acor-ttl").removeClass("active");
		$(this).addClass("active");
		if($(window).width()<767) {
		  var tabposition = $(this).offset();
		  $("html, body").animate({ scrollTop: tabposition.top }, 700);
		}
	});
	
	/* Below 767 Accordian style */
	$(".tabs-ac-style").on("click", function() {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();
		
		$(".tabs-ac-style").removeClass("active");
		$(this).addClass("active");

      	$(this).fadeIn();
		if($(window).width()<767) {
		  var tabposition = $(this).offset();
		  $("html, body").animate({ scrollTop: tabposition.top }, 700);
		}
	});
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