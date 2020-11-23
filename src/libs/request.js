import axios from "axios";

const service = axios.create({
  // baseURL: process.env.REACT_APP_A,    // url = base url + request url
  timeout: 10000,
  headers: {
    post: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  },
});

service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    return response;
  },
  // 响应 3xx、4xx、5xx 等 走这里
  function (error) {
    console.log('error', error, error.response)

    const { response } = error;
    if (response) {
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        // store.commit("changeNetwork", false);
        alert('网络加载中')
      } else {
        return Promise.reject(error);
      }
    }
  }
);

// 简易版 post 请求
export const basePost = (url, data, config={}) => {
  return service({
    method: "post",
    url,
    data,
    ...config
  });
};

export default service;