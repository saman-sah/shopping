<template>
  <!--Testimonial Slider-->
        <div class="section testimonial-slider">
        	<div class="container">
                <div class="quote-wraper">
                    <!--Testimonial Slider Title-->
                    <div class="section-header text-center">
                        <h2 class="h2">Testimonial</h2>          
                    </div>
                    <!--End Testimonial Slider Title-->
                    <!--Testimonial Slider Items-->
                    <div class="quotes-slider">
                    	<div class="quotes-slide">
                            <blockquote class="quotes-slider__text text-center">             
                              <div class="rte-setting"><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p></div>
                              <p class="authour">Happy Customer</p>
                            </blockquote>
                        </div>
                        <div class="quotes-slide">
                            <blockquote class="quotes-slider__text text-center">             
                              <div class="rte-setting"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                              <p class="authour">Happy Customer</p>
                            </blockquote>
                        </div>
                        <div class="quotes-slide">
                            <blockquote class="quotes-slider__text text-center">             
                              <div class="rte-setting"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>
                              <p class="authour">Happy Customer</p>
                            </blockquote>
                        </div>
                    </div>
                    <!--Testimonial Slider Items-->
                </div>
            </div>
        </div>
        <!--End Testimonial Slider-->
</template>

<script>
export default {
  mounted() {  
    this.$nextTick(function() {
      this.$customJS.testimonial_slider();
    })  
  },

}
</script>

<style>

</style>