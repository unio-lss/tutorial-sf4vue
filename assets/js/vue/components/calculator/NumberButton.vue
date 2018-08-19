<template>
    <button type="button" v-on:click="$emit('push', number)">{{ number }}</button>
</template>

<script>
    export default {
        props: {
            number: Number,
        },
    }
</script>
