// src/components/Notification.jsx
import React, { useState, createContext, useContext } from "react";
import Alert from "../components/ui/Alert"; // Usa tu componente de estilo

// Contexto para manejar notificaciones
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    // Agregar una notificación
    const addNotification = (type, message) => {
        const id = Date.now(); // Generar un ID único
        setNotifications((prev) => [...prev, { id, type, message }]);

        // Eliminar la notificación después de 3 segundos
        setTimeout(() => {
            setNotifications((prev) =>
                prev.filter((notification) => notification.id !== id)
            );
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            {/* Renderizar las notificaciones */}
            <div className="fixed top-4 left-4 z-50 space-y-2">
                {notifications.map((notification) => (
                    <Alert
                        key={notification.id}
                        showIcon
                        type={notification.type}
                        className="mb-4"
                    >
                        {notification.message}
                    </Alert>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
