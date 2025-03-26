document.addEventListener("DOMContentLoaded", async () => {
    const token = sessionStorage.getItem("token");
    console.log('Token:', token);
    /*
    if (!token) {
        redirigirAlLogin();
        return;
    }
    */
    // Validar token con Axios
    try {
        const response = await axios.get('http://localhost:3000/User/validate-token', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Usuario autenticado:', response.data.user);

    } catch (error) {
        console.error('Error de autenticación:', error.response?.data || error.message);
        redirigirAlLogin();
    }
});

function redirigirAlLogin() {
    alert("Acceso denegado. Debe iniciar sesión.");
    window.location.href = "http://localhost:5500/login";
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}