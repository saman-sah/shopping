<template>
  <!--Sidebar-->
            	<div class="col-12 col-sm-12 col-md-3 col-lg-3 sidebar">
					<div class="sidebar_widget">
						<div class="widget-title"><h2>Search</h2></div>
						<div class="custom-search">
							<form action="/search" method="get" class="input-group search-header search" role="search" style="position: relative;">
								<input class="search-header__input search__input input-group__field" type="search" name="q" placeholder="Blog Search..." aria-label="Search" autocomplete="off">
								<span class="input-group__btn"><button class="btnSearch" type="submit"> <i class="icon anm anm-search-l"></i> </button></span>
							</form>
						</div>
					</div>
                	<div class="sidebar_tags">
                    	<div class="sidebar_widget categories">
                            <div class="widget-title"><h2>Blog Category</h2></div>
                            <div class="widget-content">
                                <ul class="sidebar_categories">
                                	<li class="lvl-1 "><a href="/" class="site-nav lvl-1">Denim Jeans</a></li>
                                    <li class="lvl-1  active"><a href="#" class="site-nav lvl-1">Fashion</a></li>
                                    <li class="lvl-1 "><a href="#" class="site-nav lvl-1">Summer</a></li>
                                    <li class="lvl-1 "><a href="#" class="site-nav lvl-1">Trending</a></li>
                                    <li class="lvl-1 "><a href="#" class="site-nav lvl-1">Winter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="sidebar_widget">
                        	<div class="widget-title"><h2>Recent Blog Posts</h2></div>
							<div class="widget-content">
                                <div class="list list-sidebar-products">
                                  <div class="grid">
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="mini-view_image">
                                            <a class="grid-view-item__link" href="#">
                                                <img class="grid-view-item__image blur-up ls-is-cached lazyloaded" data-src="https://source.unsplash.com/random/450x250" src="https://source.unsplash.com/random/450x250" alt="">
                                            </a>
                                        </div>
                                        <div class="details"> <a class="grid-view-item__title" href="#">It's all about how you wear</a>
                                          <div class="grid-view-item__meta"><span class="article__date">May 02, 2017</span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="mini-view_image"> <a class="grid-view-item__link" href="#"><img class="grid-view-item__image blur-up ls-is-cached lazyloaded" data-src="https://source.unsplash.com/random/450x250" src="https://source.unsplash.com/random/450x250" alt=""></a> </div>
                                        <div class="details"> <a class="grid-view-item__title" href="#">27 Days of Spring Fashion Recap</a>
                                          <div class="grid-view-item__meta"><span class="article__date">May 02, 2017</span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="mini-view_image"> <a class="grid-view-item__link" href="#"><img class="grid-view-item__image blur-up ls-is-cached lazyloaded" data-src="https://source.unsplash.com/random/450x250" src="https://source.unsplash.com/random/450x250" alt=""></a> </div>
                                        <div class="details"> <a class="grid-view-item__title" href="#">How to Wear The Folds Trend Four Ways</a>
                                          <div class="grid-view-item__meta"><span class="article__date">May 02, 2017</span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="mini-view_image"> <a class="grid-view-item__link" href="#"><img class="grid-view-item__image blur-up ls-is-cached lazyloaded" data-src="https://source.unsplash.com/random/450x250" src="https://source.unsplash.com/random/450x250" alt=""></a> </div>
                                        <div class="details"> <a class="grid-view-item__title" href="#">Accusantium doloremque</a>
                                          <div class="grid-view-item__meta"><span class="article__date">May 02, 2017</span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                        <div class="sidebar_widget">
                        	<div class="widget-title"><h2>Recent Comments</h2></div>
							<div class="widget-content">
                                <div class="list list-sidebar-products">
                                  <div class="grid">
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="detail">
                                        	<div class="grid-view-item__meta"><strong>Tim</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a class="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="detail">
                                        	<div class="grid-view-item__meta"><strong>Joy</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a class="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="detail">
                                        	<div class="grid-view-item__meta"><strong>Jhon</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a class="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="grid__item">
                                      <div class="mini-list-item">
                                        <div class="detail">
                                        	<div class="grid-view-item__meta"><strong>Tim</strong> On <a href="#">Lorem Ipsum</a></div>
                                        	<a class="grid-view-item__title" href="#">On sait depuis longtemps que travailler avec</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                        <div class="sidebar_widget tags-clouds">
                        	<div class="widget-title"><h2>Popular Tags</h2></div>
							<div class="widget-content">
								<ul>
                                	<li><a href="#">Fashion</a></li>
                                    <li><a href="#">Clothes</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Furniture</a></li>
                                    <li><a href="#">Sun Glasses</a></li>
                                    <li><a href="#">Winter</a></li>
                                    <li><a href="#">Autoparts</a></li>
                                </ul>
                          	</div>
						</div>
						<div class="sidebar_widget">
                        	<div class="widget-title"><h2>About Blog</h2></div>
							<div class="widget-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
                          	</div>
						</div>
                    </div>
                </div>
                <!--End Sidebar-->
</template>

<script>
export default {

}
</script>

<style>

</style>