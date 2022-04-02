import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { notification } from 'antd';
import { ResultType } from 'pages/types/global';

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const axiosInstance = axios.create();
axiosInstance.defaults.headers['Content-Type'] =
  'application/json;charset=UTF-8';
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const data: ResultType = response?.data
    if (data?.success) {
      return response;
    }
    return Promise.reject('sss');
  },
  (error) => {
    const errMsgArr = error?.message?.split(' ')
    const statusCode = errMsgArr?.[errMsgArr?.length - 1]
    console.log(statusCode);
    
    if (error.message.includes('timeout')) {
      console.log('请求超时');
    } else if (statusCode) {
      notification.error({
        description: codeMessage?.[statusCode],
        message: statusCode,
      });
    } else {
      console.log('系统内部错误');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
