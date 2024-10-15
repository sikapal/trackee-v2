
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'
import { Chip } from '@mui/material'


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    return {
        height: '20px',
        color: 'text-primary'
    }
});

const Tracking = () => {

    const [idLivraison, setIdLivraison] = useState('');
    const [idColis, setIdColis] = useState('');
    const [idBus, setIdBus] = useState('');

    // State for Google Maps data
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [lastReferencedLocation, setLastReferencedLocation] = useState('');

    const handleSearch = () => {

        const fetchedLocation = {
            lat: 40.7128,
            lng: -74.0060,
            lastReferenced: 'New York, NY, USA'
        };

        
        setLocation({ lat: fetchedLocation.lat, lng: fetchedLocation.lng });
        setLastReferencedLocation(fetchedLocation.lastReferenced);
    };

    return (
        <>
            <div className='right-content w-100'>
                <div className="container">

                    <div className='card shadow border-0 w-100 d-flex flex-row p-4'>
                        <h5 className='mb-0'>Tracking des colis</h5>
                        <Breadcrumbs aria-label='breadcrumb' className='breadcrumbs'>
                            <StyledBreadcrumb
                                className='styledbreadcrumbs'
                                component="a"
                                href="/"
                                label="Dashboard"
                                icon={<HomeIcon fontSize="small" />}
                            />


                            <StyledBreadcrumb
                                className='styledbreadcrumbs ml-2'
                                label="Tracking"
                                href="#"
                                deleteIcon={<ExpandMoreIcon />}
                            />
                        </Breadcrumbs>
                    </div>


                    {/* Search fields */}
                    <div className='cardcolor'>
                        <div className="cardrow row mb-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rechercher ID Livraison"
                                    value={idLivraison}
                                    onChange={(e) => setIdLivraison(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rechercher ID Colis"
                                    value={idColis}
                                    onChange={(e) => setIdColis(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rechercher Matricule Bus"
                                    value={idBus}
                                    onChange={(e) => setIdBus(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <button className="btn btn-success w-100" onClick={handleSearch}>
                                    Valider la Recherche
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="mb-4">
                        <h5>Dernier Lieu Référencé : {lastReferencedLocation}</h5>
                    </div>

                    {/* Google Maps Display */}
                    <div className="map-container" style={{ height: '400px' }}>
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={{ height: '100%', width: '100%' }}
                                center={location}
                                zoom={10}
                            >
                                {/* Marker for the last referenced location */}
                                <Marker position={location} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Tracking
