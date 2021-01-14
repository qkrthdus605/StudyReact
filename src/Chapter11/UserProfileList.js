import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component{
    constructor(props){
        super(props);
        // user 정보 데이터
        this.state={
            users: [
                {id: 1, name: 'Soyeon', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
                {id: 2, name: 'Leo', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
                {id: 3, name: 'Jack', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
                {id: 4, name: 'Tim', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
                {id: 5, name: 'Amy', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
                {id: 6, name: 'Lee', image:'http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineering'},
            ]
        }
    }

    render(){
        const { users } = this.state;

        return(
            <div>
                {users.map((user) => {
                    return(
                        <UserProfile
                        // prop으로 user를 넣어줌
                            user={user} />
                    )
                })}
            </div>
        )
    }
}
export default UserProfileList;