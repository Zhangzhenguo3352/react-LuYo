// PropsTypes 是为了 接口约束 数据类型，下面用法
import React,{Component, PropTypes} from 'react';
export default class NotesList extends Component{
  //判断 数据类型 组件的写法
  static propTypes = {
    // 判断 接受的 username 数据是不是 string 类型，是：不警告，不是：警告开发者
    username: PropTypes.string.isRequired,
    // 判断 接受的 object 数据是不是 string 类型，是：不警告，不是：警告开发者
    notes: PropTypes.object.isRequired
  }
  render(){
    return(
      <ul>
      <li>这是 li数据</li>
      {

        React.Children.map(this.props.children,function(events,index){
          {/* events 是children 写的元素，index 是 循环的 索引 */}
          {/* 循环的的话 在 react 里面 要加上 key  */}
          return <li key={index}>{events}</li>
        })

      }
      <li>{this.props.username}</li>
      <li>{this.props.notes}</li>
      </ul>)
  }
}
