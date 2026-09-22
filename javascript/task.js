
let serialNo = 1;

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let contact = document.getElementById("contact").value;
    let gender = document.getElementById("gender").value;

    if (password !== repassword) {
        alert("Password does not match!");
        return;
    }

    let table = document.getElementById("resultTable");

    if (!table) {

        document.getElementById("output").innerHTML = 
           `<h2 style="text-align:center;">Registration Details</h2>
            <table id="resultTable">
                <tr>
                    <th>S.No</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>CONTACT</th>
                    <th>GENDER</th>
                </tr>
            </table>`
        ;

        table = document.getElementById("resultTable");
    }

    let row = table.insertRow();

    row.insertCell().innerHTML = serialNo++;
    row.insertCell().innerHTML = fname;
    row.insertCell().innerHTML = lname;
    row.insertCell().innerHTML = email;
    row.insertCell().innerHTML = password;
    row.insertCell().innerHTML = contact;
    row.insertCell().innerHTML = gender;

    document.getElementById("registrationForm").reset();

});