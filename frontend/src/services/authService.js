
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);

export const loginUser = async (email, password) => {
  try {
    console.log("URL solicitada:", `${API_URL}/usuarios/sign-in`);
    const response = await fetch(`${API_URL}/usuarios/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error del servidor:", error);
      throw new Error(error.error || "Error al iniciar sesión");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en loginUser:", error.message);
    throw error;
  }
};
