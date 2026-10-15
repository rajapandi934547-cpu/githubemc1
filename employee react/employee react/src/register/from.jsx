import { useState } from "react";
import "./register.css";

function Register({  }) {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        repassword: "",
        contact: "",
        gender: "Male"
    });

    function handleChange(e) {
        setFormData({
            formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.repassword) {
            alert("Password does not match!");
            return;
        }

        alert("Registration Successful!");

        setFormData({
            fname: "",
            lname: "",
            email: "",
            password: "",
            repassword: "",
            contact: "",
            gender: "Male"
        });
    }

    return (
       <>
         
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>

                <h1>Registration Form</h1>

                <label>Deportment Name:</label>
                <input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    required/>

                <label>Name:</label>
                <input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    required/>

                <label>Designation:</label>
                <input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    required/>

                <label>Status:</label>
                <input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    required/>

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}
export default Register;