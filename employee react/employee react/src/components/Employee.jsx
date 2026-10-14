import "./Employee.css";

import {
    getTotalDepartment,
    getTotalEmployee,
    getTotalPresent,
    getDepartmentDetails
} from "../service/Employeeservice";

function Employee() {

    const totalDepartment = getTotalDepartment();

    const totalEmployee = getTotalEmployee();

    const totalPresent = getTotalPresent();

    const it = getDepartmentDetails("IT");

    const hr = getDepartmentDetails("HR");

    const finance = getDepartmentDetails("Finance");

    const marketing = getDepartmentDetails("Marketing");

    return (
        <>

            <div className="header">

                <h2>Rednote</h2>
                <span>☰</span>
            <div class="profile">
                     👨🏻
             </div>
            </div>

            <div className="sidebar">

                <button className="menu active" type="button" onClick={() => setShowRegister(true)}> ↪ &nbsp; Add Account</button>

                <div className="menu">▣ &nbsp; Masters</div>

                <div className="menu">▣ &nbsp; Attendance</div>

                <div className="menu">▣ &nbsp; Reimbursement</div>

                <div className="menu">▮ &nbsp; Leave</div>

                <div className="menu">▤ &nbsp; Payroll</div>

                <div className="menu">▤ &nbsp; Resignation</div>

                <div className="menu">▣ &nbsp; Report</div>

                <div className="menu">⚙ &nbsp; Settings</div>

            </div>

            <div className="main">

                <div className="employee-boxes">

                    <div className="box total">
                        <p>Total Department</p>
                        <h2>{totalDepartment}</h2>
                    </div>

                    <div className="box absent">
                        <p>Total Employee</p>
                        <h2>{totalEmployee}</h2>
                    </div>

                    <div className="box notice">
                        <p>total Present</p>
                        <h2>{totalPresent}</h2>
                    </div>
                </div>
            </div>

            <div className="main">

                <h3>TOTAL DEPARTMENT</h3>

                <div className="employee-boxes">

                    <div className="box sales">
                        <p>IT Department</p>
                        <h2>{it.total}</h2>
                    </div>

                    <div className="box development">
                        <p>HR Department</p>
                        <h2>{hr.total}</h2>
                    </div>

                    <div className="box testing">
                        <p>Finance Department</p>
                        <h2>{finance.total}</h2>
                    </div>

                    <div className="box support">
                        <p>Marketing Department</p>
                        <h2>{marketing.total}</h2>
                    </div>
                </div>
            </div>

            <div className="main">

                <h3> DEPARTMENT WISE PRESENT</h3>

                <div className="employee-boxes">

                    <div className="box itpresend">
                        <p>IT Department</p>
                        <h2>{it.present}</h2>
                    </div>

                    <div className="box hrpresend">
                        <p>HR Department</p>
                        <h2>{hr.present}</h2>
                    </div>

                    <div className="box financepresend">
                        <p>Finance Department</p>
                        <h2>{finance.present}</h2>
                    </div>

                    <div className="box marketingpresend">
                        <p>Marketing Department</p>
                        <h2>{marketing.present}</h2>
                    </div>
                </div>
            </div>

            <div className="main">

                <h3>DEPARTMENT WISE ABSENT</h3>

                <div className="employee-boxes">

                    <div className="box absent">
                        <p>IT Department</p>
                        <h2>{it.absent}</h2>
                    </div>

                    <div className="box notice">

                        <p>HR Department</p>
                        <h2>{hr.absent}</h2>
                    </div>

                    <div className="box testing">
                        <p>Finance Department</p>
                        <h2>{finance.absent}</h2>
                    </div>

                    <div className="box hrpresend">
                        <p>Marketing Department</p>
                        <h2>{marketing.absent}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Employee;