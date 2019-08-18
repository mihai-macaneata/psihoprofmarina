<template>
  <div id="app">
    <Nav></Nav>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Nav, 
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
