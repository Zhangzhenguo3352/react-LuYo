// axios 是 调用数据的 插件 ，API 网址是 https://github.com/mzabriskie/axios
// 这是引用方法
import axios from 'axios';

// 这是 axios 用的方法
function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`)
}
export default function getGitubInfo(username){
  // 调用时是一个数组
  return axios.all([
    getRepos(username),
    getUserInfo(username)
  ])
  // 是返回 给引用的 地方 那一条数据
  .then((arr)=>({
    repos: arr[0].data,
      bio: arr[1].data

  }))
}
