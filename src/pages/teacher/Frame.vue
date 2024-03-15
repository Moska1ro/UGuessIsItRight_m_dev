<template>
  <v-layout style="min-width: 800px">
    <v-app-bar density="comfortable" color="blue" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/teacher')">教师端</a></v-app-bar-title>
      <template v-slot:append>
        <UserMenuBtn />
      </template>
    </v-app-bar>

    <v-navigation-drawer elevation="1" v-model="drawerShow">
      <v-list>
        <v-list-item prepend-icon="mdi-hexagon-multiple-outline" title="我的题库"
          :active="route.meta.name === 'myquestionset'" @click="router.replace('/teacher/myquestionset')"></v-list-item>
        <v-list-item prepend-icon="mdi-calculator-variant-outline" title="作业设置"
          :active="route.meta.name === 'questionset'" @click="router.replace('/teacher/assignmentset')"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-box-outline" title="学情分析" :active="route.meta.name === 'gradeanalysis'"
          @click="router.replace('/teacher/gradeanalysis')"></v-list-item>
        <v-list-item prepend-icon="mdi-cloud-search-outline" title="智慧问答" :active="route.meta.name === 'smartqa'"
          @click="router.replace('/teacher/smartqa')"></v-list-item>
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
import { useUserStore } from '@/store/user'
import UserMenuBtn from '@/components/UserMenuBtn.vue'

const router = useRouter()
const route = useRoute()
const userInfo = useUserStore()

const drawerShow = ref()

</script>
