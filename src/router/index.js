import Vue from 'vue'
import VueRouter from 'vue-router'

import lvye from '@/components/lvye/lvye'
import chang from '@/components/huizan/chang'
import fuwu from '@/components/huizan/fuwu'
import inter from '@/components/huizan/inter'
import cg from '@/components/huizan/cg'
import ying from '@/components/hudong/ying'
import tu from '@/components/hudong/tu'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'lvye',
    component: lvye
}, 
{
    path: '/chang',
    name: 'chang',
    component: chang
}, 
{
    path:'/fuwu',
    name:'fuwu',
    component:fuwu
}, 
{
    path:'/inter',
    name:'inter',
    component:inter
}, 
{
    path:'/cg',
    name:'cg',
    component:cg
}, 
{
    path:'/ying',
    name:'ying',
    component:ying
}, 
{
    path:'/tu',
    name:'tu',
    component:tu
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router