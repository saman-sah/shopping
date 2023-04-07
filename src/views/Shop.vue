<template>
   <div id="page-content">        
        <!--Body Container-->
        <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a> <span aria-hidden="true">|</span> <span>Shop Left Sidebar</span></div>
            </div>
        </div>
        <!--End Breadcrumbs-->
        <div class="container">
            <div class="row">

				<!--Sidebar-->
            	<shop-sidebar></shop-sidebar>
				<!--End Sidebar-->
                
				<!--Main Content-->
				<div class="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                    <div class="page-title"><h1>Shop Left Sidebar</h1></div>
                    <div class="category-banner">
						<img src="assets/images/collection-banner/collection-banner.jpg" data-src="assets/images/collection-banner/collection-banner.jpg" alt="">
					</div>
					<div class="category-description">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
					</div>
					
                    <!--Toolbar-->
                    <button type="button" class="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
                    <div class="toolbar">
                        <div class="filters-toolbar-wrapper">
                            <div class="row">
                                <div class="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                                    <a href="shop-left-sidebar.html" title="Grid View" class="change-view change-view--active">
                                        <i class="anm anm-th" aria-hidden="true"></i>
                                    </a>
                                    <a href="shop-list-view.html" title="List View" class="change-view">
                                        <i class="anm anm-th-list" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                                    <span class="filters-toolbar__product-count">Showing: 15 Results</span>
                                </div>
                                <div class="col-4 col-md-4 col-lg-4 text-right">
                                    <div class="filters-toolbar__item">
                                        <label for="SortBy" class="hidden">Sort</label>
                                        <select name="SortBy" id="SortBy" class="filters-toolbar__input filters-toolbar__input--sort">
                                            <option value="title-ascending" selected="selected">Sort</option>
                                            <option>Best Selling</option>
                                            <option>Alphabetically, A-Z</option>
                                            <option>Alphabetically, Z-A</option>
                                            <option>Price, low to high</option>
                                            <option>Price, high to low</option>
                                            <option>Date, new to old</option>
                                            <option>Date, old to new</option>
                                        </select>
                                        <input class="collection-header__default-sort" type="hidden" value="manual">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End Toolbar-->
                    <!--Product Grid-->
                    <div v-if="products" class="product-load-more">
                        <div class="grid-products grid--view-items">
                            <div class="row">
                                <shop-product></shop-product>                       
                            </div>
                        </div>
                        <!--End Product Grid-->
                        <!--Load More Button-->
                        <div class="infinitpaginOuter">
                            <div class="infinitpagin">	
                                <a href="#" class="btn loadMore">Load More</a>
                            </div>
                        </div>
                        <!--End Load More Button-->
                    </div>
				</div>
				<!--End Main Content-->
			</div>
        
        </div><!--End Body Container-->        
    </div><!--End Page Wrapper-->
</template>

<script>
import { mapState } from "vuex";
import ShopSidebar from '../components/shop/ShopSidebar.vue'
import ShopProduct from '../components/shop/ShopProduct.vue'
export default {
    components: {
        'shop-sidebar': ShopSidebar,
        'shop-product': ShopProduct,       
    },
    computed: {
        ...mapState([
            'products',
        ]),
    },
}
</script>

<style>

</style>