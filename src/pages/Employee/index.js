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


const Employees = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const context = useContext(MyContext);
    useEffect(() => {
        context.setIsHideSidebarAndHeader(false);
    }, []);


    const packageData = [
        { Matricule: "001", Nom: "STEVE", Prénom: "jobs", Rôle: "MANAGER", createdAt: "2024-22-06", deletedAt: "Null" },
        { Matricule: "002", Nom: "SIKAPA", Prénom: "Lucien", Rôle: "ADMIN", createdAt: "2024-22-06", deletedAt: "Null" },
        { Matricule: "003", Nom: "ESTEBAN", Prénom: "ANTOINE", Rôle: "COURRIER", createdAt: "2024-22-06", deletedAt: "Null" },
        { Matricule: "004", Nom: "MBOBA", Prénom: "Karl", Rôle: "MANAGER", createdAt: "2024-22-06", deletedAt: "Null" },
        { Matricule: "005", Nom: "kAMDEM", Prénom: "ULRICH", Rôle: "ADMIN", createdAt: "2024-22-06", deletedAt: "Null" },
        { Matricule: "006", Nom: "EKANE", Prénom: "BRIGHT", Rôle: "COURRIER", createdAt: "2024-22-06", deletedAt: "Null" },
    ];

    //filtering based on search terms
    const filteredPackages = packageData.filter(pkg =>
        pkg.Matricule.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <h5 className='mb-0'>Gestion du Personnel</h5>
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
                            label="Personnel"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>

                <div className="card shadow border-0 p-3 mt-4">

                    <div className='agencyhead'>
                        <h3 className="hd">Liste du Personnel</h3>
                        <Link to={'/edit-user'}>
                            <Button className="btn-blue btn-lg btn-round">Ajouter un employé</Button>

                        </Link>
                    </div>


                    <div className="search-container col-md-6">
                        <form className="searchagency">
                            <input
                                className="form-control search-input search form-control-md mt-4"
                                type="search"
                                placeholder="Recherchez un employé par son numéro matricule"
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
                                    <th>Matricule</th>
                                    <th>NOM</th>
                                    <th>PRENOM</th>
                                    <th>ROLE</th>
                                    <th>Date de Création</th>
                                    <th>Date de Suppression</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentPackages.map((pkg, index) => (
                                    <tr key={index}>
                                        <td>{pkg.Matricule}</td>
                                        <td><b>{pkg.Nom}</b></td>
                                        <td><b>{pkg.Prénom}</b></td>
                                        <td><b>{pkg.Rôle}</b></td>
                                        <td>{pkg.createdAt}</td>
                                        <td>{pkg.deletedAt}</td>

                                        <td>
                                            <div className="actions d-flex align-items-center justify-content-center">
                                                <Link to={"/editPersonnel"}>
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

export default Employees