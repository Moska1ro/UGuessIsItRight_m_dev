<template>
  <div class="d-flex mb-2 align-center">
    <v-btn variant="text" icon="mdi-arrow-left" @click="router.back()"></v-btn>
    <div class="title-block text-h5 mr-4">
      <span>计算机组成原理</span>
    </div>
    <div class="title-block text-grey text-subtitle-2">#70</div>
  </div>
  <div class="d-flex flex-row align-start h-100">
    <v-card>
      <v-tabs
        v-model="tab"
        color="primary"
        direction="vertical"
      >
        <v-tab value="chapter">
          <v-icon start>
            mdi-book-open-outline
          </v-icon>
          章节
        </v-tab>
        <v-tab value="assignment">
          <v-icon start>
            mdi-book-edit-outline
          </v-icon>
          作业
        </v-tab>
        <v-tab value="star">
          <v-icon start>
            mdi-star-outline
          </v-icon>
          收藏
        </v-tab>
      </v-tabs>
    </v-card>
    <div class="w-100 pl-2">
      <v-window v-model="tab">
        <v-window-item value="chapter">
          <v-list open-strategy="multiple" :opened="openedChapter">
            <v-list-group v-for="i in 2" :key="i" :value="i">
              <template v-slot:activator="{props}">
                <v-list-item v-bind="props" title="章节名称"></v-list-item>
              </template>
              <v-list-item v-for="i in 3" :key="i" :title="`小节${i}`" link>
                <template v-slot:append>
                  <v-icon icon="mdi-check-circle" color="green-darken-3"></v-icon>
                </template>
              </v-list-item>
              <v-list-item v-for="i in 3" :key="i" :title="`小节${i}`" link>
                <template v-slot:append>
                  <v-icon icon="mdi-minus-circle" color="orange-darken-4"></v-icon>
                </template>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-window-item>
        <v-window-item value="assignment">
          <div class="d-flex flex-wrap">
            <v-card width="200" class="ma-2" v-for="i in 6" :key="i">
              <v-card-title>作业标题</v-card-title>
              <v-card-text>
                <div>截止时间：2024-3-14 24:00</div>
                <div>作业状态：<span class="text-red-lighten-1">未完成</span></div>
                <div class="d-flex">
                  <v-spacer />
                  <v-btn color="primary" variant="text" @click="0">
                    完成作业
                    <template v-slot:append>
                      <v-icon icon="mdi-arrow-right"></v-icon>
                    </template>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-window-item>
        <v-window-item value="star">
          收藏
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const tab = ref('chapter')

const openedChapter = [1, 2]
</script>
