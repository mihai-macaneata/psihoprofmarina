<template>
  <div id="wrapper">
    <div id="main">
      <router-view/>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Appointment from '@/views/Appointment.vue'
export default {
  components: {
    Sidebar, 
    Appointment
  },
  async beforeCreate() {
    await this.$store.dispatch('getInitialData')
  }
}
</script>

<style lang="scss">

</style>
