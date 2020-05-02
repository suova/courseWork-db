<template lang="pug">
    div.signUp
        form(@submit="signUp")
            div.form-group
                label Nickname
                input(type="nick" class="form-control"  aria-describedby="emailHelp" v-model="input.nick")
            div.form-group
                label Full name
                input(type="fullname" class="form-control"  aria-describedby="emailHelp" v-model="input.fullname")
            div.form-group
                label About
                input(type="about" class="form-control" aria-describedby="emailHelp" v-model="input.about")
            div.form-group
                label Email address
                input(type="email" class="form-control" aria-describedby="emailHelp" v-model="input.email")
            div.form-group
                label Country
                input(type="country" class="form-control" aria-describedby="emailHelp" v-model="input.country")
            div.form-group
                label Password
                input(type="password" class="form-control" v-model="input.password")
            button(type="submit" class="btn btn-primary") signup
</template>

<script>
    import auth from "@/auth";
    import postData from "@/login";
    import data from "./../data";
    import f from "../localStorageData";

    export default {
        name: "SignUp",
        data() {
            return {
                input: {
                    nick: "",
                    fullname:"",
                    about: "",
                    email:"",
                    country:"",
                    password: ""
                }
            }
        },
        methods: {
            signUp(e) {
                e.preventDefault();
                postData(`http://localhost:8181/user/${this.input.nick}/create`, {
                    "password": this.input.password,
                    "fullname": this.input.fullname,
                    "about": this.input.about,
                    "email": this.input.email,
                    "country": this.input.country
                }).then((dat) => {
                    fetch(`http://localhost:8181/sendCookie/${dat.nickname}`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((dat) => {
                            data.cookie = dat;
                            f.setCookie();
                            console.log("COOKIE",dat);

                        }).catch((error) => {
                        console.error('Error:', error);
                    });
                    data.nick = dat.nickname;
                    auth.setLogin();
                    this.$router.push('/');

                }).catch((error) => {
                    console.error('Error:', error);
                });

            }
        }
    }
</script>

<style scoped>
    .signUp{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>