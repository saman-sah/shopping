<template>
    <div id="page-content" class="contact-us-page2">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs">
                    <router-link to="/" title="Back Home Page">Home</router-link> 
                    <span aria-hidden="true">|</span> 
                    <span>Contact Page</span>
                </div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <div class="container">
        	<div class="page-title"><h1>Contact Us Style2</h1></div>
            <div class="row">
            	<div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                	<div class="contact-form-in">
                        <h2>Drop Us A Line</h2>
                        <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500 </p>
                        <div class="formFeilds contact-form form-vertical">
                          <form action="assets/php/mail.php" method="post" id="contact_form" class="contact-form">	
                          <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                	<input class="input-text" type="text" id="ContactFormName" name="name" placeholder="Name" value="" required>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                <input class="input-text" type="email" id="ContactFormEmail" name="email" placeholder="Email" value="" required>                        	
                                </div>
                            </div>
                          </div>
                          <div class="row">
                              <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                <input class="input-text" required type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number" value="">
                                </div>
                              </div>
                              <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                <input class="input-text" required type="text" id="ContactSubject" name="subject" placeholder="Subject" value="">
                                </div>
                              </div>
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                <textarea required rows="10" id="ContactFormMessage" name="message" placeholder="Your Message"></textarea>
                                </div>
                            </div>  
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" class="btn" value="Send Message">
                            </div>
                         </div>
                         </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                	<div class="contact-details">
                    	<div class="row">
                        	<div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <ul class="addressFooter">
                                    <li><i class="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p></li>
                                    <li class="phone"><i class="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                                    <li class="email"><i class="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                                </ul>
                                <ul class="list--inline site-footer__social-icons social-icons mb-5 mt-4">
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Facebook"><i class="icon icon-facebook"></i></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Twitter"><i class="icon icon-twitter"></i> <span class="icon__fallback-text">Twitter</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Pinterest"><i class="icon icon-pinterest"></i> <span class="icon__fallback-text">Pinterest</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Instagram"><i class="icon icon-instagram"></i> <span class="icon__fallback-text">Instagram</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Tumblr"><i class="icon icon-tumblr-alt"></i> <span class="icon__fallback-text">Tumblr</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="YouTube"><i class="icon icon-youtube"></i> <span class="icon__fallback-text">YouTube</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Vimeo"><i class="icon icon-vimeo-alt"></i> <span class="icon__fallback-text">Vimeo</span></a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                            	<div class="open-hours">
                                    <strong>Opening Hours</strong><br>
                                    Mon - Sat : 9am - 11pm<br>
                                    Sunday: 11am - 5pm
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map-section map">
                    	<iframe src="https://www.google.com/maps/embed?pb=" allowfullscreen="" height="395"></iframe>
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