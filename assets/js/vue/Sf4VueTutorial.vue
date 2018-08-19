<template>
    <div class="root">
        <h1 v-text="title"></h1>
        <text-field/>
    </div>
</template>

<script>
    import TextField from "./components/TextField";

    export default {
        components: {TextField},
        data() {
            return {
                title: 'はじめてのSymfony4 + Vue.js',
            }
        },
    }
</script>

<style scoped>
    .root {
        border: dotted 5px #ffaf4d;
    }
</style>