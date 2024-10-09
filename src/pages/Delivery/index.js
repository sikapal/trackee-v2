import React, { useState } from 'react'
import { FaAd, FaEye, FaPencilAlt, FaPlus, FaUserCircle } from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import { Link } from "react-router-dom"
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AirportShuttle } from '@mui/icons-material'
import Button from '@mui/material/Button';
import Pagination from "@mui/material/Pagination";
import FormControl from "@mui/material/FormControl";



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});



const Delivery = () => {

    const [categoryVal, setCategoryVal] = useState('');
    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };

    const [showForm, setShowForm] = useState(false);


    const handleButtonClick = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Livraison</h5>
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
                            label="Livraison"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>
                <div >
                    <Link to={"#"} onClick={handleButtonClick}> {/* Using "#" to stay on the page */}
                        <button type="submit" className="btn btn-primary w-100">
                            <span className='icon-delivery'><AirportShuttle /></span>
                            CLIQUEZ ICI POUR CREER UNE NOUVELLE LIVRAISON
                        </button>
                    </Link>
                </div>
                {showForm && (
                    <div className="mt-4">
                        <h5>Création  d'une Nouvelle Livraison</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="matricule">Matricule du Bus</label>
                                <input type="text" className="form-control" id="matricule" placeholder="Entrez le matricule du bus" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="matricule">Chauffeur Bus</label>
                                <input type="text" className="form-control" id="matricule" placeholder="Entrez le chauffeur du bus" required />
                            </div>


                            <button type="submit" className="btn btn-success mt-3">Soumettre</button>
                        </form>
                    </div>
                )}


                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Table Livraison</h3>

                    <div className="row cardFilters mt-3">



                    </div>

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
                                <tr>
                                    <td>#1</td>

                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>

                                    <td>
                                        <div className="actions d-flex align-items-center justify-content-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="primary" className="primary"> <FaPlus /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                        </div>
                                    </td>
                                    <td className='actionsBtn justify-content-center'> <Button color="secondary" className="btn-yellow"> En attente départ </Button></td> {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>

                                    <td>
                                        <div className="actions d-flex align-items-center justify-content-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                           <Link to={"/send-package"}>
                                                <Button color="primary" className="primary"> <FaPlus /> </Button>
                                           </Link>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                        </div>
                                    </td>
                                   <div className='justify-content-center'> <td className='actionsBtn '> <Button color="success" className="btn-green"> En chemin </Button></td> {/* on a les etats suivants en chemin, en attente depart , arrivé */}
                                   </div>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>

                                    <td>
                                        <div className="actions d-flex align-items-center justify-content-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="primary" className="primary"> <FaPlus /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                        </div>
                                    </td>
                                    <td className='actionsBtn justify-content-center'> <Button color="" className="error"> Arrivé </Button></td> {/* on a les etats suivants en chemin, en attente depart , arrivé */}

                                </tr>

                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>Showing <b>5 </b> of <b>20 </b> results</p>
                            <Pagination count={20} color="primary" className="pagination"
                                showFirstButton showLastButton
                            />

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Delivery
