import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { ResultType } from 'pages/types/global';

const axiosInstance = axios.create();
axiosInstance.defaults.headers['Content-Type'] =
  'application/json;charset=UTF-8';
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    const data: ResultType = response?.data
    if (data?.success) {
      return response;
    }
    return Promise.reject('sss');
  },
  (error) => {
    console.log(error);
    
    if (error.message.includes('timeout')) {
      console.log('请求超时');
    } else {
      console.log('系统内部错误');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
