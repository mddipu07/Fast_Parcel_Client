import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const BangladeshMap = () => {
    return (
    <div className='h-[400px] w-full rounded-lg overflow-hidden shadow-lg'>
    <MapContainer center={[23.8103, 90.4125]} zoom={7} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[23.8103, 90.4125]}>
        <Popup>Dhaka, Bangladesh</Popup>
      </Marker>
    </MapContainer>
    </div>
    );
};

export default BangladeshMap;