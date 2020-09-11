import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Tab);
Vue.use(Tabs);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')