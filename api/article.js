import request from "../utils/request";

// 文章列表
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: 'api/articles',
    params,
  })
};