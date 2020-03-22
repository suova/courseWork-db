<template lang="pug">
    div.header
        User
        ExitButton
    
</template>

<script>
    import ExitButton from "@/components/ExitButton";
    import User from "@/components/User";

    export default {
        name: "Header",
        components: {ExitButton, User}
    }
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 5px 0 5px;
        height: 5vh;
        min-height: fit-content;
    }

</style>