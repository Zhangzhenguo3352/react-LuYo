import React, {Component} from 'react';
import { SearchGithub } from '../../components';

const App = ({children}) => {
        return(
            <div className="main-container">
                {/*��������*/}
                <nav className="navbar navbar-default">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
                        <SearchGithub/>
                    </div>
                </nav>
                {/*���ݲ���*/}
                <div className="container">
                    {children}
                </div>

            </div>
        )

}
export default App;



//import React, {Component} from 'react';
////���� ������,
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <h1>App</h1>
//                {/*��ʱ��Ӧ�ÿ���../../routes/index.js ����������ô��������ϵ*/}
//                {this.props.children}
//            </div>
//        )
//    }
//}