import React from "react";

const Alert = ({ children, type = "info", showIcon = false, className = "" }) => {
    const typeStyles = {
        info: "bg-blue-100 text-blue-700",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        danger: "bg-red-100 text-red-700",
    };

    return (
        <div className={`p-4 rounded-md ${typeStyles[type]} ${className}`}>
            {showIcon && <span className="mr-2">⚠️</span>}
            {children}
        </div>
    );
};

export default Alert;
