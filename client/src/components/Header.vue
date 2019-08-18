<template>
  <header class="masthead" :style="`background-image: url(${computeHeadeRImage})`">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{computeTitle}}</h1>
            <span class="subheading">{{subTitle}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    computeHeadeRImage(){
      if(this.$route.name === 'article' && this.$store.state.currentArticle) {
        return this.$store.state.currentArticle.cover.url
      }
      return this.$store.state.headerImage;
    },
    subTitle(){
      return this.$store.state.siteSubtitle
    },
    computeTitle() {
      if(this.$route.name === 'article' && this.$store.state.currentArticle) {
        return this.$store.state.currentArticle.title
      }
      return this.$store.state.siteTitle;
    }
  }
};
</script>