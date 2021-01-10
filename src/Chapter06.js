import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn: true};

        //callback을 위해 bind 필요!'
        // this.handleClick = this.handleClick.bind(this);
    }
    //Arrow function 으로 변경->bind코드 필요x
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    // handleClick(){
    //     this.setState(state=>({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }
    render(){
        return(
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

export default Toggle;