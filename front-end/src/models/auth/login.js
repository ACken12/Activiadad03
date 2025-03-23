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
        document.location.href = "http://localhost:5500/";
    } catch (error) {
        console.error("Error en el login:", error);
    }
});

