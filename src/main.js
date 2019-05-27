import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './compo_content'
import Landing from './multiple'
import Footer from './footer_test'
import Monitor_input from './text_monitor'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      list:[
        {name:'bank1',age:20},
        {name:'bank4',age:22},
        {name:'bank5',age:29}
      ],
      active_text_monitor:false
    };
  }
  enable_textMonitor = () => {this.setState({active_text_monitor:true})}
  hide_textMonirot = () => {this.setState({active_text_monitor:false})}
  render() {
    var mystyle={
      fontSize:50,
      color: '#0000FF'
    };
    var list = this.state.list;
    return (
      <div>
        <hr/>
        <Link to="/">Back</Link>
        <h1 style={mystyle}>hello props ที่รับเข้ามาคือ {this.props.param1}</h1>
        <h2>{10*23.24}</h2>
        <hr/>
        {list.map((obj,index)=>{return <Content name={obj.name} age={obj.age} />})}
        <hr/>
        <h3>แม่สูตรคูณ</h3>
        <Landing default_param__="10"/>
        <hr/>
        <button onClick={this.enable_textMonitor}>show text monitor</button>
        {this.state.active_text_monitor ? <Monitor_input fnc={this.hide_textMonirot}/> : null}
        <br/>
        <button onClick={this.hide_textMonirot}>Hide text monitor by component Parrent</button>
        <Footer />
      </div>
    );
  }
}

export default Main;
