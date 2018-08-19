<template>
    <div class="text-field">
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                message: 'Vue.jsのtwigサンプルです'
            }
        }
    }
</script>

<style scoped>
    .text-field {
        border: dotted 5px #718C00;
    }
</style>