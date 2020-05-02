<template lang="pug">
    div.createTopic
        div.title.title__style
            p.back(@click="back") back to topics
        div.list-group.list-group-flush()
            template(v-for="item in users")
                li.list-group-item
                    div.listUsers
                        div.titleUsers
                            div.space
                                p {{item.nickname}} is
                            div.space
                                p.color  {{roles[item.role]}}

                        div.titleUsers(v-bind:id="item.nickname + '1'" v-if ="intRole")
                            div.save.space
                                select.custom-select
                                    option(selected) Change role
                                    option(value="0" ) {{roles[0]}}
                                    option(value="1") {{roles[1]}}
                                    option(value="2") {{roles[2]}}
                                    option(value="3") {{roles[3]}}
                            button.space( type="button" class="btn btn-light" @click="save" v-bind:id="item.nickname") Save


</template>

<script>
    import Auth from "@/auth";
    import data from "./../data";
    import postData from "@/login";
    console.log("ROOOOLE",data.role );
    let map = {"banned":0,"user":1,"moderator":2,"admin":3};
    export default {
        name: "UsersList",
        data() {
            return {
                roles: ["banned","user","moderator","admin"],
                users: data.users,
                role:null,
                intRole: (data.role != 0 && data.role != 1) ,
            }
        },
        methods: {
            back(e){
                e.preventDefault();
                this.$router.go(-1);
            },
            save(e){
                let p = document.getElementById( e.target.id + 1);
                let l = p.getElementsByClassName("custom-select");
                this.role = l[0].options[l[0].options.selectedIndex].text;
                console.log("ROLE", this.role);

                postData(`http://localhost:8181/changeRole/${e.target.id}`, {
                    "role" : map[this.role],
                }).then(() => {
                    this.$router.go();

                }).catch((error) => {
                    console.error('Error:', error);
                });

            }
        },
        created:function(){
            if(Auth.getLogin().nick == null){
                this.$router.push('/login');
            }
            fetch(`http://localhost:8181/getUsers`)
                .then((response) => {
                    return response.json();
                })
                .then((dat) => {
                    data.users = dat;
                    this.users = dat;
                    console.log("USERS",dat);

                }).catch((error) => {
                console.error('Error:', error);
            });
        }
    }
</script>

<style scoped>
    .title {
        align: center;

    }
    .space{
        padding-right: 5px;
    }
    .title__style{
        color: #444444;
        font-size: medium;
        font-family: monospace;
    }
    .color{
        color: brown;
    }
    .createTopic{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .listUsers{
        display: flex;
        flex-direction: column;
    }
    .titleUsers{
        display: flex;
        flex-direction: row;
        padding: 5px;
    }
    .custom-select{

    }
</style>