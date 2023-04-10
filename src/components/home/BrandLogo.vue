<template>
  <!--Brand Logo Slider-->
        <div class="section logo-section no-pt-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="logo-bar">
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                    <div class="logo-bar__item">
                        <a href="#;"><img src="https://source.unsplash.com/random/143x73/?logo-brand" alt="" title="" /></a>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Brand Logo Slider-->
</template>

<script>
export default {
    mounted() {    
        // Logo Bar Slider
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
    updated() {    
        // Logo Bar Slider
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
}
</script>

<style>

</style>