const data = {
    nick: localStorage.getItem('nick') || '',
    topics: localStorage.getItem('topics') || '',
    posts: localStorage.getItem('posts') || '',
    topicId: localStorage.getItem('topicId') || '',
    postId: localStorage.getItem('postId') || '',
    post: localStorage.getItem('post') || '',
    comments: localStorage.getItem('comments') || '',
    role: localStorage.getItem('user') || '',
    cookie: localStorage.getItem('cookie') || '',
};
export default data