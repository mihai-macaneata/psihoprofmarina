<template>
  <div class="inner">
    <!-- Header -->
    <header id="header">
      <router-link :to="{name: 'home'}" class="logo">LOGO</router-link>
      <ul class="icons">
        <li>
          <a href="#" class="icon brands fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
      </ul>
    </header>

    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <header>
          <h2>{{siteTitle}}</h2>
          <h3>{{subTitle}}</h3>
        </header>
        <ul class="text-left">
          <li>Membru in Colegiul Psihologilor din Romania</li>

          <li>Psiholog psihopedagog, consilier, consultant in cariera si supervizor GCDF International</li>

          <li>Membru al Asociatiei Romane de Psihoterapie Integrativa</li>

          <li>Coordonator departament Consiliere Scolara in cadrul Aociatiei Consilierilor din Romania</li>

          <li>Membru al comisiei de etica si supervizare in cadrul ACROM</li>

          <li>Membru RENINCO Romania</li>

          <li>Consilier scolar, profesor gradul I in cadrul CMBRAE</li>
        </ul>
        <ul class="actions">
          <li>
            <router-link class="button big" :to="{name: 'despremine'}">Despre mine</router-link>
            <hr />
            <router-link class="button big" :to="{name: 'programare'}">Solicita programare</router-link>
          </li>
        </ul>
      </div>
      <span class="image object">
        <img src="@/assets/me.jpg" alt />
      </span>
    </section>

    <!-- Section -->
    <!-- <section>
      <header class="major">
        <h2>Erat lacinia</h2>
      </header>
      <div class="features">
        <article>
          <span class="icon fa-gem"></span>
          <div class="content">
            <h3>Portitor ullamcorper</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-paper-plane"></span>
          <div class="content">
            <h3>Sapien veroeros</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-rocket"></span>
          <div class="content">
            <h3>Quam lorem ipsum</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-signal"></span>
          <div class="content">
            <h3>Sed magna finibus</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
      </div>
    </section>-->

    <!-- Section -->
    <section>
      <header class="major">
        <h2>Articole</h2>
      </header>
      <div class="posts">
        <article v-for="article in articles" :key="article._id">
          <router-link
            class="article-preview-image"
            :to="{name: 'article', query: {id: article._id}}"
          >
            <div
              v-if="article.cover"
              class="article-preview-bg"
              :style="`background-image: url(${$store.state.apiURL}${article.cover.url})`"
            ></div>
              <div
              v-else
              class="article-preview-bg"
              style="background-image: url('assets/images/pic01.jpg')"
            ></div>
          </router-link>
          <h2>
            <router-link
            :to="{name: 'article', query: {id: article._id}}"
          >
            {{article.title}}
            </router-link>
            </h2>
            <small  v-if="article.category">{{article.category.nume}}</small>
            <hr>
          <p>{{article.slug.substring(0,350)+'...'}}</p>
          <ul class="actions">
            <li>
             <router-link
             class="button"
            :to="{name: 'article', query: {id: article._id}}"
              >Citeste articolul
             </router-link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    articles() {
      return (
        this.$store.state.articlesPreview &&
        this.$store.state.articlesPreview.filter(a => !a.service)
      );
    },
    services() {
      return (
        this.$store.state.articlesPreview &&
        this.$store.state.articlesPreview.filter(a => a.service)
      );
    },
    categories() {
      return this.$store.state.categories;
    },
    computeHeadeRImage() {
      if (this.$route.name === "article" && this.$store.state.currentArticle) {
        return this.$store.state.currentArticle.cover.url;
      }
      return this.$store.state.headerImage;
    },
    subTitle() {
      return this.$store.state.siteSubtitle;
    },
    siteTitle() {
      return this.$store.state.siteTitle;
    }
  }
};
</script>

<style scoped lang="scss">
.post-preview {
  img {
    max-width: 100%;
  }
}
</style>