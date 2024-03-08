<template>
  <v-layout style="min-width: 800px">
    <v-app-bar
      density="comfortable"
      color="secondary"
      elevation="1"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/')">系统的名字</a></v-app-bar-title>
      <template v-slot:append>
        <v-btn class="text-none" variant="outlined">
          Administrator
          <v-menu activator="parent">
            <v-list density="compact" style="padding: 0;" rounded="sm">
              <v-list-item link @click="1+1">
                <template v-slot:prepend>
                  <v-icon icon="mdi-cog-outline" size="medium"></v-icon>
                </template>
                <v-list-item-title>账户设置</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="1+1">
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
        <v-list-item
          prepend-icon="mdi-hexagon-multiple-outline"
          title="function 1"
          :active="route.meta.name === 'classify'"
          @click="router.replace('/classify')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-api"
          title="function 2"
          :active="route.meta.name === 'auto'"
          @click="router.replace('/auto')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-history"
          title="function 3"
          :active="route.meta.name === 'history'"
          @click="router.replace('/history')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-database-outline"
          title="function 4"
          :active="route.meta.name === 'datasets'"
          @click="router.replace('/datasets')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-graph-outline"
          title="function 5"
          :active="route.meta.name === 'models'"
          @click="router.replace('/models')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-outline"
          title="function 6"
          :active="route.meta.name === 'users'"
          @click="router.replace('/users')"
        ></v-list-item>
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

let logout = ()=>{
  userInfo.changeIsLoggedin();
  router.push({path:'/login'})
}

</script>
