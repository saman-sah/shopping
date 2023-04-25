<template>
      <div id="page-content" class="error-404-page">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs">
                    <router-link to="/" title="Back to the home page">Home</router-link> 
                    <span aria-hidden="true">|</span>
                     <span>404 Error Page</span>
                </div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <div class="container">
            <div class="row">
            	<div class="col-12 text-center">
                	<div class="error-content">
                        <img src="assets/images/error-img.jpg" alt=""/>
                        <div class="page-title"><h1>404 Page Not Found</h1></div>
                        <p>The page you requested does not exist.</p>
                        <p>
                            <router-link to="/shop" class="btn btn--has-icon-after">Continue shopping</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div><!--End Body Container-->
    </div><!--End Page Wrapper-->
    
</template>

<script>
export default {

}
</script>

<style>

</style>