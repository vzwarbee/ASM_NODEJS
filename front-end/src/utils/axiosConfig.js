export const base_url = "http://localhost:8686/api/"

const getTokenLS = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

export const configLS = {
    headers: {
        Authorization: `Bearer ${getTokenLS !== null ? getTokenLS.token : ""}`,
        Accept: "application/json"
    }
}