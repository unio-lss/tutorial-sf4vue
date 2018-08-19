<template>
    <div class="scoped-css">
        <span class="text">scoped css test</span>
        <scoped-css-elem/>
    </div>
</template>

<script>
    import ScopedCssElem from "./components/ScopedCssElem";

    export default {
        components: {ScopedCssElem}
    }
</script>

<style scoped>
    .scoped-css {
        padding: 1rem;
        border: solid 2px red;
    }

    .text {
        margin-left: 13rem;
        font-size: 2rem;
        font-weight: bold;
    }
</style>