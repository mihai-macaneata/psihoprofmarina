<template>
   <article class="inner article" v-if="article" >
    <!-- <header id="header">
      <router-link :to="{name: 'home'}" class="logo">LOGO</router-link>
      <ul class="icons">
        <li>
          <a href="#" class="icon brands fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
      </ul>
    </header> -->
    <div  v-if="article.cover"  class="article-header-image">
      <div class="article-header-image-bg" :style="`background-image:url(${article.cover.url})`">
        <h1>{{article.title}}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <vue-markdown>{{article.content}}</vue-markdown>
          <hr>
            <social-sharing 
              class="text-center" 
              :url="url" 
              inline-template
              :title="article.title"
              :description="article.slug"
              >
            <div>
              <network network="facebook">
                <i class="fa fa-fw fa-facebook"></i> Facebook
              </network>
             
              <network network="twitter">
                <i class="fa fa-fw fa-twitter"></i> Twitter
              </network>
           
              <network network="whatsapp">
                <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
              </network>
            </div>
          </social-sharing>

        </div>
      </div>
    </div>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'


export default {
  data() {
    return {
      article: null,
    }
  },
  components: {
    VueMarkdown
  },
  computed: {
    // article() {
    //   return this.$store.state.currentArticle
    // },
    url() {
      return window.location.href
    }
  },
  async created() {
    await this.$store.dispatch('getCurrentArticle', {id: this.$route.query.id})
    this.article = this.$store.state.currentArticle
  },
  watch: {
    '$route.query.id': {
      async handler() {
        await this.$store.dispatch('getCurrentArticle', {id: this.$route.query.id})
        this.article = this.$store.state.currentArticle
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
