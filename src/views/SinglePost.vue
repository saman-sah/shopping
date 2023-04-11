<template>
  <div id="page-content">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs">
                    <router-link to="/" title="Back Home Page">Home</router-link> 
                    <span aria-hidden="true">|</span> 
                    <router-link to="/shop" title="Back Shop Page">Blog</router-link> 
                    <span aria-hidden="true">|</span> 
                    <span v-if="singlePost">{{ singlePost.title }}</span>
                </div>
            </div>
        </div>
        <!--End Breadcrumbs-->
		<div class="page-title"><h1>Blog Single Detail Page</h1></div>
        <div class="container">
			<div class="article" v-if="singlePost"> 
				<!-- Article Image --> 
				<div class="article_featured-image">
					<img class="blur-up ls-is-cached lazyloaded" 
					data-src="https://source.unsplash.com/random/1170x490/?blog-post" 
					src="https://source.unsplash.com/random/1170x490/?blog-post" 
					alt="">
				</div> 
				<h1>{{ singlePost.title }}</h1>
				<ul class="publish-detail">                      
					<li>
						<i class="anm anm-user-al" aria-hidden="true"></i> 
						Posted by: {{ singlePost.userId }}
					</li>
					<li>
						<i class="icon anm anm-clock-r"></i> 
						<time datetime="2017-05-02">May 02, 2017</time>
					</li>
					<li><i class="icon anm anm-comments-l"></i> <a href="#"> 0 comments</a></li>
				</ul>
				<hr>
				<div class="rte">
					<p>{{ singlePost.body }}</p>
				</div>
				<hr>
				<div class="social-sharing">
					<a target="_blank" href="#" class="btn-link btn--share share-facebook" title="Share on Facebook">
						<i class="fa fa-facebook-square" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Share</span>
					</a>
					<a target="_blank" href="#" class="btn-link btn--share share-twitter" title="Tweet on Twitter">
						<i class="fa fa-twitter" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Tweet</span>
					</a>
					<a href="#" title="Share on google+" class="btn-link btn--share">
						<i class="fa fa-google-plus" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Google+</span>
					</a>
					<a target="_blank" href="#" class="btn-link btn--share share-pinterest" title="Pin on Pinterest">
						<i class="fa fa-pinterest" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Pin it</span>
					</a>
					<a href="#" class="btn-link btn--share share-pinterest" title="Share by Email" target="_blank">
						<i class="fa fa-envelope" aria-hidden="true"></i> <span class="share-title" aria-hidden="true">Email</span>
					</a>
				</div>
				<div class="blog-nav clearfix">
					<div class="nav-prev">
						<a href="#" title="Previous"><i class="icon icon-arrow-left"></i> <span>Previous post</span></a>
					</div>
					<div class="nav-next">
						<a href="#" title="Next"><span>Next Post</span> <i class="icon icon-arrow-right"></i></a>
					</div>
				</div>
				<hr>
				<div class="blog-comment">
					<h2>Comments (4)</h2>
					<ol class="comments-list comments-list--level--0">
						<li class="comments-list__item">
							<div class="comment">
								<div class="comment__avatar"><img src="https://source.unsplash.com/random/200x200/?avatar-user" alt=""></div>
								<div class="comment__content">
									<div class="comment__header">
										<div class="comment__author">Jessica Moore</div>
										<div class="comment__reply"><button type="button" class="btn btn-xs btn-light">Reply</button></div>
									</div>
									<div class="comment__text">Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. Nulla nec tellus pellentesque.</div>
									<div class="comment__date">November 30, 2018</div>
								</div>
							</div>
							<div class="comment-list__children">
								<ol class="comments-list comments-list--level--1">
									<li class="comments-list__item">
										<div class="comment">
											<div class="comment__avatar"><img src="https://source.unsplash.com/random/200x200/?user" alt=""></div>
											<div class="comment__content">
												<div class="comment__header">
													<div class="comment__author">Adam Taylor</div>
													<div class="comment__reply"><button type="button" class="btn btn-xs btn-light">Reply</button></div>
												</div>
												<div class="comment__text">Ut vitae finibus nisl, suscipit porttitor urna. Integer efficitur efficitur velit non pulvinar. Aliquam blandit volutpat arcu vel tristique. Integer commodo ligula id augue tincidunt faucibus.</div>
												<div class="comment__date">December 4, 2018</div>
											</div>
										</div>
									</li>
									<li class="comments-list__item">
										<div class="comment">
											<div class="comment__avatar"><img src="https://source.unsplash.com/random/200x200/?avatar" alt=""></div>
											<div class="comment__content">
												<div class="comment__header">
													<div class="comment__author">Helena Garcia</div>
													<div class="comment__reply"><button type="button" class="btn btn-xs btn-light">Reply</button></div>
												</div>
												<div class="comment__text">Suspendisse dignissim luctus metus vitae aliquam. Vestibulum sem odio, ullamcorper a imperdiet a, tincidunt sed lacus. Sed magna felis, consequat a erat ut, rutrum finibus odio.</div>
												<div class="comment__date">December 12, 2018</div>
											</div>
										</div>
									</li>
								</ol>
							</div>
						</li>
						<li class="comments-list__item">
							<div class="comment">
								<div class="comment__avatar"><img src="https://source.unsplash.com/random/200x200/?avatar-user" alt=""></div>
								<div class="comment__content">
									<div class="comment__header">
										<div class="comment__author">Ryan Ford</div>
										<div class="comment__reply"><button type="button" class="btn btn-xs btn-light">Reply</button></div>
									</div>
									<div class="comment__text">Nullam at varius sapien. Sed sit amet condimentum elit.</div>
									<div class="comment__date">December 5, 2018</div>
								</div>
							</div>
						</li>
					</ol>
				</div>
				<div class="formFeilds contact-form form-vertical">
				  <form method="post" action="#" id="comment_form" accept-charset="UTF-8" class="comment-form">
					  <h2>Write A Comment</h2>
					  <div class="row">
						<div class="col-12 col-sm-12 col-md-6 col-lg-4">
							<div class="form-group">
							<input type="text" id="ContactFormName" name="contact[name]" placeholder="First Name" value="" required="">
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-4">
							<div class="form-group">
							<input type="text" id="ContactFormLastName" name="contact[name]" placeholder="Last Name" value="" required="">
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-4">
							<div class="form-group">
							<input type="email" id="ContactFormEmail" name="contact[email]" placeholder="Email" value="" required="">                        	
							</div>
						</div>
					  </div>
					  <div class="row">
						<div class="col-12 col-sm-12 col-md-12 col-lg-12">
							<div class="form-group">
							<textarea required="" rows="10" id="ContactFormMessage" name="contact[body]" placeholder="Message"></textarea>
							</div>
						</div>  
					  </div>
					  <div class="row">
						<div class="col-12 col-sm-12 col-md-12 col-lg-12">
							<p class="fine-print"><i>Please note, comments must be approved before they are published</i></p>
							<input type="submit" class="btn" value="Send Message">
						</div>
					 </div>
				 </form>
				</div>
			</div>
		</div>
    </div><!--End Page Wrapper-->
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	mounted() {
        var postId=this.$route.params.id;
        if(this.singlePost == null) {
            this.getSinglePost(postId)
        }
	},
	computed: {
        ...mapState([
            'singlePost'
        ]),
    },
    methods: {
        ...mapActions({
            getSinglePost: 'getSinglePost'
        })
    },
}
</script>

<style>

</style>