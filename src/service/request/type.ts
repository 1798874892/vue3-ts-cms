import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XYRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

export interface XYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XYRequestInterceptors<T>
  showLoading?: boolean
}
