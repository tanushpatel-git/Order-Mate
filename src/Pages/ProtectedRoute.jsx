import React from "react";
import AuthenticationErrorPage from "../Pages/AuthenticationErrorPage";

const ProtectedRoute = ({ children }) => {
    const loginData = JSON.parse(localStorage.getItem("LoginData"));

    if (!loginData) {
        return <AuthenticationErrorPage />;
    }

    return children;
};

export default ProtectedRoute;
