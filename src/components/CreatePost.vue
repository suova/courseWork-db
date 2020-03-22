<template lang="pug">
    div.createPost
        div.title.title__style
            p.back(@click="back") back to posts
        div.input-group.mb-3
            div.input-group-prepend
                span.input-group-text Title
            input(type="text" class="form-control" v-model="title")
        div.input-group
            div.input-group-prepend
                span.input-group-text Content
            textarea.form-control(v-model="content")
        button.btn.btn-outline-success(@click="createPost") post
    
</template>

<script>

    import data from "./../data";
    import postData from "@/login";

    export default {
        name: "CreatePost",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            back(e){
                e.preventDefault();
                this.$router.go(-1);
            },
            createPost(){
                postData(`http://localhost:8181/forum/${data.topicId}/post/${data.nick}/create`, {
                             "created": new Date(),
                              "title": this.title,
                              "content":this.content
                        }).then((dat) => {
                            console.log("AA",dat);
                            this.$router.go(-1);

                        }).catch((error) => {
                            console.error('Error:', error);
                        });
            }
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
    .btn{
        margin: 10px;
    }
    .createPost{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
</style>