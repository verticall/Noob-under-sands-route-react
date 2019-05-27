import React, { Component } from 'react';

class Monitor_input extends Component {
  constructor(){
    super();
    this.state={
      name:'bank',
      description:'my name is bank full name is chatchawan singkaling'
    }
  }
  typing_name(event){this.setState({name:event.target.value});}
  typing_description(event){this.setState({description:event.target.value});}
  render() {
    return (
      <div>
        <h4>ทดสอบ Input</h4>
        <input type="text" onChange={this.typing_name.bind(this)} value={this.state.name}/><br/>
        <textarea onChange={this.typing_description.bind(this)} value={this.state.description}></textarea>
        <h3>monitor by state</h3>
        <p>{this.state.name}</p>
        <p>{this.state.description}</p>
        <button onClick={this.props.fnc}>Hide text monitor by component Child</button>
      </div>
    );
  }
}

export default Monitor_input;
