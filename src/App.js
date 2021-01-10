import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

const copmmentsFromServer = [
  { name: 'Inje Lee', content: 'My comment!'},
  { name: '현빈', content: '이게 최선입니까?'},
  { name: 'Tony Stark', content: 'I am Iron Man.'},
];

var timer;

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      comments:[],
    };
  }
  //1초마다 동적으로 state에 값이 들어가도록
  componentDidMount(){
    let comments = this.state.comments;
    timer = setInterval(()=>{
      if(comments.length < copmmentsFromServer.length){
        let index = comments.length;
        comments.push(copmmentsFromServer[index]);
        this.setState({
          //데이터가 변화됨을 감지
          comments: comments
        });
      }
      else if(timer){
        //데이터가 없으면 종료
        clearInterval(timer);
      }
    }, 1000);
  }

  render(){
    const { comments } = this.state;
    return(
      <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
        <header className="App-header">
          {/* <img src={logo.svg} className="App-logo" alt="logo"></img> */}
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel ="noopener noreferrer">
            Learn React
          </a>
        </header>
        <div>
          {comments.map((comment, index)=>{
            return(
              <Comment 
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  content={comment.content} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
