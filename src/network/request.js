import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 12000
    //localhost
})

export function request(config) {
    return instance(config)
}

instance.interceptors.request.use(config => {
    return config//拦截成功后必须要进行返回，不然调用者就拿不到请求的信息了
}, err => {
    console.log(err);
})//请求拦截


instance.interceptors.response.use(res => {
    console.log(res.data);
    
    return res.data
}, err => {
    console.log(err);
    // return { code: -1 }
})//响应拦截
