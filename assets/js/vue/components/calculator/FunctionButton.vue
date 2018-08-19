<template>
    <button type="button" v-on:click="$emit('push', func)">{{ func }}</button>
</template>

<script>
    export default {
        props: {
            func: String,
        }
    }
</script>
