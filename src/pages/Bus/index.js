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

const Buses = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    
  const context = useContext(MyContext);
  useEffect(() => {
      context.setIsHideSidebarAndHeader(false);
  }, []);

    const packageData = [
        { uid: "#1", Immatriculation: "LT000BK", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#2", Immatriculation: "CE187LO", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#3", Immatriculation: "LT000BK", createdAt: "2024-22-06", deletedAt: "Null" },
        { uid: "#4", Immatriculation: "GN00001", createdAt: "2024-22-06", deletedAt: "Null" },
    ];

    //filtering based on search terms
    const filteredPackages = packageData.filter(pkg =>
        pkg.Immatriculation.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <h5 className='mb-0'>Gestion des Véhicules</h5>
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
                        <h3 className="hd">Liste des Véhicules</h3>
                        <Link to={'/newBus'}>
                            <Button className="btn-blue btn-lg btn-round">Nouveau Bus</Button>

                        </Link>
                    </div>


                    <div className="search-container col-md-6">
                        <form className="searchagency">
                            <input
                                className="form-control search-input search form-control-md mt-4"
                                type="search"
                                placeholder="Recherchez un bus par son numéro d'immatriculation"
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
                                    <th>Numéro d'immatriculation</th>
                                    <th>Date de Création</th>
                                    <th>Date de Suppression</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentPackages.map((pkg, index) => (
                                    <tr key={index}>
                                        <td>{pkg.uid}</td>
                                        <td><b>{pkg.Immatriculation}</b></td>
                                        <td>{pkg.createdAt}</td>
                                        <td>{pkg.deletedAt}</td>

                                        <td>
                                            <div className="actions d-flex align-items-center justify-content-center">
                                                <Link to={"/editBus"}>
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

export default Buses