import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
//mixin 插件 ，的使用
//1 第一步
import { mixin } from 'core-decorators';
// 公共库
// 第二步
import ReactFireMixin from 'reactfire';

import Firebase from 'firebase';
// 数据 调用完了返回
import getGethubInfo from '../../util/helper';
@mixin(ReactFireMixin)
class Profile extends Component {
  state = {
    notes: ['1', '2', '3'],
    bio: {
      name: 'guoyongfeng'
    },
    repos: ['a', 'b', 'c']
  }
  componentDidMount(){
    // 为了读写数据，我们首先创建一个firebase数据库的引用
    // 创建 数据库的引用 借口
    this.aaa = new Firebase('https://github-note-taker.firebaseio.com/');
    // 调用child来往引用地址后面追加请求，获取数据
    //相当拼字符串、拼链接、拼URL
    //https://github-note-taker.firebaseio.com/guoyongfeng
    var childRef = this.aaa.child(this.props.params.xxx);
    // 将获取的数据转换成数组并且赋给this.state.notes
    // 就是@mixin(ReactFireMixin) 中的方法
    console.log(ReactFireMixin)
    this.bindAsArray(childRef, 'notes');

    //引用数据
    getGethubInfo(this.props.params.xxx)
      .then((data)=>{
        //检验 能不能 返回数据
        console.log(data)
        this.setState({
          repos:data.repos,
          bio:data.bio
        })
      })
  }
  componentWillUnMount(){
    this.unbind('notes');
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile
            username={this.props.params.xxx}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <UserRepos
            username={this.props.params.xxx}
            repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.xxx}
            notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile






// import React, {Component} from 'react';
//
// import {UserProfile,UserRepos,Notes} from '../../components';
//
// class Profile extends Component{
//     state={
//       bio:{name:'zhangzhenguo'},
//       notes:['1','2','3'],
//       repos:['a','b','c']
//     }
//     render(){
//       return(
//           <div className="row">
//             <div className="col-sm-4 col-xs-4">
//                 <UserProfile
//                 username={this.props.params.xxx}
//                 bio={this.state.bio}
//                 />
//             </div>
//             <div className="col-sm-4 col-xs-4">
//                 <UserRepos
//                 repos={this.state.repos}
//                 />
//             </div>
//             <div className="col-sm-4 col-xs-4">
//                 <Notes
//                 notes={this.state.notes}
//                 />
//             </div>
//           </div>
//       )
//     }
// }
// export default Profile;
