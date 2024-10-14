import React, { useContext, useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import { Chip } from '@mui/material'
import { Link } from "react-router-dom"
import Pagination from "@mui/material/Pagination";
import { styled } from '@mui/material/styles';
import { MyContext } from '../../App';
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import Button from '@mui/material/Button';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});

const Agencies = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    
  const context = useContext(MyContext);
  useEffect(() => {
      context.setIsHideSidebarAndHeader(false);
  }, []);

    const packageData = [
        { uid: "#1", agencyCode: "GN00001", agencyName: "GEN001", agencyTown: "YAOUNDE", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#2", agencyCode: "GN00002", agencyName: "GEN002", agencyTown: "DOUALA", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#3", agencyCode: "GN00003", agencyName: "GEN003", agencyTown: "DSCHANG", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#4", agencyCode: "GN00004", agencyName: "GEN004", agencyTown: "MBOUDA", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#5", agencyCode: "GN00005", agencyName: "GEN0015", agencyTown: "BAFOUSSAM", createdAt: "2024-22-06", deletedAt: "Null" },

    ];

    //filtering based on search terms
    const filteredPackages = packageData.filter(pkg =>
        pkg.agencyCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //handling pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPackages = filteredPackages.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Gestion des agences</h5>
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
                            label="Agences"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>

                <div className="card shadow border-0 p-3 mt-4">

                    <div className='agencyhead'>
                        <h3 className="hd">Liste des Agences</h3>
                        <Link to={'/newAgency'}>
                            <Button className="btn-blue btn-lg btn-round">Nouvelle Agence</Button>

                        </Link>
                    </div>


                    <div className="search-container col-md-6">
                        <form className="searchagency">
                            <input
                                className="form-control search-input search form-control-md mt-4"
                                type="search"
                                placeholder="Recherchez une agence par son code"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>
                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>Code Agence</th>
                                    <th>Nom de l'agence</th>
                                    <th>Ville</th>
                                    <th>Date de Création</th>
                                    <th>Date de Suppression</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentPackages.map((pkg, index) => (
                                    <tr key={index}>
                                        <td>{pkg.uid}</td>
                                        <td><b>{pkg.agencyCode}</b></td>
                                        <td>{pkg.agencyName}</td>
                                        <td>{pkg.agencyTown}</td>
                                        <td>{pkg.createdAt}</td>
                                        <td>{pkg.deletedAt}</td>

                                        <td>
                                            <div className="actions d-flex align-items-center justify-content-center">
                                                <Link to={"/editAgency"}>
                                                    <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                                </Link>

                                                <Button color="error" className="error"> <MdDelete /> </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Pagination
                        count={Math.ceil(filteredPackages.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="success"
                        className="mt-3 float-right"
                    />
                </div>



            </div>


        </>
    )
}

export default Agencies
