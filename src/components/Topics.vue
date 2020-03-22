<template lang="pug">
    div.topics
        div.admin(v-if="admin")
            p.create(@click="createTopic") create topic
        div.list-group.list-group-flush(@click="select")
            li.list-group-item(v-for="item in topics" v-bind:id="item.id" ) {{item.title}}
        router-view


    
</template>

<script>
    import data from "@/data";
    import Auth from "@/auth";
    import f from "../localStorageData";
    export default {
        name: "Topics",
        data() {
            return {
                topics: data.topics,
                admin: Auth.getLogin().nick == "admin"? true: false,
            }
        },
        created:function(){

            let login = Auth.getLogin();
            if (login.nick==null){
                this.$router.push("/login")
            }

            fetch('http://localhost:8181/')
                .then((response) => {
                    return response.json();
                })
                .then((dat) => {
                    data.topics = dat;
                    this.topics = dat;
                    console.log(dat);

                }).catch((error) => {
                console.error('Error:', error);
            });
        },
        methods: {
            select(e){
                data.topicId = e.target.id;
                f.setTopicId(e.target.id);
                f.setTopicName(document.getElementById(e.target.id).textContent);
                this.$router.push(`/forum/${e.target.id}`);
            },
            createTopic(){
                this.$router.push(`/create/forum`);
            }
        }
    }
</script>

<style scoped>
    .admin{
        display: flex;
        margin: 10px;
        font-family: monospace;
        color: coral;
    }
    .list-group-item{
        color: #444444;
        font-family: monospace;
        font-size: 20px;
    }

</style>