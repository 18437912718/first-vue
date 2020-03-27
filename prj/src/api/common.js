import axios from 'axios'
//1获取banner图
axios.defaults.baseURL='http://localhost:3000/'
//在这个里面改  在你自己的组件中导入这个
//car 是你后台app中的app.use('/car', search);  可以自己改一下
//后台在routes中自己新建一个对应的js文件   名字和hash值自己整
//下面示例是请求  名字自己想   对应一下   
axios.interceptors.response.use(function(response){
    return response.data;
},function(err){
    return Promise.reject(err)
});

export default axios;