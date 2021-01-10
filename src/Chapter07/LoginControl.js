import React from 'react';
import Greeting from './Greeting';

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
        Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button; //element variable

        if(isLoggedIn){
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
        }
        else{
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }
        
        let notiCount = 0;

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}

                {/* 로그인 상태이면 날짜가 출력되도록 */}
                {isLoggedIn &&
                    <div>
                        <h5>{new Date().toLocaleString()}</h5>
                        <h5>{'How are you today?'}</h5>
                        {/* {notiCount > 0 &&
                            <h5>{'New noti: ' + notiCount}</h5>} */}
                        {notiCount > 0 ? 
                            <h5>{'New noti!: ' + notiCount}</h5>
                            : <h5>{'No notification'}</h5>}
                    </div>}
                    {/* 인접한 jsx는 하나로 묶어줘야함->div로 묶음 */}
                    {/* &&를 중복으로 사용할 수도 있다 */}
                    {/* <h5>{'No notification'}를 null로 하면 아무것도 리턴x */}
            </div>
        );
    }
}

export default LoginControl;