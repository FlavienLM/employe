import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import ListEmployes from './components/ListEmployes';
import NewEmploye from './components/NewEmploye';
import ManageEmploye from './components/ManageEmploye';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ListEmployes />}></Route>
          <Route path="list" element={<ListEmployes />} />
          <Route path="/update" element={<ManageEmploye />} />
          <Route path="/create" element={<NewEmploye />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

