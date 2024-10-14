import React, { useState } from "react";
import { FaAd, FaEye, FaPencilAlt, FaPlus, FaUserCircle } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AirportShuttle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import FormControl from "@mui/material/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { dataLiv } from "./dataLiv.js";
import { dataRet } from "./dataRetrait.js";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: "20px",
    color: "text-primary",
  };
});

const Reception = () => {
  const [search, setSearch] = useState("");

  const [searchR, setSearchR] = useState("");

  const [isWithdrawn, setIsWithdrawn] = useState(null);
  const handleConfirmWithdrawn = (idOfButton) => {
    setIsWithdrawn(idOfButton);
  };

  const [categoryVal, setCategoryVal] = useState("");
  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 d-flex justify-content-between align-items-center flex-row p-4">
          <h5 className="mb-0">Reception</h5>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
            <StyledBreadcrumb
              className="styledbreadcrumbs"
              component="a"
              href="/"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb
              className="styledbreadcrumbs"
              label="Reception"
              href="#"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="hd">Table Livraison</h3>

            <div className="searchBox position-relative d-flex align-items-center">
              <IoSearch className="mr-2" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Rechercher ici..."
                className="text-black"
              />
            </div>
          </div>

          {/*responsive table livraison*/}

          <div className="table-responsive mt-4">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID Livraison</th>
                  <th>Destination</th>
                  <th>Source</th>
                  <th>Matricule Bus</th>
                  <th>Chauffeur Bus</th>
                  <th>Date Départ</th>
                  <th>Etat de la Livraison</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {dataLiv
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.destination.toLowerCase().includes(search);
                  })
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.destination}</td>
                      <td>{item.source}</td>
                      <td>{item.bus_matricule}</td>
                      <td>{item.bus_driver}</td>
                      <td>{item.date}</td>
                      <td className="actionsBtn justify-content-center">
                        <Button color="secondary" className="btn-green">
                          {item.state}
                        </Button>
                      </td>
                      {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                      <td className="actionsBtn justify-content-center">
                        <Button color="secondary" className="btn-green">
                          {item.action}
                        </Button>
                      </td>
                      {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                Showing <b>5 </b> of <b>20 </b> results
              </p>
              <Pagination
                count={20}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="hd">Retrait des colis</h3>

            <div className="searchBox position-relative d-flex align-items-center">
              <IoSearch className="mr-2" />
              <input
                onChange={(e) => setSearchR(e.target.value)}
                type="text"
                placeholder="Rechercher ici..."
                className="text-black"
              />
            </div>
          </div>

          {/*responsive table retait des colis*/}
          <div className="table-responsive mt-4">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>ID COLIS</th>
                  <th>ID LIVRAISON</th>
                  <th>VILLE DEPART</th>
                  <th>VILLE DESTINATRICE</th>
                  <th>EXPEDITEUR</th>
                  <th>DESTINATAIRE</th>
                  <th>TYPE DE COLIS</th>
                  <th>ETATS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {dataRet
                  .filter((itemR) => {
                    return searchR.toLowerCase() === ""
                      ? itemR
                      : itemR.id_colis.toLowerCase().includes(searchR);
                  })
                  .map((itemR) => (
                    <tr key={itemR.id}>
                      <td>{itemR.id}</td>
                      <td>{itemR.id_colis}</td>
                      <td>{itemR.id_livraison}</td>
                      <td>{itemR.ville_depart}</td>
                      <td>{itemR.ville_destinatrice}</td>
                      <td>{itemR.expediteur}</td>
                      <td>{itemR.destinataire}</td>
                      <td>{itemR.type_colis}</td>
                      <td className="actionsBtn justify-content-center">
                        <Button color="secondary" className={`${isWithdrawn === itemR.id ? 'btn-yellow' : 'btn-green'}`}>
                          {isWithdrawn === itemR.id ? 'Plus Disponible' : itemR.etat}
                        </Button>
                      </td>
                      {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                      <td className="actionsBtn justify-content-center">
                        <Button onClick = {()=> handleConfirmWithdrawn(itemR.id)} color="secondary" className={`${isWithdrawn === itemR.id ? 'btn-yellow' : 'btn-green'}`}>
                        {isWithdrawn === itemR.id ? 'Deja retire' : itemR.actions} 
                        </Button>
                      </td>
                      {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                Showing <b>5 </b> of <b>20 </b> results
              </p>
              <Pagination
                count={20}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reception;
