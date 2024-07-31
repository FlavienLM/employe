import React, { useEffect, useState } from "react";
import { getAllEmployes, deleteEmploye } from "../EmployeService";
import "./ListEmployes.css";
import { useNavigate } from "react-router-dom";

function ListEmployes() {
  const [employes, setEmployes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadEmployes();
  }, []);

  const loadEmployes = async () => {
    const response = await getAllEmployes();
    setEmployes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmploye(id);
    loadEmployes();
  };

  const handleEdit = async (id) => {
    navigate("/update", { state: { id: id } });
  };
  return (
    <div>
      <h2 className="titre">Liste des Employés</h2>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>Information employés</h2>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    onClick={() => navigate("/update")}
                  >
                    <i className="fa fa-plus"></i>Nouvel employé
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employes.map((employe) => (
                  <tr key={employe.id}>
                    <td>{employe.prenom} </td>
                    <td>{employe.nom}</td>
                    <td>{employe.email}</td>
                    <td>
                      <a className="edit">
                        <i
                          className="material-icons"
                          onClick={() => handleEdit(employe.id)}
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        className="delete"
                        onClick={() => handleDelete(employe.id)}
                      >
                        <i className="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEmployes;
