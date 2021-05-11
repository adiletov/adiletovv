<template>
  <div>
    <v-row no-gutters>
      <v-col
          class="col-3"
          v-for="(skill, idx) of skills"
          style="padding-right: 10px"
          :key="idx"
          xl="2"
          lg="2"
          md="2"
          sm="3"
      >
        <img class="img-skill" :src="skill" alt="vuex">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import sass from '../assets/images/sass.png'
import bt from '../assets/images/bt.png'
import js from '../assets/images/js.png'
import es from '../assets/images/es.png'
import node from '../assets/images/node.png'
import ex from '../assets/images/ex.png'
import react from '../assets/images/react.png'
import redux from '../assets/images/redux.png'
import mt from '../assets/images/mt.png'
import cr from '../assets/images/cr.png'
import next from '../assets/images/next.png'
import vue from '../assets/images/vue.png'
import vuex from '../assets/images/vuex.png'
import vt from '../assets/images/vt.jpeg'

export default {
  data() {
    return {
      skills: [
        html,
        css, sass, bt, js, es, node, ex, react, redux, mt, cr, next, vue, vuex, vt
      ]
    }
  }
}
</script>