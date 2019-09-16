<template>
  <div class="home">
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-10 mx-auto">
          <h2>Servicii</h2>
          <hr>
        <div v-for="article in services" :key="article._id" class="post-preview">
   
          <router-link :to="{name: 'article', query: {id: article._id}}">
            <h3 class="mt-4">
              {{article.title}}
            </h3>
            <img v-if="article.cover" :src="`${$store.state.apiURL}${article.cover.url}`" alt="">
            <p class="post-subtitle">
              {{article.slug}}
            </p>
          </router-link>
          <hr>
        </div>
      </div>
      <div class="col-lg-8 col-md-10 mx-auto">
          <h2>Articole</h2>
        <hr>
        <div v-for="article in articles" :key="article._id" class="post-preview">
   
          <router-link :to="{name: 'article', query: {id: article._id}}">
            <h3 class="mt-4">
              {{article.title}}
            </h3>
            <img  v-if="article.cover"  :src="`${$store.state.apiURL}${article.cover.url}`" alt="">
            <p class="post-subtitle">
              {{article.slug}}
            </p>
          </router-link>
          <p class="post-meta">Postat de
            <a href="#">{{article.author.authorName}}</a>
            -<small>{{article.date}}</small>
          </p>
          <hr>
        </div>
      </div>
    </div>
  </div> -->

    
    <div>
     
        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center">{{siteTitle}}</h1>
                        <div class="logo">
                            <h1 class="text-center">logo</h1>
                            <!-- <router-link :to="{name: 'home'}"><img :src="computeHeadeRImage" alt=""></router-link> -->
                        </div><!-- end logo -->
                    </div>
                </div><!-- end row -->
            </div><!-- end header-logo -->
        </div><!-- end header -->

        <section class="site-section">
            <div class="container">
                <div class="row">
                    <div class="content col-lg-8">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h3>Servicii</h3>
                                <div v-for="article in services" :key="article._id"  class="small-blog-box blog-box clearfix">

                                    <div class="blog-desc">
                                        <!-- <span class="cat-title">{{article.title}}</span> -->
                                        <h4>
                                            <router-link :to="{name: 'article', query: {id: article._id}}">{{article.title}}
                                            </router-link>
                                        </h4>
                                        <!-- end meta -->

                                        <p>{{article.slug}}</p>

                                        <div class="post-bottom clearfix">
                                            <div class="pull-left">
                                                <router-link class="readmore" :to="{name: 'article', query: {id: article._id}}">Citeste articolul</router-link>
                                            </div><!-- end left -->

                                            <div class="pull-right">
                                                <div class="post-share">
                                                    <div class="customshare">
                                                         <span class="list">
                                                            <strong><i class="fa fa-share-alt"></i>
                                                            <a href="#" class="tw"><i class="fa fa-twitter"></i></a>
                                                            <a href="#" class="fb"><i class="fa fa-facebook"></i></a>
                                                            <a href="#" class="gp"><i class="fa fa-google-plus"></i></a>
                                                            </strong>
                                                        </span>
                                                    </div>
                                                </div><!-- end share -->
                                            </div><!-- end right -->
                                        </div><!-- end bottom -->
                                    </div><!-- end desc -->
                                </div><!-- end blog-box -->
                            </div><!-- end col -->

                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h3>Articole</h3>
                                 <div v-for="article in articles" :key="article._id"  class="small-blog-box blog-box clearfix">
                                    <div class="blog-media">
                                        <router-link :to="{name: 'article', query: {id: article._id}}">
                                            <img  v-if="article.cover" class="img-fluid" :src="`${$store.state.apiURL}${article.cover.url}`" alt="">
                                        </router-link>
                                    </div>
                                    <div class="blog-desc">
                                        <span class="cat-title">{{article.category.nume}}</span>
                                        <h4>
                                            <router-link :to="{name: 'article', query: {id: article._id}}">{{article.title}}
                                            </router-link>
                                        </h4>
                                        <!-- end meta -->
                                       

                                        <p>{{article.slug}}</p>

                                        <div class="post-bottom clearfix">
                                            <div class="pull-left">
                                                <router-link class="readmore" :to="{name: 'article', query: {id: article._id}}">Citeste articolul</router-link>
                                            </div><!-- end left -->

                                            <div class="pull-right">
                                                <div class="post-share">
                                                    <div class="customshare">
                                                         <span class="list">
                                                            <strong><i class="fa fa-share-alt"></i>
                                                            <a href="#" class="tw"><i class="fa fa-twitter"></i></a>
                                                            <a href="#" class="fb"><i class="fa fa-facebook"></i></a>
                                                            <a href="#" class="gp"><i class="fa fa-google-plus"></i></a>
                                                            </strong>
                                                        </span>
                                                    </div>
                                                </div><!-- end share -->
                                            </div><!-- end right -->
                                        </div><!-- end bottom -->
                                    </div><!-- end desc -->
                                </div><!-- end blog-box -->
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="sidebar col-lg-4">
                        <div class="widget clearfix">
                            <div class="widget-title">
                                <h3><span>Despre mine</span></h3>
                            </div><!-- end widget-title -->

                            <div class="about-widget text-center">
                                <div class="entry">
                                    <img src="@/assets/me.jpg" alt="" class="rounded-circle img-fluid">
                                    <div class="magnifier rd bg">
                                        <router-link class="btn btn-primary" :to="{name: 'about'}">Despre mine</router-link>
                                    </div>
                                </div>

                                <ul class="text-left">

                                        <li>  Membru in Colegiul Psihologilor din Romania</li>
                                    
                                    
                                        <li> Psiholog psihopedagog, consilier, consultant in cariera si supervizor GCDF International</li>


                                        <li>  Membru al Asociatiei Romane de Psihoterapie Integrativa</li>
                                    

                                        <li> Coordonator departament Consiliere Scolara in cadrul Aociatiei Consilierilor din Romania</li>

                                    
                                        <li> Membru al comisiei de etica si supervizare in cadrul ACROM</li>

                                    
                                        <li>  Membru RENINCO Romania</li>

                                        <li> Consilier scolar, profesor  gradul I in cadrul CMBRAE</li>
                                </ul>

                                <div class="blog-social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Follow on Facebook">
                                        <div class="socibox">
                                            <span class="fa fa-facebook"></span>
                                        </div>
                                    </a>
                                  
                                    <hr>
                                </div><!-- end blog-social -->
                            </div><!-- end about -->
                        </div><!-- end widget -->

                        
                            <!-- <div class="widget">
                                <div class="widget-title">
                                    <h3><span>Text Widget</span></h3>
                                </div>
                
                                <div class="text-widget">
                                    <p>Hello there, this is a custom widget area, you can add anything here or in mollis est fringilla non. Vestibulum et felis lacus. Curabitur sed. </p>
                                </div>
                            </div> -->
                
                            <div class="widget clearfix">
                                <div class="widget-title">
                                    <h3><span>Categorii articole</span></h3>
                                </div><!-- end widget-title -->
                
                                <div class="category-widget">
                                    <ul>
                                        <li v-for="category in categories"><a href="#">{{category.nume}}</a></li>
                                    </ul>
                                </div><!-- end category -->
                            </div><!-- end widget -->


                    </div><!-- end sidebar -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->

    </div><!-- end wrapper -->

  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    articles() {
      return this.$store.state.articlesPreview && this.$store.state.articlesPreview.filter(a => !a.service)
    },
    services() {
      return this.$store.state.articlesPreview && this.$store.state.articlesPreview.filter(a => a.service)
    },
    categories() {
        return this.$store.state.categories
    },
    computeHeadeRImage(){
      if(this.$route.name === 'article' && this.$store.state.currentArticle) {
        return this.$store.state.currentArticle.cover.url
      }
      return this.$store.state.headerImage;
    },
    subTitle(){
      return this.$store.state.siteSubtitle
    },
    siteTitle() {
      return this.$store.state.siteTitle;
    }
  }
}
</script>

<style scoped lang="scss">
.post-preview {
  img {
    max-width: 100%;
  }
}
</style>