<template>
   <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-html="article.about">
          </div>
          <hr>
            <social-sharing 
              class="text-center" 
              :url="url" 
              inline-template
              title="Despre mine"
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
import about from '@/assets/about'

export default {
  data() {
    return {
      article: about,
    }
  },
  components: {
    VueMarkdown
  },
  computed: {
   
    url() {
      return window.location.href
    }
  },
}
</script>

<style scoped lang="scss">

</style>
