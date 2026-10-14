import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./login/formLogin";
import Employee from "./components/Employee.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;