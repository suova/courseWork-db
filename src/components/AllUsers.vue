<template lang="pug">
    div.all_users(@click ="show")
        a.user__name_style all users


</template>

<script>
    export default {
        name: "AllUsers",
        methods: {
            show: function (event) {
                event.preventDefault();
                this.$router.push('/allUsers');
            }
        }
    }
</script>

<style scoped>
    .user__name_style {
        color: brown;
        font-weight: bolder;
        font-family: monospace;
        font-size: 15px;
    }

    .all_users {
        float: right;
        display: flex;
        flex-direction: column;
        padding: 5px;
        margin: 10px;
    }

</style>