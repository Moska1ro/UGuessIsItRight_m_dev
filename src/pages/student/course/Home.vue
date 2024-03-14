<template>
  <div class="text-h5 mb-2">
    我的课程
  </div>
  <div class="d-flex flex-wrap">
    <v-card width="200" class="ma-2" v-for="course in courses" :key="course.id">
      <v-img
        class="align-end text-white"
        height="120"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>{{ course.courseName }}</v-card-title>
      </v-img>
      <v-card-text>
        <div>授课教师：{{ course.teacherName }}</div>
        <div class="d-flex">
          <v-spacer />
          <v-btn color="primary" variant="text" @click="router.push(`/student/course/${ course.id }`)">
            进入课程
            <template v-slot:append>
              <v-icon icon="mdi-arrow-right"></v-icon>
            </template>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
  <div class="text-h5 my-2">
    推荐课程
  </div>
  <div class="d-flex flex-wrap">
    <v-card width="200" class="ma-2" v-for="course in courses" :key="course.id">
      <v-img
        class="align-end text-white"
        height="120"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>{{ course.courseName }}</v-card-title>
      </v-img>
      <v-card-text>
        <div>授课教师：{{ course.teacherName }}</div>
        <div class="d-flex">
          <v-spacer />
          <v-btn color="primary" variant="text" @click="0">
            加入课程
            <template v-slot:append>
              <v-icon icon="mdi-plus"></v-icon>
            </template>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const courses = [
  {
    "id": "70",
    "courseName": "计算机组成原理",
    "teacherName": "谢在鹏"
  },
  {
    "id": "70",
    "courseName": "计算机组成原理",
    "teacherName": "谢在鹏"
  },
  {
    "id": "70",
    "courseName": "计算机组成原理",
    "teacherName": "谢在鹏"
  },
  {
    "id": "70",
    "courseName": "计算机组成原理",
    "teacherName": "谢在鹏"
  },
  {
    "id": "70",
    "courseName": "计算机组成原理",
    "teacherName": "谢在鹏"
  },
]
</script>
