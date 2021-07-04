import VueRouter from 'vue-router'
import Vue from "vue";
import BaseSelectPage from './views/BaseSelectPage'
import BaseTooltipPage from './views/BaseTooltipPage'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { name: 'BaseSelectPage', path: '/base-select', component: BaseSelectPage },
        { name: 'BaseTooltipPage',  path: '/base-tooltip', component: BaseTooltipPage }
    ]
})

export default router
