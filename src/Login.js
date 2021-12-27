import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useStore from "./store";

const Login = () => {
    const [employeeId, setEmployeeId] = useState("");
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";

    const loginUser = useStore(state => state.loginUser);
    const loggedIn = useStore(state => state.user.loggedIn);
    const loadingItems = useStore(state => state.loadingItems);
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
    }
    useEffect(() => {
        if (loggedIn) {
            navigate(from, { replace: true });
        }
    })
    const handleInputChange = e => {
        setEmployeeId(e.target.value);
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                    name="employeeId"
                    placeholder="Employee ID"
                    value={employeeId}
                    className="input"
                    type="text"
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <button type="submit"  className={`button is-primary ${loadingItems.includes("login") ? "is-loading" : ""}`}>Login</button>
            </form>
        </div>
    )
}

export default Login;