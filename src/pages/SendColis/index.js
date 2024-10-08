import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Button from '@mui/material/Button';
import Logo from '../../assets/images/logo-64.png'


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});


const SendColis = () => {
    const [categoryVal, setCategoryVal] = useState('');
    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };

    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Envoi de colis</h5>
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
                            label="Form"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>
                <form>

                    <div className='row'>
                        <div className='col-sm-12 col-md-7'>
                            <div className='card p-4'>
                                <div className='headpage'>
                                    <h5>Veuillez renseigner les champs ci-dessous</h5>

                                    <Button className='red btn-lg btn-round'>Annuler</Button>

                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>DESTINATION</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">

                                                </MenuItem>
                                                <MenuItem value="AG_YDE_MVAN">AG_YDE_MVAN</MenuItem>
                                                <MenuItem value="AG_DLA_MBOPPI">AG_DLA_MBOPPI</MenuItem>
                                                <MenuItem value="AG_YDE_BIYEMASSI">AG_YDE_BIYEMASSI</MenuItem>

                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>NATURE</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">

                                                </MenuItem>
                                                <MenuItem value="COURRIER">COURRIER</MenuItem>
                                                <MenuItem value="COLIS">COLIS</MenuItem>
                                                <MenuItem value="DEPECHE">DEPECHE</MenuItem>

                                            </Select>
                                        </div>
                                    </div>

                                </div>
                                <div className='form-group'>
                                    <h6>DESCRIPTION</h6>
                                    <input type='text' />
                                </div>
                                <div className='form-group'>
                                    <h6>PRIX</h6>
                                    <input type='number' />
                                </div>
                                <div className='form-group'>
                                    <h6>POIDS(kg)</h6>
                                    <input type='number' />
                                </div>
                                <div className='form-group'>
                                    <h6>NOM DE L'EXPEDITEUR</h6>
                                    <input type='text' />
                                </div>
                                <div className='form-group'>
                                    <h6>NUMERO DE L'EXPEDITEUR</h6>
                                    <input type='number' />
                                </div>
                                <div className='form-group'>
                                    <h6>NOM DU DESTINATAIRE</h6>
                                    <input type='text' />
                                </div>
                                <div className='form-group'>
                                    <h6>NUMERO DU DESTINATAIRE</h6>
                                    <input type='number' />
                                </div>
                                <div className='form-group'>
                                    <h6>NUMERO DU DESTINATAIRE SECONDAIRE</h6>
                                    <input type='number' />
                                </div>

                                <button type="submit" class=" btn btn-success">Enregistrer</button>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-5'>

                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center ">
                                        <div class="logo align-items-center">
                                            <img src={Logo} alt="" />
                                            <span class="d-none d-lg-block ">TRACKEE</span>
                                        </div>

                                    </div>

                                    <h5 class="card-title text-center">Facture de Livraison</h5>
                                    <table class="table table-bordered justify-content-center" >
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Données</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row">ID Colis</th>
                                                <td >AAAA</td>

                                            </tr>

                                            <tr>
                                                <th scope="row">Nature du colis </th>
                                                <td >10/8/2023</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Destination</th>
                                                <td >AG_DLA_MBOPPI</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">FRAIS</th>
                                                <td >2000 XAF</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Nom Expéditeur</th>
                                                <td>Tamo</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Télephone Expéditeur</th>
                                                <td>19558880</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Nom Destinataire</th>
                                                <td>Patrick</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">téléphone Destinataire</th>
                                                <td>10:31</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Date de l'expédition</th>
                                                <td >11/8/2024</td>

                                            </tr>
                                          
                                            <tr>
                                                <th scope="row">téléphone Destinataire</th>
                                                <td>10:31</td>

                                            </tr>

                                        </tbody>

                                         qr code ici
                                    </table>

                                    <button type="submit" class=" btn btn-primary w-100">Imprimer Facture</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}


export default SendColis
