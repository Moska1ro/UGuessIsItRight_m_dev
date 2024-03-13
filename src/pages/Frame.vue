<template>
  <v-layout style="min-width: 800px">
    <v-app-bar density="comfortable" color="blue" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/')">系统的名字</a></v-app-bar-title>
      <template v-slot:append>
        <v-btn class="text-none" variant="outlined">
          {{ userInfo.name }}
          <v-menu activator="parent">
            <v-list density="compact" style="padding: 0;" rounded="sm">
              <v-list-item link @click="router.replace('/404')">
                <template v-slot:prepend>
                  <v-icon icon="mdi-cog-outline" size="medium"></v-icon>
                </template>
                <v-list-item-title>账户设置</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="1 + 1">
                <template v-slot:prepend>
                  <v-icon icon="mdi-lock-outline" size="medium"></v-icon>
                </template>
                <v-list-item-title>修改密码</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="logout">
                <template v-slot:prepend>
                  <v-icon icon="mdi-logout" size="medium"></v-icon>
                </template>
                <v-list-item-title>登出</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer elevation="1" v-model="drawerShow">
      <v-list>
        <v-list-item prepend-icon="mdi-hexagon-multiple-outline" title="我的题库" :active="route.meta.name === 'classify'"
          @click="router.replace('/myquestionset')"></v-list-item>
        <v-list-item prepend-icon="mdi-calculator-variant-outline" title="作业设置" :active="route.meta.name === 'auto'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-box-outline" title="学情分析" :active="route.meta.name === 'history'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-cloud-search-outline" title="智慧问答" :active="route.meta.name === 'datasets'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-graph-outline" title="Chart Demo" :active="route.meta.name === 'models'"
          @click="router.replace('/chartdemo')"></v-list-item>
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
import { useUserStore } from '@/store/user';

const router = useRouter()
const route = useRoute()
const userInfo = useUserStore()

const drawerShow = ref()

let logout = () => {
  userInfo.changeIsLoggedin();
  router.push({ path: '/login' })
}

</script>
