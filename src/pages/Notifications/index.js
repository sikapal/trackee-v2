import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import { Chip } from '@mui/material'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Notifications = () => {
    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                    <h5 className='mb-0'>Notifications (4)</h5>
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
                            label="Notifications"
                            href="#"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>
                <div className='card notif-list w-100'>
                    <Box sx={{ width: '100%' }}>
                        <Stack className='notif-stack' spacing={0}>
                            <Item className='notif-item'>Notification 1</Item>
                            <Item className='notif-item'>Notification 2</Item>
                            <Item className='notif-item'>Notification 3</Item>
                        </Stack>
                    </Box>
                </div>
               
            </div>
         

        </>
    )
}

export default Notifications;
