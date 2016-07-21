import React, {Component} from 'react';
import NotesList from './NotesList';

export default class Notes extends Component{
  render(){
    return(
      <div>Notes 111111
        <h2>{this.props.notes}</h2>
        <NotesList
        username={this.props.username}
        notes={this.props.notes}
        >
        {/*不必要 写 成 li包着了，因为不谢 li也会自己包一层 li的*/}
          <a href="#" >123123</a>
          <a href="#" >123123</a>
          <a href="#" >123123</a>
        </NotesList>
      </div>
    )
  }
}
