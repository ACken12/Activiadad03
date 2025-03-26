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
        if(error.status === 401){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Usuario o contraseña inválida",
                confirmButtonText: "Aceptar"
            });
        }else if(error.status === 429){
            Swal.fire({
                icon: "warning",
                title: "Demasiados intentos",
                text: "Demasiados intentos fallidos. Intente más tarde.",
                confirmButtonText: "Aceptar"
            });
        }

    }
});

