import data from "./data";
export default {
    setLogin: function(){
        //localStorage.setItem("username",data.user.name);
        //localStorage.setItem("topics",data.topics);
        localStorage.setItem("nick",data.nick);
    } ,
    getLogin: function(){
        return {
            //name:localStorage.getItem("username"),
            //id:localStorage.getItem("userid"),
            nick:localStorage.getItem("nick")
        }
    },
    logout:function(){
        //localStorage.removeItem("username");
        //localStorage.removeItem("topics");
        localStorage.removeItem("nick");
    }
}