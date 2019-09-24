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
   metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Marina Lucica',
      // all titles will be injected into this template
      titleTemplate: '%s | Marina Lucica'
  },
  async beforeCreate() {
    await this.$store.dispatch('getInitialData')
  }
}
</script>

<style lang="scss">

</style>
