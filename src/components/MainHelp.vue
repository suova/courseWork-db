<template lang="pug">
    div.main
        Header
        Body

</template>

<script>
    import Header from "./Header";
    import Body from "./Body";

    export default {
        name: "MainHelp",
        components: {
            Header,Body
        },
    }
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

</style>