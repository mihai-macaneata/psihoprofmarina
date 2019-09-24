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
            <a href="mailto:marina.lucica@gmail.com">marina.lucica@gmail.com</a>
          </li>
          <li class="icon solid fa-phone">Secretariat: 0727 637 981</li>
          <li class="icon solid fa-phone">Personal: 0735 853 000</li>
          <li class="icon solid fa-home">
            Bulevardul Unirii nr.70
          </li>
          <li class="no-icon">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.3834878376106!2d26.12140971552293!3d44.42529527910248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff200b622963%3A0xbc6d5ca673ac338!2sBulevardul%20Unirii%2070%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1569345593321!5m2!1sro!2sro" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </li>
          <li class="icon solid fa-home">
            Soseaua Cotroceni nr.9
          </li>
          <li class="no-icon">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.7803005199817!2d26.067178551388174!3d44.43766867899966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e08365960d%3A0x5a41f4323b40d2c!2s%C8%98oseaua%20Cotroceni%209%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1569345624631!5m2!1sro!2sro" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </li>
        </ul>
        <br>
      </section>

      <!-- Footer -->
      <footer id="footer">
        <p class="copyright">
          &copy; Psihoprofmarina. All rights reserved.
          Design:
          <a href="https://html5up.net">HTML5 UP</a>.
        </p>
        <a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by freepik - www.freepik.com</a>
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