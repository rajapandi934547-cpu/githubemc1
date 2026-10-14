import { useState } from "react";
import "./register.css";

function Register({ onBack }) {
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
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Registration Form</h1>

                <label>First Name:</label>
                <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required/>

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required/>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required/>

                <label>Re-type Password:</label>
                <input
                    type="password"
                    name="repassword"
                    value={formData.repassword}
                    onChange={handleChange}
                    required/>

                <label>Contact:</label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required/>

                <label>Gender:</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">Submit</button>

                <button
                    type="button"
                    className="back-button"
                    onClick={onBack}>
                    Back to Dashboard
                </button>
            </form>
        </div>
    );
}
export default Register;