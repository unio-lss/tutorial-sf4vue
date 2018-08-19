<template>
    <div class="calc-display">
        <span v-show="hasMemory" class="memory">{{ memory }}</span>
        <span v-show="hasMemory" class="function">{{ func }}</span>
        <span class="input-value">{{ inputValue }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            memory: Number,
            func: String,
            inputValue: Number,
        },
        computed: {
            hasMemory() {
                return this.memory !== null;
            },
        },
    }
</script>

<style scoped>
    .calc-display {
        position: relative;
        text-align: right;
    }

    .memory {
        color: #9c9c9c;
        font-size: 1.3rem;
        font-style: italic;
    }

    .function {
        color: #9c9c9c;
    }

    .input-value {
        background-color: #d8fcff;
        font-weight: bold;
        font-size: 2rem;
        width: 10rem;
    }
</style>