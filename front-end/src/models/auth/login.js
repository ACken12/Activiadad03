// Login

    /**
     *  Event listener for user login.
     */
document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await login(data);
        console.log("Login exitoso", response);
        window.location.href = "../../front-end/html/index.html";
    } catch (error) {
        console.error("Error en el login:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario o contraseña inválida",
            confirmButtonText: "Aceptar"
        });
    }
});

