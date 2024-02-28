import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    //Data for Q-1
    let studentObj = { sid: 1, sname: "Subhrojyoti Roy", course: "React", age: "22", total: "98" };

    //Data for Q-2
    let resultArray2 = doctorsArray.map(item => {
        return <tr>
            <td>{item.doctorId}</td>
            <td>{item.doctorName}</td>
            <td>{item.designation}</td>
            <td>{item.experience}</td>
            <td>{item.contactNumber}</td>
        </tr>;
    });

    return (
        <>
            {/* assignment1 Q1 */}
            <table border="2" width="500">

                <tr>
                    <th colSpan="2">Student Details</th>
                </tr>
                <tr>
                    <th>sid</th>
                    <td>{studentObj.sid}</td>
                </tr>
                <tr>
                    <th>sname</th>
                    <td>{studentObj.sname}</td>
                </tr>
                <tr>
                    <th>course</th>
                    <td>{studentObj.course}</td>
                </tr>
                <tr>
                    <th>age</th>
                    <td>{studentObj.age}</td>
                </tr>
                <tr>
                    <th>total</th>
                    <td>{studentObj.total}</td>
                </tr>

            </table>



            {/* assignment1-Q2 */}
            <table border="2" width="500">

                <tr>
                    <th>DoctorId</th>
                    <th>DoctorName</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>ContactNumber</th>
                </tr>


                {resultArray2}
            </table>


        </>

    );
}

export default App;