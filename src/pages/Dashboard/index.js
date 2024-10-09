import { FaEye, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import DashboardBox from "./components/dashboardBox";
import Transitdeliveries from "./components/transitdeliveries";
import Unremovedpack from "./components/unremovedpack";
import { IoMdCart } from "react-icons/io";
import { MdDelete} from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
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
    const context = useContext(MyContext)

    useEffect(() => {
             context.setIsHideSidebarAndHeader(false);
    }, [])


    return (

     
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-12 col-sm-12">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<IoMdCart/>} />
                            <Transitdeliveries color={["#c012e2", "#eb64fe"]} icon={<IoMdCart/>} />
                            <Unremovedpack color={["#e1950e", "#f3cd29"]} icon={<IoMdCart/>} />
                        </div>
                    </div>

                </div>
                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Table1 title</h3>

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
                                    <MenuItem value="" >
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

                                    className="w-100 "
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
export default Dashboard;