const URLUSER = "http://localhost:3001/api";


const register = (data) => {
    return new Promise((resolve, reject) => {
        
        const url = URLUSER + '/users';

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
        
        const url = URLUSER + "/session"

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