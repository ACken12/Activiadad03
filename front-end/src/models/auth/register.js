document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const validation = signupValidation.validateForm(data);

        if (!validation.isValid) {
            // Show errors
            Object.keys(validation.errors).forEach(field => {
                const errorElement = document.getElementById(`${field}Error`);
                if (errorElement) {
                    errorElement.textContent = validation.errors[field];
                    errorElement.style.display = 'block';
                }
            });
            return;
        }else {
            const response = await register(data);
            console.log("registro exitoso", response);
            window.location.href = "../../front-end/html/login.html";
        }
    } catch (error) {
        console.error("Error en el login:", error);
    }
});