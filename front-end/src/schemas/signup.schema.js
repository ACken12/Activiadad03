const signupValidation = {
    

    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return 'Correo electrónico inválido';
        }
        return null;
    },

    validatePassword: (password) => {
        if (!password || password.length < 6) {
            return 'La contraseña debe tener al menos 6 caracteres';
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

