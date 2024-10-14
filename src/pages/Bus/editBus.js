import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import { Chip } from '@mui/material'
import { Link } from "react-router-dom"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: '20px',
    color: 'text-primary'
  }
});


const EditBus = () => {
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
            label="Bus"
            href="#"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Breadcrumbs>
      </div>

      <div className="card shadow border-0 p-3 mt-4">


        <form>

          <div className='row align-items-center justify-content-center'>
            <div className='col-sm-8 '>
              <div className='card p-4 '>
                <h5 className='align-items-center justify-content-center d-flex'><strong>Modifier l'agence</strong></h5>
                <div className='form-group mt-3'>
                  <h6>UID BUS</h6>
                  <input type='text' className='input-50' placeholder='1' readOnly/>
                </div>
                <div className='form-group mt-3'>
                  <h6>Numéro d'Immatriculation</h6>
                  <input type='text' className='input-50'  />
                </div>

              <div  className='align-items-center justify-content-center d-flex '>
              <Link to={''}>
                <Button className="btn-blue btn-lg btn-round">valider</Button>

              </Link>
            </div>

          </div>
      </div>

      <div className='col-sm-5'>

      </div>
    </div>
  </form >




      </div >



    </div >


  </>
  )
}

export default EditBus
