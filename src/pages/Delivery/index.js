import React, { useState } from 'react'
import { FaEye, FaPencilAlt, FaUserCircle } from "react-icons/fa";
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
import { MdDelete } from "react-icons/md";
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
                                    <th>UID</th>
                                    <th>ID COLIS</th>
                                    <th>ID LIVRAISON</th>
                                    <th>VILLE DEPART</th>
                                    <th>VILLE DESTINATRICE</th>
                                    <th>EXPEDITEUR</th>
                                    <th>DESTINATAIRE</th>
                                    <th>TYPE DE COLIS</th>
                                    <th>PRIX</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><b>GN00054</b></td>
                                    <td>GLIV052</td>
                                    <td>YAOUNDE</td>
                                    <td>DOUALA</td>
                                    <td>CHWOFOH</td>
                                    <td>KAMDEM</td>
                                    <td>DIPLOME</td>
                                    <td>
                                        <span className="price text-danger">1000 XAF</span>
                                    </td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                            <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                            <Button color="error" className="error"> <MdDelete /> </Button>
                                        </div>
                                    </td>
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
