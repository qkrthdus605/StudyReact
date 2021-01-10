import React from 'react';

function UserGreeting(props){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}

//Conditional rendering
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        //true이면
        return<UserGreeting />;
    }
    //false이면
    return <GuestGreeting />;
}

export default Greeting;