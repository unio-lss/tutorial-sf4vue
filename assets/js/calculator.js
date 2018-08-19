import Vue from 'vue'
import SimpleCalculator from './vue/SimpleCalculator'

new Vue({
    el: '#calculator',
    template: '<simple-calculator/>',
    components: {SimpleCalculator}
});
