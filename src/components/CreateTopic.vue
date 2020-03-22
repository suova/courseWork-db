<template lang="pug">
    div.createTopic
        div.title.title__style
            p.back(@click="back") back to topics
        div.input-group.mb-3
            div.input-group-prepend
                span.input-group-text Title
            input(type="text" class="form-control" v-model="title")
        button.btn.btn-outline-success(@click="createTopic") create

</template>

<script>
    import postData from "@/login";

    export default {
        name: "CreateTopic",
        data() {
            return {
                title: '',
            }
        },
        methods: {
            back(e){
                e.preventDefault();
                this.$router.go(-1);
            },
            createTopic(){
                postData(`http://localhost:8181/forum/create`, {
                    "created": new Date(),
                    "title": this.title
                }).then((dat) => {
                    console.log("AA",dat);
                    this.$router.go(-1);

                }).catch((error) => {
                    console.error('Error:', error);
                });
            }
        },
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
    .createTopic{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>