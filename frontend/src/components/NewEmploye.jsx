import React, { useState } from 'react';
import { createEmploye } from '../EmployeService';

const NewEmploye = () => {
    const [employe, setEmploye] = useState({ brand: '', model: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmploye({ ...employe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEmploye(employe);
        setEmploye({ brand: '', model: '' });
    };

    return (
        <div>
            <h2>Créer un Employé</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand: </label>
                    <input type="text" name="brand" value={employe.brand} onChange={handleChange} />
                </div>
                <div>
                    <label>Model: </label>
                    <input type="text" name="model" value={employe.model} onChange={handleChange} />
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default NewEmploye;