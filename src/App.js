import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './main'
import Monitor_input from './text_monitor'
import Landing from './multiple'
//
const Main_ = () => <Main param1="testing paramer1"/>;
const Landing_ = () => <Landing default_param__="-2"/>;
const Landing__ = ({match}) => <Landing default_param__={match.params.id}/>;
//
class App extends Component{
  constructor(){
    super();
    this.state = {
      active_text_monitor:true
    };
  }
  enable_textMonitor = () => {this.setState({active_text_monitor:true})}
  hide_textMonirot = () => {this.setState({active_text_monitor:false})}
  render(){
    const Monitor_input_ = () => <Monitor_input fnc={this.hide_textMonirot}/>;
    return(
      <Router>
        <div>
          <Link to="/">Home</Link> ,
          <Link to="/about/">About</Link> ,
          <Link to="/mul/">Mul</Link> ,
          <Link to="/mul/5">Mul 5</Link> ,
          <Link to="/mul/99">Mul 99</Link> ,
          <Link to="/mornitor_input/" onClick={this.enable_textMonitor}>monitor_text</Link>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={Main_} />
          <Route path="/mul/" exact render ={Landing_} />
          <Route path="/mul/:id" component={Landing__} />
          {this.state.active_text_monitor ? <Route path="/mornitor_input/" component={Monitor_input_} />:null}
        </div>
      </Router>
    );
  }
}

class Index extends Component {
  render(){
    return(
      <div>
        <h1 >สวัสดี หน้าหลัก</h1>
      </div>
    );
  }
}


export default App;
