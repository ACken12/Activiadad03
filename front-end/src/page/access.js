const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "../../front-end/html/login.html";
} else {
    // Validar token con Axios
    (async () => {
        try {
            const response = await axios.get('http://localhost:3000/User/validate-token', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Usuario autenticado:', response.data.user);

        } catch (error) {
            console.error('Error de autenticación:', error.response?.data || error.message);
            window.location.href = "../../front-end/html/login.html";
        }
    })();
}



function logout() {
    localStorage.removeItem('token');
    window.location.href = '../../front-end/html/login.html';
}
