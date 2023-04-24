<template>
   <!--Footer-->
   	<div class="footer footer-3">
        <div class="footer-top clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 about-us-col">
                        <h4 class="h4">Contact Us</h4>
                        <p>55 Gallaxy Enque,<br>2568 steet, 23568 NY</p>
                        <p><b>Phone</b>: (440) 000 000 0000</p>
                        <p><b>Email</b>: <a href="mailto:sales@yousite.com">sales@yousite.com</a></p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                        <h4 class="h4">Informations</h4>
                        <ul>
                            <li><router-link to="/about">About us</router-link></li>
                            <li><router-link to="/contact">Contact Us</router-link></li>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <li><router-link to="#">FAQ's</router-link></li>
                            <li v-if="currentUser && currentUser.auth"
                            class="login-logout-links">
                                <span @click="logOut">LogOut</span>                                
                            </li>                            
                            <li v-else
                            class="login-logout-links">
                                <span @click="showLoginModal">Login</span>                                
                            </li>                            
                        </ul>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                        <h4 class="h4">Customer Services</h4>
                        <ul>                        
                            <li><router-link to="#">Privacy policy</router-link></li>
                            <li><router-link to="#">Terms &amp; condition</router-link></li>
                            <li><router-link to="#">My Account</router-link></li>
                            <li><router-link to="#">Orders and Returns</router-link></li>
                            <li><router-link to="#">Support Center</router-link></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 social-col">
                        <h4 class="h4">Stay Connected</h4>
                        <ul class="list--inline social-icons">
                            <li>
                                <a href="https://github.com/saman-sah" target="_blank">
                                    <i class="icon icon-github"></i> Github
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/saman-sahraei-91a9b118a/" target="_blank">
                                    <i class="icon icon-linkedin"></i> Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/saman__sahraei/" target="_blank">
                                    <i class="icon icon-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@saman__sahraei" target="_blank">
                                    <i class="icon icon-youtube"></i> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-3 newsletter-col">
                        <div class="display-table">
                            <div class="display-table-cell footer-newsletter">
                                <form action="#" method="post">
                                    <label class="h4">FOLLOW THE LATEST TREND AND STYLE</label>
                                    <p>Enter your email to receive daily news and get 20% off coupon for all items.</p>
                                    <div class="input-group">
                                        <input type="email" class="input-group__field newsletter-input" name="EMAIL" value="" placeholder="Email address" required>
                                        <span class="input-group__btn">
                                            <button type="submit" class="btn newsletter__submit" name="commit" id="Subscribe"><span class="newsletter__submit-text--large">Subscribe</span></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom clearfix">
            <div class="container-fluid">
                <div class="copytext">
                    &copy; 2020 Avone. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
    <!--End Footer-->
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    mounted() {
        this.$customJS.footer_dropdown();
    },
    computed: {
        ...mapState([
            'currentUser',
        ])
    },
    methods: {
        ...mapMutations({
            showLoginModal: 'SHOW_LOGIN_MODAL',
        }),
        ...mapActions({
            logOut: 'logOut'
        }),
    },
}
</script>
<style>

</style>