<template>
   <article v-if="article" >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-html="article.content"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>


export default {
  data() {
    return {
      // article: ,
    }
  },
  computed: {
    article() {
      return this.$store.state.currentArticle
    }
  },
  async created() {
    console.log(this.$route)
    await this.$store.dispatch('getCurrentArticle', {id: this.$route.query.id})
  }
}
</script>

<style scoped lang="scss">

</style>
