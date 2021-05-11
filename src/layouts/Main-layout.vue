<template>

  <div class="ma-12 pa-12">
    <Header/>
    <v-navigation-drawer
        app
        style="box-shadow: none"
    >
      <v-toolbar dense style="box-shadow: none"/>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <v-icon class="icon-acc">mdi-account</v-icon>
              Нурадил Адилетов
            </v-list-item-title>
            <v-list-item-title class="title">
              <v-icon class="icon-acc">mdi-email</v-icon>
              <a href="mailto:nrdl777@gmail.com"
                 class="link-acc"
                 target="_blank">nrdl777@gmail.com</a>
            </v-list-item-title>
            <v-list-item-title class="title">
              <v-icon class="icon-acc">mdi-telegram</v-icon>
              <a href="https://telegram.im/@adiletov_adil"
                 class="link-acc"
                 target="_blank">+996 707 00 90 90</a>
            </v-list-item-title>
            <img style="width: 100%" src="https://www.codewars.com/users/adiletovAdil/badges/large" alt="">
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider/>
      <v-list
          nav
      >
        <v-list-item link to="/about">
          <v-list-item-icon class="icon-acc">
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>О себе</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/skills">
          <v-list-item-icon class="icon-acc">
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Навыки</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/works">
          <v-list-item-icon class="icon-acc">
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Мои работы</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main >
      <div class="main">
        <router-view></router-view>
      </div>
    </v-main>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header
  }
}
</script>