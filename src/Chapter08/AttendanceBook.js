import React from 'react';

class AttendanceBook extends React.Component{
    constructor(props){
        super(props);

        //state정의 - 배열이 들어가 있음
        this.state={
            students: [
                // key가 빠졌다는 경고->id추가
                {id: 1, name: 'Susan'},
                {id: 2, name: 'Mike'},
                {id: 3, name: 'Jane'},
                {id: 4, name: 'Brad'},
                {id: 5, name: 'Kate'},
                {id: 6, name: 'Leo'},
                {id: 7, name: 'Steve'},
                {id: 8, name: 'Susan'},
                {id: 9, name: 'jack'}
            ]
        }
    }
    render(){
        var {students} = this.state;
        // const studentList = students.map((student)=>
        //     <li key={student.id}>{student.name}</li>
        // );

        return (
            // jsx안에 map함수 사용
            <ul>
                {students.map((student)=>
                    <li key={student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}
export default AttendanceBook;