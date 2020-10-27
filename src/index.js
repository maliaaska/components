import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
     <CommentDetail author='Sam'/> 
     <CommentDetail author='Thomas'/> 
     <CommentDetail author='Daniel'/> 
     <CommentDetail author='Jack'/> 
     <CommentDetail author='Peter'/> 
     <CommentDetail author='Robert'/> 
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
