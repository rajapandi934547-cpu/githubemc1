import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="four">
      <h4>Member Login</h4>

      <form onSubmit={handleSubmit}>
        <table className="three">
          <tbody>
            <tr>
              <td className="two">
                <input
                  type="text"
                  placeholder="User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="two">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <button type="submit" className="one">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Login;