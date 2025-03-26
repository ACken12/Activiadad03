const signupValidation = {
    

    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return 'Correo electrónico inválido';
        }
        return null;
    },

    validatePassword: (password) => {
        if (!password || password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return 'La contraseña debe contener al menos una mayúscula';
        }
        if (!/(?=.*\d)/.test(password)) {
            return 'La contraseña debe contener al menos un número';
        }
        return null;
    },

    

    validateForm: (formData) => {
        const errors = {};
        
        const emailError = signupValidation.validateEmail(formData.email);
        if (emailError) errors.email = emailError;

        const passwordError = signupValidation.validatePassword(formData.password);
        if (passwordError) errors.password = passwordError;

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }
};

document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    console.log(data);

    try {
        const validation = signupValidation.validateForm(data);
        if (!validation.isValid) {
            Object.keys(validation.errors).forEach(field => {
                let errorElement = document.getElementById(`${field}Error`);
                if (!errorElement) {
                    errorElement = document.createElement("div");
                    errorElement.id = `${field}Error`;
                    errorElement.className = "text-danger";
                    document.getElementById(field).parentNode.appendChild(errorElement);
                }
                errorElement.textContent = validation.errors[field];
            });
            return;
        }

        // Llamada a la función register (debe existir en register.js)
        const response = await register(data);
        console.log("Registro exitoso", response);
        window.location.href = "../../front-end/html/login.html";

    } catch (error) {
        console.error("Error en el login:", error);
    }
});
