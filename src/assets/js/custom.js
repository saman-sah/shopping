export default {
  setting_box(){
		$(".setting-link").on("click", function() {
		  	$("#settingsBox").toggleClass("active");
		});
		$("body").on("click", function(e) {
			var t = $(e.target);
			t.parents().is("#settingsBox") || t.parents().is(".setting-link") || t.is(".setting-link") || $("#settingsBox").removeClass("active")
		});
	},
  home_slider_carousel(){
      $('.home-slideshow-carousel').slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
          arrows: true,
          lazyLoad: 'ondemand',
          responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
      });
  },
  product_page_tabs() {
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
  load_more_post(){
      $(".blog--grid-load-more .article").slice(0, 5).show();
      $(".loadMorepost").on('click', function (e) {
          e.preventDefault();
          $(".blog--grid-load-more .article:hidden").slice(0, 1).slideDown();
          if ($(".blog--grid-load-more .article:hidden").length == 0) {
              $(".loadmore-post").html('<div class="btn loadMorepost">No more Blog Post</div>');
          }
      });
  },
  /* 11.11 Logo Slider */
	logo_slider(){
		$('.logo-bar').slick({
			dots: false,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
			]
		});
	},
  /* 11.4 Products Slider */
	product_slider(){
    $('.productSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    
    });
  },
  /* 11.12 Testimonial Slider */
	testimonial_slider(){
    console.log('custom testimonial');
		$('.quotes-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
		});
	},
  /* 11.8 Product Page */
	product_slider_ppage(){
		$('.productPageSlider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			]
		});
	},
  load_more(){
      $(".product-load-more .item").slice(0, 21).show();
      $(".loadMore").on('click', function (e) {
          e.preventDefault();
          $(".product-load-more .item:hidden").slice(0, 4).slideDown();
          if ($(".product-load-more .item:hidden").length == 0) {
              $(".infinitpagin").html('<div class="btn loadMore">no more products</div>');
          }
      });
  },
  load_more_listview(){
      $(".product-load-more .list-product").slice(0, 7).show();
      $(".loadMore").on('click', function (e) {
          e.preventDefault();
          $(".product-load-more .list-product:hidden").slice(0, 5).slideDown();
          if ($(".product-load-more .list-product:hidden").length == 0) {
              $(".infinitpagin").html('<div class="btn loadMore">no more products</div>');
          }
      });
  }
}