import Vue from 'vue'
import VueRouter from  'vue-router'
import Login from "@/components/Login";
import Main from "@/components/Main";
import SignUp from "@/components/SignUp";

import MainHelp from "@/components/MainHelp";
import CreatePost from "@/components/CreatePost";
import CreateTopic from "@/components/CreateTopic";
import UsersList from "@/components/UsersList";




Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp
    },
    {
        path: "/forum/:id",
        name: "forumById",
        component: MainHelp
    },
    {
        path: "/create/post",
        name: "createPost",
        component: CreatePost
    },
    {
        path: "/post/:id",
        name: "showPost",
        component: Main
    },
    {
        path: "/create/forum",
        name: "createTopic",
        component: CreateTopic
    },
    {
        path: "/allUsers",
        name: "showUsers",
        component: UsersList
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router