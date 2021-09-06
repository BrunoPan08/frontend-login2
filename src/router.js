import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Registro from "./components/Registro.vue"
import RegistroProduto from "./components/RegistroProduto.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/registro', component: Registro},
        {path: '/registroproduto', component: RegistroProduto}
    ]
})