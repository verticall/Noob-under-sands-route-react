import React, { Component } from 'react';

class Content extends Component {
  render() {
    var color__ = '#'+Math.floor(Math.random()*16777215).toString(16);
    var style={
      color: color__
    };
    return (
      <div>
        <ul>
          <li style={style}>{this.props.name} age : {this.props.age}</li>
        </ul>
      </div>
    );
  }
}

export default Content;
