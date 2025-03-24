const URLUSER = "http://localhost:3000";


const register = (data) => {
    return new Promise((resolve, reject) => {
        
        const url = URLUSER + '/User/register';

        axios({
            method: "POST",
            url: url,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                sessionStorage.setItem('token', response.data);
                resolve(true);
            })
            .catch(error => {
                reject(error.response);
            });
    });
}

const login = (data) => {
    return new Promise((resolve, reject) => {
        
        const url = URLUSER + "/User/login"

        axios({
            method: "POST",
            url: url,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                const token = response.data.token;
                sessionStorage.setItem('token', token);
                resolve(true);
            })
            .catch(error => {
                reject(error.response);
            });
    });
}