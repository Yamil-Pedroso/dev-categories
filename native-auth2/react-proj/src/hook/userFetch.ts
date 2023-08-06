import axios from "axios";
const baseUrl = "http://localhost:8080/api/v1";

export const userFetch = async () => {
    const { data } = await axios.get(`${baseUrl}/users`);
    return data;
 };

export const userRegister = async (name: string, email: string, password: string) => {
    try {
    const { data } = await axios.post(`${baseUrl}/register`, {name, email, password});
    console.log("Autenticacion desde el backend",data);
    return data;
    } catch (error) {
        console.log(error);
    }
};

export const userLogin = async (name: string, email: string, password: string) => {
    try {
        const { data } = await axios.post(`${baseUrl}/login`, {name, email, password});
        console.log("Autenticacion desde el backend",data);
        localStorage.setItem("user", JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const logoutUser = async (id: string) => {
    try {
    const { data } = await axios.get(`${baseUrl}/logout/${id}`);
    if (data) {
        localStorage.removeItem("id");
    }
    return data;
    } catch (error) {
        console.log(error);
    }
}
 