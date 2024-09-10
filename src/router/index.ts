import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Reminders from "../views/Reminders.vue";
import Trash from "../views/Trash.vue";
import EditLabels from "../views/EditLabels.vue";
import Login from "../views/Login.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import AuthLayout from "../layout/AuthLayout.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"Public",
        component:DefaultLayout,
        children:[
            {
                path: '',
                name: 'Home',
                component: Home,
            },
            {
                path: 'reminders',
                name: 'Reminders',
                component: Reminders,
            },
            {
                path: 'trash',
                name: 'Trash',
                component: Trash,
            },
            {
                path: 'edit-labels',
                name: 'EditLabels',
                component: EditLabels,
            },
        ]
    },
    {
        path:"/auth",
        name: 'Auth',
        component:AuthLayout,
        children:[
            {
                path: 'login',
                name: 'Login',
                component: Login,
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
            },
        ]
    }

];
export default routes;