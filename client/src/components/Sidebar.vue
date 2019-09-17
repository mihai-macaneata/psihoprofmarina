<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Menu -->
      <nav id="menu">
        <header class="major">
          <h2>Meniu</h2>
        </header>
        <ul>
          <li>
            <router-link :to="{name: 'home'}">Acasa</router-link>
          </li>
          <li>
            <router-link :to="{name: 'despremine'}">Despre mine</router-link>
          </li>
          <li>
            <router-link :to="{name: 'programare'}">Solicita programare</router-link>
          </li>
        </ul>
      </nav>
 
      <section>
        <header class="major">
          <h2>Servicii</h2>
        </header>
        <div class="mini-posts">
			      <ul>

              <li v-for="article in services" :key="article._id"  class="small-blog-box blog-box clearfix">
                <router-link :to="{name: 'article', query: {id: article._id}}">{{article.title}}</router-link>
              </li>
            </ul>
        </div>
      </section>

      <!-- Section -->
      <section>
        <header class="major">
          <h2>Categorii articole</h2>
        </header>
        <div class="mini-posts">
			      <ul>
            	<li v-for="category in categories"><a href="#">{{category.nume}}</a></li>
            </ul>
        </div>
    
      </section>
     

      <!-- Section -->
      <section>
        <header class="major">
          <h2>Contact</h2>
        </header>
        <p></p>
        <ul class="contact">
          <li class="icon solid fa-envelope">
            <a href="#">mail@mail.com</a>
          </li>
          <li class="icon solid fa-phone">asd</li>
          <li class="icon solid fa-home">
            asd
          </li>
        </ul>
      </section>

      <!-- Footer -->
      <footer id="footer">
        <p class="copyright">
          &copy; Untitled. All rights reserved. Demo Images:
          <a href="https://unsplash.com">Unsplash</a>. Design:
          <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
	computed: {
		categories() {
        	return this.$store.state.categories
      },
      services() {
      return this.$store.state.articlesPreview && this.$store.state.articlesPreview.filter(a => a.service)
    },
	}
}
</script>