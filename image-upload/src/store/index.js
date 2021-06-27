import VueX from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

Vue.use(VueX);

export default new VueX.Store({
    modules: {auth}
})