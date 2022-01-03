import axios from "axios";

var axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        // 'Access-Control-Allow-Origin': "http://localhost:8080",
    }
};

export const login = async (username, password) => {
    let param = {
        "username": username,
        "password": password
    };
    let rs = await axios.post("http://localhost:8080/customers/login", param, axiosConfig)
    return rs;
}
export const getListCustomer = async () => {
    let rs = await axios.get("http://localhost:8080/customers", axiosConfig)
    return rs;
}
export const getCustomersById = async (id) => {
    let rs = await axios.get(`http://localhost:8080/customers/${id}`, axiosConfig)
    return rs;
}
export const updateCustomer = async (user) => {
    const param = {
        "id": user.id,
        "last_name": user.last_name,
        "first_name": user.first_name,
        "company": user.company,
        "city": user.city,
        "password": user.password,
        "username": user.username,
        "hide": user.hide
    };
    let rs = await axios.post('http://localhost:8080/customers/update', param, axiosConfig)
    return rs;
}