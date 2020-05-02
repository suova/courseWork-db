<template lang="pug">
    div.posts
        div.createPost(@click="create" v-if ="intRole")
            p.create create post
            router-view
        div.list-group.list-group-flush()
            template(v-for="item in posts" v-model="admin")
                li.list-group-item
                    div.listPosts
                        div.titlePost(v-bind:id="item.id" @click="select") {{item.title}}
                        div.rights(v-bind:id="item.id" @click="deleted") {{admin}}

    
</template>


<script>
    import data from "@/data";
    import l from "@/localStorageData";
    import Auth from "@/auth";
    export default {
        name: "Posts",
        data() {
            return {
                posts: data.posts,
                admin: (Auth.getLogin().nick == "admin" || Auth.getLogin().nick == "moderator")? "delete post": '',
                intRole: data.role != 0
            }
        },
        created:function(){
            if(Auth.getLogin().nick == null){
                this.$router.push('/login');
            }
            fetch(`http://localhost:8181/forum/${this.$route.params.id}/posts`)
                .then((response) => {
                    return response.json();
                })
                .then((dat) => {
                    data.posts = dat;
                    this.posts = dat;
                    console.log("posts",dat);

                }).catch((error) => {
                console.error('Error:', error);
            });
        },
        methods: {
            select(e){
                console.log(e.target.id);
                l.setPostId(e.target.id);
                this.$router.push(`/post/${e.target.id}`)
            },
            create(){
                this.$router.push('/create/post')
            },
            deleted(e){
                fetch(`http://localhost:8181/post/${e.target.id}/delete`)
                    .then(() => {
                        this.$router.go();
                    })
                    .catch((error) => {
                    console.error('Error:', error);
                });

            }
        }
    }
</script>

<style scoped>
    .createPost{
        display: flex;
        margin: 10px;
        font-family: monospace;
        color: #32a1ce;
    }
    .rights{
        color: coral;
        font-family: monospace;
        font-size: 15px;
    }
    .titlePost{
        color: #444444;
        font-family: monospace;
        font-size: 20px;
    }



</style>