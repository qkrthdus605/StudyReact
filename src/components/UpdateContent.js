import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      // state화 시키기
      super(props);
      this.state={
        id: this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }

    render(){
      return(
        <article>
          <h2>Update</h2>
          <form acrion="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title" 
                value={this.state.title}
                // input이 바뀔 때마다 state가 바뀔 수 있도록
                onChange={this.inputFormHandler}>
              </input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description"
                value={this.state.desc}
                // input이 바뀔 때마다 state가 바뀔 수 있도록
                onChange={this.inputFormHandler}
              ></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default UpdateContent;