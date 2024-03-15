<template>
  <v-layout style="min-width: 800px">
    <v-app-bar density="comfortable" color="secondary" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/student')">学生端</a></v-app-bar-title>
      <template v-slot:append>
        <UserMenuBtn />
      </template>
    </v-app-bar>

    <v-navigation-drawer elevation="1" v-model="drawerShow" :width="180">
      <v-list>
        <v-list-item prepend-icon="mdi-briefcase-variant-outline" title="课程" :active="route.meta.name === 'course'"
          @click="router.replace('/student')"></v-list-item>
        <v-list-item prepend-icon="mdi-book-edit-outline" title="作业" :active="route.meta.name === 'assignment'"
          @click="router.replace('/student/assignment')"></v-list-item>
        <v-list-item prepend-icon="mdi-dumbbell" title="题库" :active="route.meta.name === 'question'"
          @click="router.replace('/student/question')"></v-list-item>
        <v-list-item prepend-icon="mdi-star-outline" title="收藏" :active="route.meta.name === 'star'"
          @click="router.replace('/student/star')"></v-list-item>
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
