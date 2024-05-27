import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// در ابتدای فایل index.js یا App.js
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <div className='widget widget-tags'>
            <div className="widget-header">
                <h5 className='title'>Map</h5>
            </div>
            <ul className="widget-wrapper">
                <MapContainer center={[35.6892, 51.3890]} zoom={13} style={{ height: "600px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[35.6892, 51.3890]}>
                        <Popup>
                            Tehran, Iran
                        </Popup>
                    </Marker>
                </MapContainer>
            </ul>
        </div>
    )
}

export default Map
