<template lang="pug">
    div.body
        Title
        div(v-if="path=='/'")
            Topics
        div(v-if="path==`/forum/${idTopic}`")
            Posts
        div(v-if="path==`/post/${idPost}`")
            OnePost


</template>

<script>
    import Title from "@/components/Title";
    import Topics from "@/components/Topics";
    import Posts from "@/components/Posts";
    import f from "../localStorageData";
    import OnePost from "@/components/OnePost";
    export default {
        name: "Body",
        components: {OnePost, Title, Topics, Posts},
        data() {
            return {
                path: this.$route.path,
                idTopic: f.getTopicId().topics,
                idPost: f.getPostId().topics
            }
        },
    }

</script>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>