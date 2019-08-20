<template>
  <div class="home">
    <!-- <div v-for="article in articles" :key="article._id">
      {{article}}  
    </div>  -->

  <!-- Main Content -->
  <div class="container">
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
          <!-- <p class="post-meta">Postat de
            <a href="#">{{article.author.authorName}}</a>
            -<small>{{article.date}}</small>
          </p> -->
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
}
</script>

<style scoped lang="scss">
.post-preview {
  img {
    max-width: 100%;
  }
}
</style>