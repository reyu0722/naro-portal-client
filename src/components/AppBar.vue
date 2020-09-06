<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list nav rounded>
        <v-list-item-group v-model="item">
          <router-link
            v-for="item in items"
            :key="item.title"
            v-bind:to="item.link"
            tag="v-list-item"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Twitter Clone</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  drawer: false,
  data() {
    return {
      item: 1,
      items: [
        { title: 'Home', icon: 'mdi-home-city', link: '/' },
        { title: 'About', icon: 'mdi-help-box', link: '/about' },
        { title: 'My Account', icon: 'mdi-account', link: '/' },
        { title: 'Users', icon: 'mdi-account-group-outline', link: '/' },
      ],
      drawer: null,
    }
  },
}
</script>
