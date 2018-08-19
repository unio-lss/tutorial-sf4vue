<template>
    <div class="calculator">
        <div class="row">
            <calc-display
                    v-bind:memory="memory"
                    v-bind:func="func"
                    v-bind:inputValue="inputValue"/>
        </div>
        <div class="row">
            <function-button v-bind:func="'+'" v-on:push="inputFunction"/>
            <function-button v-bind:func="'-'" v-on:push="inputFunction"/>
            <function-button v-bind:func="'C'" v-on:push="clear"/>
        </div>
        <div class="row" v-for="row in [[7,8,9],[4,5,6],[1,2,3]]">
            <number-button
                    v-for="number in row"
                    v-bind:key="number"
                    v-bind:number="number"
                    v-on:push="inputNumber"/>
        </div>
        <div class="row">
            <number-button v-bind:number="0" v-on:push="inputNumber"/>
            <function-button v-bind:func="'='" v-on:push="equal"/>
        </div>
    </div>
</template>

<script>
    import CalcDisplay from "./components/calculator/CalcDisplay";
    import FunctionButton from "./components/calculator/FunctionButton";
    import NumberButton from "./components/calculator/NumberButton";

    export default {
        components: {
            CalcDisplay,
            FunctionButton,
            NumberButton,
        },
        data() {
            return {
                memory: null,
                func: null,
                inputValue: 0,
                isError: false,
            };
        },
        methods: {
            error() {
                this.isError = true;
                this.memory = null;
                this.func = null;
                this.inputValue = 'ERROR';
            },
            clear() {
                this.isError = false;
                this.memory = null;
                this.func = null;
                this.inputValue = 0;
            },
            calc(memory, func, input) {
                if (memory === null) {
                    return input;
                }

                let val = NaN;
                switch (func) {
                    case '+':
                    case '-':
                        let bias = func === '+' ? 1 : -1;
                        val = memory + (bias * input);
                        break;
                }
                if (!Number.isSafeInteger(val)) {
                    this.error();
                    return NaN;
                }

                return val;
            },
            inputNumber(number) {
                if (this.isError) {
                    return;
                }

                if (this.inputValue === 0) {
                    this.inputValue = number;
                    return;
                }
                let parsed = parseInt(this.inputValue.toString() + number.toString());
                if (Number.isSafeInteger(parsed)) {
                    this.inputValue = parsed;
                }
            },
            inputFunction(func) {
                if (this.isError) {
                    return;
                }

                let val = this.calc(this.memory, func, this.inputValue);
                if (!isNaN(val)) {
                    this.memory = val;
                    this.func = func;
                    this.inputValue = 0;
                }
            },
            equal() {
                if (this.isError || this.memory === null || this.func === null) {
                    return;
                }

                let val = this.calc(this.memory, this.func, this.inputValue);
                if (!isNaN(val)) {
                    this.memory = null;
                    this.func = null;
                    this.inputValue = val;
                }
            },
        },
    }
</script>

<style scoped>
    .calculator {
        border-radius: 0 2rem 0 2rem;
        padding: 1rem;
        background-color: #ffe7aa;
    }

    .row {
        text-align: center;
    }

    .row:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    button:not(:last-child) {
        margin-right: 0.5rem;
    }
</style>