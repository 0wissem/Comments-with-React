import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App = () => {
  return (
    <div className="ui container comments">
      
      <CommentDetail author="sam"/>
      <CommentDetail author="med"/>
      <CommentDetail author="slim"/>
    </div>
  );
}
ReactDOM.render(<App/>, document.querySelector('#root'));
export default App;
