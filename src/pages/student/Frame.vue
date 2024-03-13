<template>
  <v-layout style="min-width: 800px">
    <v-app-bar density="comfortable" color="secondary" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/')">学生端</a></v-app-bar-title>
      <template v-slot:append>
        <UserMenuBtn />
      </template>
    </v-app-bar>

    <v-navigation-drawer elevation="1" v-model="drawerShow">
      <v-list>
        <v-list-item prepend-icon="mdi-hexagon-multiple-outline" title="课程" :active="route.meta.name === 'classify'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-api" title="作业" :active="route.meta.name === 'auto'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-history" title="题库" :active="route.meta.name === 'history'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-database-outline" title="收藏" :active="route.meta.name === 'datasets'"
          @click="router.replace('/404')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <div style="padding: 16px; height: 100%;">
        <router-view></router-view>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import UserMenuBtn from '@/components/UserMenuBtn.vue'

const router = useRouter()
const route = useRoute()

const drawerShow = ref()

</script>
