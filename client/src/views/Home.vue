<template>
  <div class="home">
    <!-- <div v-for="article in articles" :key="article._id">
      {{article}}  
    </div>  -->

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-10 mx-auto">
        <div v-for="article in services" :key="article._id" class="post-preview">
   
          <router-link :to="{name: 'article', query: {id: article._id}}">
            <h2 class="post-title">
              {{article.title}}
            </h2>
            <img :src="`${$store.state.apiURL}${article.cover.url}`" alt="">
            <h3 class="post-subtitle">
              {{article.slug}}
            </h3>
          </router-link>
          <!-- <p class="post-meta">Postat de
            <a href="#">{{article.author.authorName}}</a>
            -<small>{{article.date}}</small>
          </p> -->
          <hr>
        </div>
      </div>
      <div class="col-lg-8 col-md-10 mx-auto">
        <div v-for="article in articles" :key="article._id" class="post-preview">
   
          <router-link :to="{name: 'article', query: {id: article._id}}">
            <h2 class="post-title">
              {{article.title}}
            </h2>
            <img :src="`${$store.state.apiURL}${article.cover.url}`" alt="">
            <h3 class="post-subtitle">
              {{article.slug}}
            </h3>
          </router-link>
          <p class="post-meta">Postat de
            <a href="#">{{article.author.authorName}}</a>
            -<small>{{article.date}}</small>
          </p>
          <hr>
        </div>
      </div>
    </div>
  </div>

  <hr>


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
    }
  },
  async created() {
    await this.$store.dispatch('getInitialData')
  }
}
</script>

<style scoped lang="scss">

</style>