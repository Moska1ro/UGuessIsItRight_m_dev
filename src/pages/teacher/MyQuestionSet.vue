<template>
    <div id="main">
        <v-btn @click="getQuestionSet">获取题目</v-btn>
        <v-btn @click="createQuestion">创建题目</v-btn>
        <v-expansion-panels>
            <v-expansion-panel v-for="question in questionSet" :text="question.content"
                :title="question.chapter"></v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user';
import instance from '@/plugins/axios';
import dialog from '@/plugins/dialog';
let userInfo = useUserStore()

let questionSet = ref([
    {
        title: 'q1',
        content: 'this is q1'
    },
    {
        title: 'q2',
        content: 'this is q2'
    },
    {
        title: 'q3',
        content: 'this is q3'
    },
])

let courseId = ref();
let courseName = ref();
let chapter = ref();
let difficulty = ref();
let questionNumber = ref();
let topic = ref([])


let getQuestionSet = () => {
    instance.get(`/teacher/question/userid=${userInfo.getID}`, {
        params: {
            courseId: courseId.value,
            chapter: chapter.value,
            difficulty: difficulty.value,
        }
    }).then((res) => {
        questionSet.value = res.data.data.questions;
    }).catch((err) => {
        console.log(err);
    })
}

let createQuestion = () => {
    instance.post('/teacher/question/new', {
        courseName: courseName.value,
        number: questionNumber.value,
        chapter: chapter.value,
        difficulty: difficulty.value,
        topic: topic.value
    }).then((res) => {
        dialog.info("添加成功！");
        getQuestionSet();
    }).catch((err) => {
        console.log(err);
    })
}
let addQuestionSet = () => {
    instance.post('/teacher/question/', {
        courseName: courseName.value,
        number: questionNumber.value,
        chapter: chapter.value,
        difficulty: difficulty.value,
        topic: topic.value
    }).then((res) => {
        dialog.info("添加成功！");
        getQuestionSet();
    }).catch((err) => {
        console.log(err);
    })
}
let deleteQuestion = () => {
    instance.delete('/teacher/question', {
        questionId: 1
    }).then((res) => {
        dialog.info("删除成功！");
        getQuestionSet();
    }).catch((err) => {
        console.log(err);
    })
}
</script>
<style scoped></style>