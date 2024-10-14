import { FaEye, FaPencilAlt } from "react-icons/fa";
import DashboardBox from "./components/dashboardBox";
import Transitdeliveries from "./components/transitdeliveries";
import Unremovedpack from "./components/unremovedpack";
import { IoMdCart } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
import Pagination from "@mui/material/Pagination";
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';


const Dashboard = () => {
    const [showBy, setshowBy] = useState('');
    const [LivBy, setLivBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(false);
    });

    const packageData = [
        { uid: "#1", idColis: "GN00053", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#2", idColis: "GN00054", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#3", idColis: "GN00055", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#4", idColis: "GN00056", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#5", idColis: "GN00057", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#6", idColis: "GN00058", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#7", idColis: "GN00059", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#8", idColis: "GN00060", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#9", idColis: "GN00061", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#10", idColis: "GN00062", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#11", idColis: "GN00063", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#12", idColis: "GN00064", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#13", idColis: "GN00065", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },
        { uid: "#14", idColis: "GN00054", idLivraison: "GLIV052", villeDepart: "YAOUNDE", villeDest: "DOUALA", expediteur: "CHWOFOH", destinataire: "KAMDEM", type: "DIPLOME", prix: 1000 },

    ];

    //filtering based on search terms
    const filteredPackages = packageData.filter(pkg =>
        pkg.idColis.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-12 col-sm-12">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<IoMdCart />} />
                            <Transitdeliveries color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <Unremovedpack color={["#e1950e", "#f3cd29"]} icon={<IoMdCart />} />
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Tableau des Colis</h3>

                    <div className="col-sm-12 ">
                    <div className="row cardFilters mt-3">
                  
                        <div className="col-md-3">
                            <h4>Trier par</h4>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setshowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-samll-label"
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>Aucun</em>
                                    </MenuItem>
                                    <MenuItem value={10}> Dix </MenuItem>
                                    <MenuItem value={20}> Vingt </MenuItem>
                                    <MenuItem value={30}> Trente </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                       

                            <div className="col-md-3">
                                <h4>Livraison par</h4>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="w-100">
                                    <Select
                                        value={LivBy}
                                        onChange={(e) => setLivBy(e.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        labelId="demo-select-samll-label"
                                        className="w-100"
                                    >
                                        <MenuItem value="">
                                            <em>Aucun</em>
                                        </MenuItem>
                                        <MenuItem value={10}> Dix </MenuItem>
                                        <MenuItem value={20}> Vingt </MenuItem>
                                        <MenuItem value={30}> Trente </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="col-md-6">
                                <form className="position-relative">
                                    <input
                                        className="form-control search-input search form-control-lg mt-4"
                                        type="search"
                                        placeholder="Recherchez un colis"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}  // Update state on input change
                                    />
                                </form>
                            </div>
                        </div>

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
                                    {currentPackages.map((pkg, index) => (
                                        <tr key={index}>
                                            <td>{pkg.uid}</td>
                                            <td><b>{pkg.idColis}</b></td>
                                            <td>{pkg.idLivraison}</td>
                                            <td>{pkg.villeDepart}</td>
                                            <td>{pkg.villeDest}</td>
                                            <td>{pkg.expediteur}</td>
                                            <td>{pkg.destinataire}</td>
                                            <td>{pkg.type}</td>
                                            <td>
                                                <span className="price text-danger">{pkg.prix} XAF</span>
                                            </td>
                                            <td>
                                                <div className="actions d-flex align-items-center">
                                                    <Button color="secondary" className="secondary"> <FaEye /> </Button>
                                                    <Button color="success" className="success"> <FaPencilAlt /> </Button>
                                                    <Button color="error" className="error"> <MdDelete /> </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

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
    );
};

export default Dashboard;
