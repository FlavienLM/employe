import api from "./api";

const getAllEmployes = () => {
    return api.get('/employe');
};

const getEmployeById = (id) => {
    return api.get(`/employe/${id}`);
};

const createEmploye = (employe) => {
    return api.post('/employe', employe);
};

const updateEmploye = (id, employe) => {
    return api.put(`/employe/${id}`, employe);
};

const deleteEmploye = (id) => {
    return api.delete(`/employe/${id}`);
};

export { getAllEmployes, getEmployeById, createEmploye, updateEmploye, deleteEmploye };