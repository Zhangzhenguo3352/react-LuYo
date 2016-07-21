跑通路由 网址 https://github.com/GuoYongfeng/github-notetaker-app <br>

好的例子 https://github.com/supnate/react-flux-comment-list<br>

1，路由安装<br>
     npm install react-router history --save<br>
2，<br>
     下载 bootstrap<br>
     npm install bootstrap --save<br>

3, 如果我们想 无后端，要一些假数据 需要下载 插件<br>

     首先下载这两个库
     $ npm install --save reactfire firebase

     然后在代码中引入：
     import ReactFireMixin from 'reactfire';
     import Firebase from 'firebase';

4, 提供了 mixin 方法需要下载 ,mixin是 公共 组件的方法<br>
     npm install --save core-decorators<br>

然后在代码中引入这样就可以使用了<br>

import { mixin } from 'core-decorators';<br>

@mixin(ReactFireMixin)<br>
class Profile extends Component {<br>
 ...<br>
}<br>

     这还没完成 需要下载一个能解析decorator的babel插件


$ npm install babel-plugin-transform-decorators-legacy --save-dev<br>

     然后在.babelrc里面配置

配置.babrelrc<br>


{<br>
  "presets": ["es2015", "stage-0", "react"],<br>
  "plugins": ["transform-runtime", "transform-decorators-legacy"]<br>
}<br>







5,
     请求数据我们 用
     axios 来请求数据
     npm install —save axios
     引用
     import axios from 'axios'
