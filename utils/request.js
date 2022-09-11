import axios from 'axios';

// 基于axios封装请求模块

const request = axios.create({
  baseURL: 'https://api.realworld.io/'
});

// 请求拦截器

// 响应拦截器

export default request;