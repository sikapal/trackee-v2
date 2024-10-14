import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

/* BREADCRUMB CODE */

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});

const Form = () => {

    const [categoryVal, setCategoryVal] = useState('');
    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };

    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Formulaire</h5>
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
                        <div className='col-sm-7'>
                            <div className='card p-4'>
                                <h5>information de base</h5>
                                <div className='form-group'>
                                    <h6>TITRE</h6>
                                    <input type='text' />
                                </div>
                                <div className='form-group'>
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={50} cols={10} />
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>CATEGORIES</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>

                                            </Select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>OTHER</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>

                                            </Select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-sm-5'>

                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form
