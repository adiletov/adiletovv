<template>
  <div>
    <component :is="layout()">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/Main-layout'
export default {
  name: 'App',
  components:{
    MainLayout
  },
  data: () => ({
    //
  }),
  methods: {
    layout(){
      return this.$route.meta.layout || 'main-layout'
    }
  },
  mounted() {
    this.$router.push('/about')
  }
};
</script>
