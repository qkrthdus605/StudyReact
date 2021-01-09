import React, { Component } from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
           <h1><a href="/" onClick={function(e){
             e.preventDefault();
             this.props.onChangePage(); //props로 전달된 함수 호출
           }.bind(this)}>{this.props.title}</a></h1>
           {this.props.sub}
        </header>
      );
    }
  }

export default Subject; 