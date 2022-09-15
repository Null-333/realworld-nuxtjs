import request from "../utils/request";

// 标签列表
export const getTags = () => {
  return request({
    method: 'GET',
    url: 'api/tags',
  })
};