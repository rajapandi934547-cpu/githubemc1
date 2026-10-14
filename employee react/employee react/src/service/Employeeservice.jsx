import employeeData from "../components/Employee.json";

const departments = employeeData.departments;

export const getTotalDepartment = () => {
    return departments.length;
};



export const getTotalEmployee = () => {
    let totalEmployee = 0;
    departments.forEach(department => {
        totalEmployee += department.employees.length;
    });
    return totalEmployee;
};


export const getTotalPresent = () => {
    let totalPresent = 0;
    departments.forEach(department => {
        department.employees.forEach(employee => {
            if (employee.status === "Active") {
                totalPresent++;
            }
        });
    });
    return totalPresent;
};

export const getDepartmentDetails = (departmentName) => {
    const department = departments.find(
        department => department.name === departmentName
    );
    if (!department) {
        return {
            total: 0,
            present: 0,
            absent: 0
        };
    }


    const total = department.employees.length;

    const present = department.employees.filter(employee => employee.status === "Active").length;

    const absent = department.employees.filter(employee => employee.status === "Inactive").length;

    return {
        total: total,
        present: present,
        absent: absent
    };
};