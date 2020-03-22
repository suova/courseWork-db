<template lang="pug">
    div.user
        img.user__img.user__img_style(src = './useri.jpg')
        a.user__name_style(v-model="nick") {{ nick }}


</template>

<script>
    import data from "@/data";

    export default {
        name: "User",
        data() {
            return {
                nick: data.nick,
            }
        },
    }
</script>

<style scoped>
    .user__name_style {
        color: #444444;
        font-family: monospace;
        font-size: 15px;
    }

    .user {
        float: right;
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    .user__img {
        width: 50px;
    }
    .user__img_style{
        border-radius: 50px;
    }

</style>