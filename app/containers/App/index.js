import React, {Component} from 'react';
import { SearchGithub } from '../../components';

const App = ({children}) => {
        return(
            <div className="main-container">
                {/*导航部分*/}
                <nav className="navbar navbar-default">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
                        <SearchGithub/>
                    </div>
                </nav>
                {/*内容部分*/}
                <div className="container">
                    {children}
                </div>

            </div>
        )

}
export default App;



//import React, {Component} from 'react';
////这是 第三步,
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <h1>App</h1>
//                {/*这时候应该看，../../routes/index.js 看它们是怎么个包含关系*/}
//                {this.props.children}
//            </div>
//        )
//    }
//}