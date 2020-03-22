<template lang = "pug">
    div.exit(@click ="logout")
        button.exit_button( type = "submit" class="btn btn-outline-dark") выход
    
</template>

<script>
    import auth from "@/auth";

    export default {
        name: "ExitButton",
        methods: {
            logout: function (event) {
                event.preventDefault()
                auth.logout();
                this.$router.push('/login');
                console.log(auth.getLogin());
            }
        }
    }
</script>

<style scoped>
    .exit {
        padding: 5px;
        margin: 10px;
    }

</style>