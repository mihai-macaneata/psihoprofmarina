<template>
  <transition-group tag="ul" :name="transition"  class="blog__feed">
    <li class="preview" v-for="post in posts" :key="post.id">
      <figure class="preview__figure" :style="getBgImg(post.cover)">
       <transition name="v--fade">
        <figcaption class="preview__details">
          <nuxt-link :to="post._id">
              <div class="preview__title">
                    {{ post.title }}
              </div>

              <div class="preview__meta">
                <time class="preview__published">
                  {{ prettyDate(post.date) }}
                </time>

                <div class="preview__author">
                  {{ post.author.authorName }}
                </div>
              </div>

              <div class="card-content">
                <div class="content">
                  {{ post.slug }}
                </div>
              </div>
            
          </nuxt-link>
        </figcaption>
       </transition>
      </figure>

    </li>
  </transition-group>
</template>

<script>
import axios from 'axios'

export default {
  
  async asyncData ({env, params}) {
    console.log(`${env.strapi.apiUrl}/articles`)
    let {data} = await axios.get(`${env.strapi.apiUrl}/articles`)
      .catch(e => {
        console.log({statusCode: 404, message: 'Posts not found'})
      })
    console.log(data)
    let posts = await Promise.all(await data.map(async (p) => {
      if (p.cover !== null){
        p.cover.url = `${env.strapi.apiUrl}${p.cover.url}`
      }
      
      return p
    }))


    return {
      posts
    }
  },
  methods: {
    getBgImg(src) {
      return { backgroundImage: src ? `url(${src})`: 'http://via.placeholder.com/200x200' }
    },
    prettyDate(date){

     return new Date(date)
        .toString()
        .split(' ')
        .slice(0, 4)
        .join(' ')
        .replace(/( \d+)$/, ',$1')
    }
  }
}
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card {
  margin-top: 20px;
  height: 350px;
  width: 340px;
}

.card-image {
  height: 200px;
  margin: auto;
}
img {
  display:block;
  margin:auto;
}
</style>
