<template>
  <v-layout style="min-width: 800px">
    <v-app-bar density="comfortable" color="secondary" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerShow = !drawerShow"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title><a style="cursor: pointer;" @click="router.replace('/')">系统的名字</a></v-app-bar-title>
      <template v-slot:append>
        <v-btn class="text-none" variant="outlined">
          Administrator
          <v-menu activator="parent">
            <v-list density="compact" style="padding: 0;" rounded="sm">
              <v-list-item link @click="openSettingDialog">
                <template v-slot:prepend>
                  <v-icon icon="mdi-cog-outline" size="medium"></v-icon>
                </template>
                <v-list-item-title>账户设置</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="openPasswdDialog">
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
        <v-list-item prepend-icon="mdi-hexagon-multiple-outline" title="我的作业" :active="route.meta.name === 'classify'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-api" title="我的收藏" :active="route.meta.name === 'auto'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-history" title="学情分析" :active="route.meta.name === 'history'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-database-outline" title="智能题库" :active="route.meta.name === 'datasets'"
          @click="router.replace('/404')"></v-list-item>
        <v-list-item prepend-icon="mdi-graph-outline" title="Chart Demo" :active="route.meta.name === 'models'"
          @click="router.replace('/chartdemo')"></v-list-item>
        <v-list-item prepend-icon="mdi-account-outline" title="function 6" :active="route.meta.name === 'users'"
          @click="console.log(userInfo.isLoggedin)"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <div style="padding: 16px; height: 100%;">
        <router-view></router-view>
      </div>
    </v-main>
  </v-layout>

  <v-dialog
    v-model="settingDialog.show"
    max-width="400px"
    persistent
  >
    <v-card>
      <v-card-title>账号设置</v-card-title>
      <v-card-text>
        <v-form ref="settingForm">
          <v-text-field
            label="UID"
            density="compact"
            readonly
            v-model="settingDialog.uid"
          ></v-text-field>
          <v-text-field
            label="账号名称"
            density="compact"
            :rules="[requiredRule('名称')]"
            v-model="settingDialog.name"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          @click="settingDialog.show = false"
        >
          取消
        </v-btn>
        <v-btn
          color="primary"
          variant="text"
          @click="confirmSettingDialog"
          :loading="settingDialog.loading"
        >
          保存
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="passwdDialog.show"
    max-width="400px"
    persistent
  >
    <v-card>
      <v-card-title>修改密码</v-card-title>
      <v-card-text>
        <v-form ref="passwdForm">
          <v-text-field
            label="原密码"
            density="compact"
            type="password"
            :rules="[requiredRule('原密码')]"
            v-model="passwdDialog.oldPassword"
          ></v-text-field>
          <v-text-field
            label="新密码"
            density="compact"
            type="password"
            :rules="[requiredRule('新密码')]"
            v-model="passwdDialog.newPassword"
          ></v-text-field>
          <v-text-field
            label="确认密码"
            density="compact"
            type="password"
            :rules="[confirmPasswdRule]"
            v-model="passwdDialog.confirmPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          @click="passwdDialog.show = false"
        >
          取消
        </v-btn>
        <v-btn
          color="primary"
          variant="text"
          @click="confirmPasswdDialog"
          :loading="passwdDialog.loading"
        >
          保存
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user';

const router = useRouter()
const route = useRoute()
const userInfo = useUserStore()

const drawerShow = ref()

const logout = () => {
  userInfo.changeIsLoggedin();
  router.push({ path: '/login' })
}

const settingDialog = ref({
  show: false,
  id: '',
  name: '',
  loading: false
})

function openSettingDialog() {
  settingDialog.value.id = userInfo.ID
  settingDialog.value.name = userInfo.name
  settingDialog.value.loading = false
  settingDialog.value.show = true
}

const settingForm = ref(null)
async function confirmSettingDialog() {
  const { valid } = await settingForm.value.validate()
  if (!valid) return
  settingDialog.value.loading = true
  setTimeout(() => { // TODO: API请求
    logout()
  }, 500);
}

const passwdDialog = ref({
  show: false,
  loading: false,
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

function openPasswdDialog() {
  passwdDialog.value.loading = false
  passwdDialog.value.oldPassword = ''
  passwdDialog.value.newPassword = ''
  passwdDialog.value.confirmPassword = ''
  passwdDialog.value.show = true
}

const passwdForm = ref(null)
async function confirmPasswdDialog() {
  const { valid } = await passwdForm.value.validate()
  if (!valid) return
  passwdDialog.value.loading = true
  setTimeout(() => { // TODO: API请求
    logout()
  }, 500);
}

const confirmPasswdRule = (x) => {
  if (x === passwdDialog.value.newPassword) return true
  else return '两次输入密码不一致'
}

const requiredRule = (d) => {
  return (x) => {
    if (!x) return `${d}不能为空`
    return true
  }
}

</script>
