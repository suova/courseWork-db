<template lang="pug">
    div
        div.title.title__style(v-if="path=='/'")
            h1 Topics
        div.title.title__style(v-if="path==`/forum/${id}`")
            p.back(@click="back" v-model="Topicname") back to Topics
            h1 {{Topicname}}
        div.title.title__style(v-if="path==`/post/${idPost}`")
            p.back(@click="back") back to Posts
            h1 Post
</template>

<script>
    import f from "../localStorageData";

    export default {
        name: "Title",
        data() {
            return {
                path: this.$route.path,
                id: f.getTopicId().topics,
                idPost: f.getPostId().topics,
                Topicname: f.getTopicName().topics,
            }
        },
        methods: {
            back(e){
                e.preventDefault();
                this.$router.go(-1);
            },

        }
    }
</script>

<style scoped>
    .title {
        align: center;

    }
    .title__style{
        color: #444444;
        font-size: medium;
        font-family: monospace;
    }

</style>