fetch("employee.json")
    .then(response => response.json())
    .then(data => {
       //total department
        let departments = data.departments;
        document.getElementById("totalDepartment").innerText = departments.length;

        //total employee
        let totalEmployee = 0;

        departments.forEach(department => {
            totalEmployee += department.employees.length;
        });
        document.getElementById("totalEmployee").innerText = totalEmployee;

        //total present
        let totalPresent = 0;

        departments.forEach(department => {

            department.employees.forEach(employee => {
                
                if (employee.status === "Active")
                    totalPresent++;
            });
        });
        document.getElementById("totalPresent").innerText = totalPresent;

        departments.forEach(department => {
            //department employee
            let total = department.employees.length;
            //total present
            let active = department.employees.filter(
                employee => employee.status === "Active"
            ).length;
            //total absent
            let absent = department.employees.filter(
               employee => employee.status ==="Inactive"
            ).length;

    if (department.name === "IT") {
    document.getElementById("itTotal").innerText = total;
    document.getElementById("itPresent").innerText = active;
    document.getElementById("itAbsent").innerText = absent;
    }
    if (department.name === "HR") {
    document.getElementById("hrTotal").innerText = total;
    document.getElementById("hrPresent").innerText = active;
    document.getElementById("hrAbsent").innerText = absent;
    }
    if (department.name === "Finance") {
    document.getElementById("financeTotal").innerText = total;
    document.getElementById("financePresent").innerText = active;
    document.getElementById("financeAbsent").innerText = absent;
    }
    if (department.name === "Marketing") {
    document.getElementById("marketingTotal").innerText = total;
    document.getElementById("marketingPresent").innerText = active;
    document.getElementById("marketingAbsent").innerText = absent;
    }
        });
    })
     //error catch
    .catch(error => {
        console.log("JSON Error:", error);
    });