import axios from 'axios';

// 创建一个 axios 实例
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000 // 设置超时时间
});

// 请求拦截器
instance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        // 处理 token 过期或无效的情况
        console.error('Token expired or invalid. Please log in again.');
        // 可能需要重定向到登录页面或进行其他处理
    }
    return Promise.reject(error);
});

export default instance;
