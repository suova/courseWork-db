import data from "./data";
export default {
    setTopics: function(data){
        localStorage.setItem("topics",data);
    } ,
    getTopics: function(){
        return {
            topics:localStorage.getItem("topics")
        }
    },

    setPosts: function(data){
        localStorage.setItem("posts",data);
    } ,
    getPosts: function(){
        return {
            topics:localStorage.getItem("posts")
        }
    },
    setTopicId: function(data){
        localStorage.setItem("topicId",data);
    } ,
    getTopicId: function(){
        return {
            topics:localStorage.getItem("topicId")
        }
    },
    setPostId: function(data){
        localStorage.setItem("postId",data);
    } ,
    getPostId: function(){
        return {
            topics:localStorage.getItem("postId")
        }
    },
    setTopicName: function(data){
        localStorage.setItem("TopicName",data);
    } ,
    getTopicName: function(){
        return {
            topics:localStorage.getItem("TopicName")
        }
    },
    setPost: function(data){
        localStorage.setItem("post",data);
    } ,
    getPost: function(){
        return {
            topics:localStorage.getItem("post")
        }
    },
    setComments: function(data){
        localStorage.setItem("comments",data);
    } ,
    getComments: function(){
        return {
            topics:localStorage.getItem("comments")
        }
    },
    setUser: function(){
        localStorage.setItem("user",data.role);
    },
    getUser: function(){
        return {
            user:localStorage.getItem("user")
        }
    },

    setCookie: function(){
        localStorage.setItem("cookie",data.cookie);
    },
    getCookie: function(){
        return {
            cookie:localStorage.getItem("cookie")
        }
    },
}