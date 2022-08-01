import { extend } from "umi-request";

/**通用类型 */
export type CommonResponse<T> = {
  code?: number;
  msg?: string;
  data: T;
};

const errorHandler = (error: any) => {
  const { response } = error;
  if (response && response.status) {
    console.log(response.status);

    // const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log(`请求错误 ${status}: ${url}`);
  }
};
/** 配置request请求时的默认参数 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: "include", // 默认请求是否带上cookie
  headers: {
    client_id: "eplus_web",
  },
  timeout: 6000,
  errorConfig: {
    adaptor: (resData: any) => {
      return {
        ...resData,
        showType: 2,
        errorMessage: resData.message,
      };
    },
  },
});

// request请求拦截器, 改变url 或 options
request.interceptors.request.use((url, options: any) => {
  return {
    url: `http://localhost:3000 + ${url}`,
    options: { ...options },
  };
});

// response响应拦截
request.interceptors.response.use((response) => {
  return response;
});

export const get = <T,>(url: string, options = {}) => {
  return request<CommonResponse<T>>(url, {
    method: "get",
    ...options,
  });
};

export const post = <T,>(url: string, options = {}) =>
  request<CommonResponse<T>>(url, {
    method: "post",
    ...options,
  });
