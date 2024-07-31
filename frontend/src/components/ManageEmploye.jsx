// src/components/UpdateEmploye.js
import React, { useState, useEffect } from 'react';
import { createEmploye, getEmployeById, updateEmploye } from '../EmployeService';
import { useLocation, useNavigate } from 'react-router-dom';


const ManageEmploye = () => {
    const [employe, setEmploye] = useState(
        {   prenom: '',
            nom: '' , 
            email: ''
        }
    );

    const location = useLocation();
    const navigate = useNavigate();

    const id = location.state?.id ?? null;

    useEffect(() => {
        if(id != null){
            loadEmploye();
        }
    }, []);

    const loadEmploye = async () => {
        const response = await getEmployeById(id);
        setEmploye(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmploye({ ...employe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        id === null ? await createEmploye(employe)  
                    : await updateEmploye(id, employe);
        navigate("/list");
    };

    return (
        <div>
            <h2 className='titre'>Gestion employés</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="Prénom">Prenom</label>
                <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    name="prenom"
                    value={employe.prenom}
                    onChange={handleChange}
                    placeholder="Enter prenom"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Nom">Nom</label>
                <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={employe.nom}
                    onChange={handleChange}
                    placeholder="Enter nom"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Adresse-mail">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={employe.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    aria-describedby="emailHelp"
                />
            </div>
            <button type="submit" className="btn btn-primary">Valider</button>
        </form>
        </div>
    );
};

export default ManageEmploye;