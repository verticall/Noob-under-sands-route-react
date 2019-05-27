import React, { Component } from 'react';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      now_mul: parseInt(this.props.default_param__)
    };
    console.log('construct__landing default ' + parseInt(this.props.default_param__));
  }
  plus__  = () =>{if(this.state.now_mul < 20)this.setState({now_mul:this.state.now_mul+1});}
  minus__ = () =>{if(this.state.now_mul > 1)this.setState({now_mul:this.state.now_mul-1});}
  componentDidMount() {
    console.log('hi DidMount');
  }
  componentWillMount() {
    console.log('hi WillMount');
  }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps.default_param__ + '/'+ this.props.default_param__);
      if(nextProps.default_param__ !== this.props.default_param__){
        console.log('ตรวจเจอว่าไม่เท่าเดิม เซ็ทค่าใหม่กันเถอะ');
        this.setState({
          now_mul: parseInt(nextProps.default_param__)
        });
      }
  }
  componentWillUpdate(){
    console.log('hi WillUpdate');
  }
  componentDidUpdate(){
    console.log('hi DidUpdate');
  }
  render() {
    //console.log('reload component props : '+parseInt(this.props.default_param__) );
    //console.log('reload component state starter : '+this.state.starter );
    return (
      <div onLoad={this.fucker} >
      <button onClick={this.minus__}>กดเพื่อลด</button>
      <Mul m={this.state.now_mul}/>
      <button onClick={this.plus__}>กดเพื่อเพิ่ม</button>
      </div>
    );
  }
}
class Mul extends Component {
  render() {
    var m = this.props.m;
    var arr = [];
    for (var i = 1;i<=12;i++)arr.push(i);
    return (
      <div>
        {arr.map((source,idx)=>{
          var split = '';
          if(source !== 12){
            split = ',';
          }
          return <div>{m}*{source}={m*source} {split}</div>
        })}
      </div>
    );
  }
}
export default Landing;
