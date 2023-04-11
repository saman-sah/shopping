<template>
  <!--Product Tabs-->
            <div class="tabs-listing tab-accordian-style">
                <div class="tab-container">
                    <h3 class="acor-ttl active" rel="tab1">Product Details</h3>
                    <div id="tab1" class="tab-content">
                        <div class="product-description rte">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-8 col-lg-8 mb-4">
                                    <h3>Product Details</h3>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <h3>Image-Product Details</h3>
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
</template>

<script>
export default {

}
</script>

<style>

</style>