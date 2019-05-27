import React, { Component } from 'react';

class Footer extends Component {
  constructor(){
    super();
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var milliSeconds = date.getMilliseconds();
    this.state={
      secound:seconds,
      minute:minutes,
      hour:hour,
      milli:milliSeconds,
      color:'#FFFFFF'
    }
  }
  render() {
    setInterval(()=>{
      var date = new Date();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hour = date.getHours();
      var milliSeconds = date.getMilliseconds();
      if(seconds !== this.state.secound){
          var color_test_ = '#'+Math.floor(Math.random()*16777215).toString(16);
      }else{
        var color_test_ = this.state.color;
      }
      this.setState({
        secound:seconds,
        minute:minutes,
        hour:hour,
        milli:milliSeconds,
        color:color_test_
      })
    });
    var style={
      color: this.state.color,
      background: '#000000'
    };
    return (
      <div>
        <h3 style={style}>{this.state.hour}:{this.state.minute}:{this.state.secound}:{this.state.milli}</h3>
        <h2 >Copy right Bank</h2>
      </div>
    );
  }
}

export default Footer;
