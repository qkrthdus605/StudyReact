import React from 'react';

//테두리 구현 
function FancyBorder(props){
    return (
        // Object.assign: 스타일을 합칠 때 사용
        <div style={Object.assign(props.style, {
            display:'inline-block',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#80d900',
            borderRadius: 16,
            textAlign: 'center' })}>
            <div style={{
                padding: 8,
                backgroundColor: '#80d900',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12 }}>
                <span style={{ fontSize: 16, }}>
                    {props.title}
                </span>
            </div>
            <div style={{ marginTop: 8 }}>
                {/* containment */}
                {props.children}
            </div>
        </div>
    )
}
// 스타일을 하나의 객체로
const styles = {
    imageContainer: {
        width: 50,
        margin: 'auto',
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
    },
    jobContainer: {
        padding: 8,
    },
    jobText: {
        fontSize: 16,
    }
};

class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        //props로 받은 정보를 user.--로 렌더링 할 수 있도록
        const { user } = this.props;
        return(
            <FancyBorder
                // specialization
                title={user.name}
                style={{width: 'calc(33.3% -12px)', margin: 4}}>

                {/* containment */}
                <div style={styles.imageContainer}>
                    <img 
                        alt="profile"
                        src={user.image}
                        style={styles.image} />
                </div>
                <div style={styles.jobContainer}>
                    <span style={styles.jobText}>
                        {user.job}
                    </span>
                </div>
            </FancyBorder>
        )
    }
}
export default UserProfile;