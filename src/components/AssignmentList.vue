<template>
    <v-window v-model="tab">
        <v-window-item value="chapter">
            <v-list open-strategy="multiple" :opened="openedChapter">
                <v-list-group v-for="i in 2" :key="i" :value="i">
                    <template v-slot:activator="{ props }">
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
    </v-window>
</template>
<script setup></script>
<style scoped></style>