<template>
  <div id="page-content">        
    <!--Body Container-->
    <!--Breadcrumbs-->
    <div class="breadcrumbs-wrapper">
      <div class="container">
          <div class="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a> <span aria-hidden="true">|</span> <span>Blog Right Sidebar</span></div>
        </div>
    </div>
    <!--End Breadcrumbs-->
    <div div class="page-title"><h1>Blog </h1></div>
    <div class="container">
      <div class="row">
        <!--Main Content-->
        <div class="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
          <div class="blog--list-view blog--grid-load-more">
            <div class="article"> 
              <!-- Article Image --> 
              <iframe width="560" height="315" src="https://www.youtube.com/embed/93A2jOW5Mog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h2 class="h3"><a href="blog-single-post.html">It's all about how you wear</a></h2>
              <ul class="publish-detail">                      
                <li><i class="anm anm-user-al" aria-hidden="true"></i> Posted by: Crish Jonas</li>
                <li><i class="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                <li>Posted in: <a href="#">Fashion,</a> <a href="#">Hot,</a> <a href="#">Tops</a></li>
                <li><i class="icon anm anm-comments-l"></i> <a href="#"> 0 comments</a></li>
              </ul>
              <div class="rte"> 
                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de......</p>
              </div>
              <p><a href="blog-single-post.html" class="btn btn-secondary btn--small">Read more</a></p>
            </div>
            <template v-if="posts">
              <div v-for="(post, index) in posts" 
              :key="index"
              class="article"> 
                <!-- Article Image --> 
                  <router-link class="article_featured-image" :to="'/post/'+post.id+'/'+post.slug">
                    <img class="blur-up ls-is-cached lazyloaded" :data-src="post.image" :src="post.image" alt="27 Days of Spring Fashion Recap">
                  </router-link> 
                <h2 class="h3">
                  <router-link :to="'/post/'+post.id+'/'+post.slug">{{ post.title }}</router-link>
                </h2>
                <ul class="publish-detail">                      
                  <li><i class="anm anm-user-al" aria-hidden="true"></i> Posted by: {{ post.userId }}</li>
                  <li><i class="icon anm anm-clock-r"></i> <time datetime="2017-05-02">May 02, 2017</time></li>
                  <li v-if="post.tags">Tags: 
                    <router-link v-for="(tag, index) in post.tags"
                    to="#" :key="index"
                    class="me-2">
                      {{ tag }}
                    </router-link> 
                  </li>
                </ul>
                <div class="rte"> 
                  <p>{{ post.body }}</p>
                </div>
                <p>
                  <router-link :to="'/post/'+post.id+'/'+post.slug" class="btn btn-secondary btn--small">
                    Read more
                  </router-link>
                </p>
              </div>
            </template>
              
            <div class="loadmore-post">	
                <a href="#;" class="btn loadMorepost">Load More</a>
            </div>
          </div>
        </div>
        <!--End Main Content-->
        <!--Sidebar-->
        <blog-sidebar></blog-sidebar>
        <!--End Sidebar-->
      </div>
    </div>
  </div><!--End Page Wrapper-->
</template>

<script>
import BlogSidebar from '../components/blog/BlogSidebar.vue'
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState([      
			'posts',
    ]),
  },
  components: {
    'blog-sidebar': BlogSidebar
  },
  mounted() {
    $(".blog--grid-load-more .article").slice(0, 5).show();
    $(".loadMorepost").on('click', function (e) {
        e.preventDefault();
        $(".blog--grid-load-more .article:hidden").slice(0, 1).slideDown();
        if ($(".blog--grid-load-more .article:hidden").length == 0) {
            $(".loadmore-post").html('<div class="btn loadMorepost">No more Blog Post</div>');
        }
    });
  },
  updated() {
    $(".blog--grid-load-more .article").slice(0, 5).show();
    $(".loadMorepost").on('click', function (e) {
        e.preventDefault();
        $(".blog--grid-load-more .article:hidden").slice(0, 1).slideDown();
        if ($(".blog--grid-load-more .article:hidden").length == 0) {
            $(".loadmore-post").html('<div class="btn loadMorepost">No more Blog Post</div>');
        }
    });
  },
}
</script>

<style>

</style>