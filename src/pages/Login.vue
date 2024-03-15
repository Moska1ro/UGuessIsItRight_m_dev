<template>
  <div class="container bg-grey-lighten-3">
    <div class="warp">
      <v-card class="box elevation-6">
        <v-card-item>
          <div class="text-h5 mb-4 text-center">
            系统的名字
          </div>
        </v-card-item>

        <v-card-text>
          <v-alert type="error" :title="errMsg" class="mb-4" v-model="error"></v-alert>
          <v-text-field label="UID" prepend-icon="mdi-account-outline" persistent-hint variant="outlined"
            v-model="uid"></v-text-field>
          <v-text-field label="密码" type="password" prepend-icon="mdi-lock-outline" persistent-hint variant="outlined"
            v-model="password" @keydown.enter="login"></v-text-field>
          <v-btn block size="x-large" variant="flat" color="primary" :loading="loading" @click="login">登录</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dialog from '@/plugins/dialog';
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';


const userInfo = useUserStore()


const loading = ref(false)
const error = ref(false)
const errMsg = ref('')

const uid = ref('')
const password = ref('')
const router = useRouter()
let login = () => {
  error.value = false
  loading.value = true
  if (!uid.value || !password.value) {
    errMsg.value = '请输入UID和密码'
    error.value = true
  } else if (uid.value === '0' && password.value === '0') {// 模拟登录，实际应经过axios，考虑后期加入token
    userInfo.login(0);
    router.push({ path: '/teacher' })
  } else if (uid.value === '1' && password.value === '1') {// 模拟登录，实际应经过axios，考虑后期加入token
    userInfo.login(1);
    router.push({ path: '/student' })
  } else {
    dialog.info('用户名或密码错误！')
  }
  loading.value = false
}

</script>

<style scoped>
.container {
  position: absolute;
  inset: 0;
}

.warp {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  display: inline-block;
  width: 400px;
  padding: 16px;
}
</style>