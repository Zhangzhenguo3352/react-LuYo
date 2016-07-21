import React, {Component,PropTypes} from 'react';

import { browserHistory } from 'react-router';

class SearchGithub extends Component{
    getRefs(aaa){

        this.userNameRef = aaa;
    }
    handClick(ev){
        const bbb = this.userNameRef.value;
        //this.userNameRef.value 这里拿到了 input 的 value值
        // 拿到值 制空
        this.userNameRef.value='';
        //1,这里是 反逗号，2，说明：这里是用 es6 某个插件连接起来的
        const path = `/profile/${bbb}`;
        // 调用 路由 改变路径
        browserHistory.push(path);

        // !!! 那么 就是 准备开发 profile 组件
    }
    render(){
        return(
            <div className="col-sm-12">
                <form onSubmit={()=> this.handClick('aa')}>
                    <div className="col-sm-7">
                        <input type="text" className="form-control" ref={(aaa)=>this.getRefs(aaa)}/>
                    </div>
                    <div className="col-sm-5">
                        <button type="submit" className="btn btn-block btn-success">搜索Github</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchGithub;