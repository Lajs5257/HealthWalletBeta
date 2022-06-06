<template>
    <header>
    <v-app-bar app clipped-left clipped-right color="#E8E6E6">
    <v-toolbar-title class="align-center d-flex">
      <span class="logo-icon">
        <img src="@/assets/logoHW.png" width="auto" height="80 px"/>
      </span>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click="$vuetify.breakpoint.smAndDown ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)"
    />
    <v-spacer />
    <!---right part -->
    <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
    </header>
    </template>
<script>
export default {
  name: 'Header',
  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    userprofile: [
      { title: 'My Profile' },
      { title: 'My Balance' },
      { title: 'Inbox' },
      { title: 'Account Setting' },
      { title: 'Logout' }
    ],
    href () {
      return undefined
    }
  })
}
</script>

<style>

</style>
