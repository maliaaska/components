import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment" >
        <a href= '/' className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date"> Today at 06:00PM</span>
            <div classNames="text"> Nice blog Post!</div>
          </div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
