import React from 'react';

class Comment extends React.Component{

    
    render(){
        const { name, content } = this.props;

        return(
            <div>
                <h1>{'My first Component'}</h1>
            </div>
        ) 
    }
}

export default Comment;