import React, { useState } from 'react'
import {  FaEye,  FaPlus} from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import { Link } from "react-router-dom"
import { AirportShuttle, LocalShipping } from '@mui/icons-material'
import Button from '@mui/material/Button';
import Pagination from "@mui/material/Pagination";
import { MdSend } from 'react-icons/md';
import { Modal} from 'react-bootstrap';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});



const Delivery = () => {

    
    const [visibleRow, setVisibleRow] = useState(null);

    // Toggle the visibility of the details table
    const toggleDetails = (rowId) => {
        setVisibleRow(visibleRow === rowId ? null : rowId);
    };
    

    const [showForm, setShowForm] = useState(false);


    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const [selectedColis, setSelectedColis] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newLivraisonId, setNewLivraisonId] = useState('');

    const colisData = [
        { id: 1, colisId: '#C1', nature: 'Document', description: 'Passeport', expediteur: 'John Doe', destination: 'Yaoundé', prix: 5000 },
        { id: 2, colisId: '#C2', nature: 'Electronics', description: 'Mobile Phone', expediteur: 'Paul Smith', destination: 'Douala', prix: 15000 },    
    ];

   
    const handleCheckboxChange = (id) => {
        if (selectedColis.includes(id)) {
            setSelectedColis(selectedColis.filter((colisId) => colisId !== id));
        } else {
            setSelectedColis([...selectedColis, id]);
        }
    };

    
    const handleTransferClick = () => {
        if (selectedColis.length > 0) {
            setShowModal(true); 
        } else {
            alert("Please select at least one package to transfer.");
        }
    };

    
    const handleConfirmTransfer = () => {
       
        console.log("Selected Colis:", selectedColis);
        console.log("New Livraison ID:", newLivraisonId);

      
        setSelectedColis([]);
        setNewLivraisonId('');
        setShowModal(false);
    };

    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Livraison des colis</h5>
                    <Breadcrumbs aria-label='breadcrumb' className='breadcrumbs'>
                        <StyledBreadcrumb
                            className='styledbreadcrumbs'
                            component="a"
                            href="/"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />


                        <StyledBreadcrumb
                            className='styledbreadcrumbs'
                            label="Livraisons"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>
                <div >
                    <Link to={"#"} onClick={handleButtonClick}> {/* Using "#" to stay on the page */}
                        <button type="submit" className="btn btn-success w-100">
                            <span className='icon-delivery'><AirportShuttle /></span>
                            CLIQUEZ ICI POUR CREER UNE NOUVELLE LIVRAISON
                        </button>
                    </Link>
                </div>
                {showForm && (
                    <div className="card mt-4 p-4">
                        <h5 className='text-center'>Création  d'une Nouvelle Livraison</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="matricule">Matricule du Bus</label>
                                <select className="form-control" id="matricule" required>
                                    <option value="" disabled selected>Choisissez le matricule du bus</option>
                                    <option value="BUS123">BUS123</option>
                                    <option value="BUS456">BUS456</option>
                                    <option value="BUS789">BUS789</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="chauffeur">Chauffeur Bus</label>
                                <select className="form-control" id="chauffeur" required>
                                    <option value="" disabled selected>Choisissez le chauffeur du bus</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Robert Brown">Robert Brown</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-success mt-3">Soumettre</button>
                        </form>

                    </div>
                )}


                <div className='title-table card shadow2 border-0 w-100 flex-row d-flex'>

                    <h3 className="hd">Table des Livraisons</h3>

                    <div className="button-right">
                        <p> Trier par : </p>
                        <Button className="flex-button btn-yellow2">En attente</Button>
                        <Button className="flex-button btn-green2">En chemin</Button>
                        <Button className="flex-button btn-error2">Arrivé</Button>

                    </div>

                </div>

                <div className="card shadow border-0 p-3 mt-4">

                    {/*responsive table */}

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID Livraison</th>
                                    <th>Destination</th>
                                    <th>Source</th>
                                    <th>Matricule Bus</th>
                                    <th>Chauffeur Bus</th>
                                    <th>Date Départ</th>
                                    <th>Actions</th>
                                    <th>Etat de la Livraison</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1 */}
                                <tr>
                                    <td>#1</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <div className="actions d-flex align-items-center justify-content-center">
                                            <Button color="secondary" className="secondary" onClick={() => toggleDetails(1)}>
                                                <span className="icon-container">
                                                    <FaEye />
                                                    <span className="tooltip-text">Voir tous les colis</span>
                                                </span>
                                            </Button>

                                            <Button color="primary" className="primary">
                                                <span className="icon-container">
                                                    <Link to={"/send-package"}>
                                                        <FaPlus />
                                                    </Link>
                                                    <span className="tooltip-text">Ajouter un colis</span>
                                                </span>
                                            </Button>

                                            <Button color="success" className="success">
                                                <span className="icon-container">
                                                    <MdSend />
                                                    <span className="tooltip-text">Transférer toute la livraison</span>
                                                </span>
                                            </Button>
 
                                            <Button color="info" className="info">
                                                <span className="icon-container">
                                                    <LocalShipping />
                                                    <span className="tooltip-text">Départ Livraison</span>
                                                </span>
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="actionsBtn justify-content-center">
                                        <Button color="secondary" className="btn-yellow"> En attente départ </Button>
                                    </td>
                                </tr>

                                {/* Conditionally render the secondary table for row 1 */}
                                {visibleRow === 1 && (
                                    <tr>
                                        <td colSpan="8">
                                            <div>
                                                <table className="table table-bordered">
                                                    <thead className='beneath-table'>
                                                        <tr>
                                                            <th>Select</th>
                                                            <th>ID Colis</th>
                                                            <th>Nature</th>
                                                            <th>Description</th>
                                                            <th>Nom Expéditeur</th>
                                                            <th>Destination</th>
                                                            <th>Prix</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {colisData.map((colis) => (
                                                            <tr key={colis.id}>
                                                                <td>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedColis.includes(colis.id)}
                                                                        onChange={() => handleCheckboxChange(colis.id)}
                                                                    />
                                                                </td>
                                                                <td>{colis.colisId}</td>
                                                                <td>{colis.nature}</td>
                                                                <td>{colis.description}</td>
                                                                <td>{colis.expediteur}</td>
                                                                <td>{colis.destination}</td>
                                                                <td>{colis.prix} FCFA</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>

                                                <Button className="btn btn-primary mt-3" onClick={handleTransferClick}>
                                                    Transférer
                                                </Button>

                                                {/* Modal for selecting new livraison ID */}
                                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Transférer Colis</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <label htmlFor="livraisonId">Nouvelle Livraison ID</label>
                                                        <input
                                                            type="text"
                                                            id="livraisonId"
                                                            className="form-control"
                                                            value={newLivraisonId}
                                                            onChange={(e) => setNewLivraisonId(e.target.value)}
                                                            placeholder="Entrez le nouvel ID de livraison"
                                                        />
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                                                            Annuler
                                                        </Button>
                                                        <Button variant="primary" onClick={handleConfirmTransfer}>
                                                            Confirmer le transfert
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            
                                <tr>
                                    <td>#2</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                            <Button color="secondary" className="secondary" onClick={() => toggleDetails(2)}>
                                                <span className="icon-container">
                                                    <FaEye />
                                                    <span className="tooltip-text">Voir tous les colis</span>
                                                </span>
                                            </Button>

                                            <Button color="primary" className="primary">
                                                <span className="icon-container">
                                                    <Link to={"/send-package"}>
                                                        <FaPlus />
                                                    </Link>
                                                    <span className="tooltip-text">Ajouter un colis</span>
                                                </span>
                                            </Button>

                                            <Button color="success" className="success">
                                                <span className="icon-container">
                                                    <MdSend />
                                                    <span className="tooltip-text">Transférer toute la livraison</span>
                                                </span>
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="actionsBtn justify-content-center">
                                        <Button color="success" className="btn-green"> En chemin </Button>
                                    </td>
                                </tr>

                                {visibleRow === 2 && (
                                    <tr>
                                        <td colSpan="8">
                                        <div>
                                                <table className="table table-bordered">
                                                    <thead className='beneath-table'>
                                                        <tr>
                                                            <th>Select</th>
                                                            <th>ID Colis</th>
                                                            <th>Nature</th>
                                                            <th>Description</th>
                                                            <th>Nom Expéditeur</th>
                                                            <th>Destination</th>
                                                            <th>Prix</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {colisData.map((colis) => (
                                                            <tr key={colis.id}>
                                                                <td>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedColis.includes(colis.id)}
                                                                        onChange={() => handleCheckboxChange(colis.id)}
                                                                    />
                                                                </td>
                                                                <td>{colis.colisId}</td>
                                                                <td>{colis.nature}</td>
                                                                <td>{colis.description}</td>
                                                                <td>{colis.expediteur}</td>
                                                                <td>{colis.destination}</td>
                                                                <td>{colis.prix} FCFA</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>

                                                <Button className="btn btn-primary mt-3" onClick={handleTransferClick}>
                                                    Transférer
                                                </Button>

                                                {/* Modal for selecting new livraison ID */}
                                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Transférer Colis</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <label htmlFor="livraisonId">Nouvelle Livraison ID</label>
                                                        <input
                                                            type="text"
                                                            id="livraisonId"
                                                            className="form-control"
                                                            value={newLivraisonId}
                                                            onChange={(e) => setNewLivraisonId(e.target.value)}
                                                            placeholder="Entrez le nouvel ID de livraison"
                                                        />
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                                                            Annuler
                                                        </Button>
                                                        <Button variant="primary" onClick={handleConfirmTransfer}>
                                                            Confirmer le transfert
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>Showing <b>5</b> of <b>20</b> results</p>
                            <Pagination count={20} color="success" className="pagination" showFirstButton showLastButton />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Delivery
