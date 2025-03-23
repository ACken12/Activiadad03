
document.addEventListener("DOMContentLoaded", async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        alert("Acceso denegado. Debe iniciar sesión.");
        window.location.href = "http://localhost:5500/login"; // Redirigir al login
        return;
    }

    // try {
    //     const response = await fetch("http://localhost:3000/User/verifyToken", {
    //         method: "GET",
    //         headers: {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error("Token inválido o expirado");
    //     }

    //     console.log("Token válido, acceso permitido");
    // } catch (error) {
    //     console.error("Error de autenticación:", error);
    //     alert("Su sesión ha expirado. Inicie sesión nuevamente.");
    //     sessionStorage.removeItem("token");
    //     window.location.href = "http://localhost:5500/html/auth/login.html"; // Redirigir al login
    // }
});
