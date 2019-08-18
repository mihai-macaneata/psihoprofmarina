<template>
   <article v-if="article" >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-html="article.content"></div>
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


export default {
  data() {
    return {
      // article: ,
    }
  },
  computed: {
    article() {
      return this.$store.state.currentArticle
    },
    url() {
      return window.location.href
    }
  },
  async created() {
    await this.$store.dispatch('getCurrentArticle', {id: this.$route.query.id})
  }
}
</script>

<style scoped lang="scss">

</style>
