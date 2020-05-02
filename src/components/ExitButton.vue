<template lang = "pug">
    div.exit
        div.botton(@click ="logout")
            button.exit_button( type = "submit" class="btn btn-outline-dark") выход
        AllUsers
    
</template>

<script>
    import auth from "@/auth";
    import AllUsers from "@/components/AllUsers";
    import data from "./../data";
    import f from "../localStorageData";
    import postData from "@/login";

    export default {
        name: "ExitButton",
        components: {AllUsers},
        methods: {
            logout: function (event) {
                event.preventDefault();
                postData(`http://localhost:8181/logout`, {
                    "cookie": data.cookie
                }).then(() => {
                    data.cookie = null;
                    f.setCookie();
                    auth.logout();
                    console.log(f.getCookie());
                    this.$router.push('/login');
                }).catch((error) => {
                    console.error('Error:', error);
                });
            }
        }
    }
</script>

<style scoped>
    .exit {
        padding: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    }

</style>