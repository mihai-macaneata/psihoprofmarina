<template>
  <div id="wrapper">
    <Nav></Nav>
    <router-view/>
    <Appointment></Appointment>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Appointment from '@/views/Appointment.vue'
export default {
  components: {
    Nav, 
    Footer,
    Appointment
  },
  async beforeCreate() {
    await this.$store.dispatch('getInitialData')
  }
}
</script>

<style lang="scss">

</style>
