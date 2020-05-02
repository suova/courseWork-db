<template lang="pug">
    div.post
        div.post_content
            div.title
                h4(v-model = "post") {{post[0].title}}
            div.content(v-model = "post") {{post[0].content}}
            div.name(v-model = "post") {{post[0].author}}
            div.date
                p {{post[0].created.split('.')[0].split('T')[0]}} {{post[0].created.split('.')[0].split('T')[1]}}

        div.post_comments
            div.list-group.list-group-flush
                template(v-for="item in comments" v-bind:id="item.id")

                    li.comment1_content
                        div.comment_name {{item.author}}
                        div.comment_content {{item.content}}

                        div.likes {{item.likes}}
                            img.like(src = './like.png' v-bind:id="item.id" @click ="like")
                        div.date
                            p {{item.created.split('.')[0].split('T')[0]}}

        div.send_comment(v-if="role")
            div(class="input-group mb-3")
                input(type="text" class="form-control" v-model = "input" placeholder="Type ur comment" aria-label="Recipient's username" aria-describedby="basic-addon2")
                div(class="input-group-append" @click ="comment")
                    button(class="btn btn-outline-secondary"  type="button") send



</template>

<script>
    import postData from "@/login";
    import data from "./../data";
    import f from "../localStorageData";
    import Auth from "@/auth";
    console.log("USER ROLE", f.getUser().role);
    export default {
        name: "OnePost",
        data() {
            return {
                post: data.post,
                comments: data.comments,
                input:"",
                role: data.role != 0,
            }
        },

        created:function(){
            if(Auth.getLogin().nick == null){
                this.$router.push('/login');
            }
            fetch(`http://localhost:8181/post/${this.$route.params.id}`)
                .then((response) => {
                    return response.json();
                })
                .then((dat) => {
                    data.post = dat;
                    this.post = dat;
                    console.log("post",dat);

                }).catch((error) => {
                console.error('Error:', error);
            });
            fetch(`http://localhost:8181/post/${this.$route.params.id}/comments`)
                .then((response) => {
                    return response.json();
                })
                .then((dat) => {
                    dat.sort(function (a, b) {
                        if (a.created.split('.')[0].split('T')[0] < b.created.split('.')[0].split('T')[0]) {
                            return -1;
                        }
                        if (b.created.split('.')[0].split('T')[0] < a.created.split('.')[0].split('T')[0]) {
                            return 1;
                        }
                        return 0;
                    });
                    console.log("DATA",dat);
                    data.comments = dat;
                    this.comments = dat;
                    console.log("comments",dat);

                }).catch((error) => {
                console.error('Error:', error);
            });
        },
        methods: {
            comment(){
                postData(`http://localhost:8181/post/${this.$route.params.id}/comment/${data.nick}/create`, {
                    "created": new Date(),
                    "content": this.input,
                }).then(() => {
                    this.$router.go();
                }).catch((error) => {
                    console.error('Error:', error);
                });
            },
            like(e){
                console.log("like",e.target.id)
                fetch(`http://localhost:8181/like/${e.target.id}/${data.nick}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then(() => {
                        this.$router.go();

                    }).catch((error) => {
                    console.error('Error:', error);
                });
            }
        },

    }
</script>

<style scoped>
    .post{
        display: flex;
        flex-direction: column;
    }
    .title{
        float: left;
    }
    .like{
        width: 30px;
        height: 30px;
    }
    .list-group{
        min-width: 50%;
    }
    .post_content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: thick double #32a1ce;
        height: 250px;
        max-width: 50%;
        margin: 10px;
        padding: 10px;
        color: #444444;
        font-family: monospace;

    }

    .comment1_content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: thick double #BDCCFF;
        height: 200px;
        min-width: max-content;
        margin: 10px;
        padding: 10px;
        color: #444444;
        font-family: monospace;
        padding-bottom: 0px;
    }
    .title{
        display: flex;
    }
    .comment_content{
        display: flex;
        font-size: 15px;
    }
    .comment_name{
        display: flex;
        justify-content: flex-start;
        font-weight: bold;
        font-size: 17px;

    }
    .likes{
        display: flex;
        justify-content: flex-end;
    }
    .date{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0;
    }
    .date p{
        margin-bottom: 0px;
    }
    .content{
        display: flex;
        font-size: 15px;
    }
    .name{
        display: flex;
        justify-content: flex-end;
    }

    .post_comments{
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px;
        color: #444444;
        font-family: monospace;

    }
    .list-group {
        width: 25%;
    }
    .send_comment{
        display: flex;
        max-width: 50%;
        margin: 10px;
        justify-content: center;
        /*position: fixed;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
    }

</style>