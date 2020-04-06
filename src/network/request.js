import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.22.22.22:8080',
        timeout: 5000
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        //console.log(err)
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })

    //发送网络请求
    return instance(config)
}