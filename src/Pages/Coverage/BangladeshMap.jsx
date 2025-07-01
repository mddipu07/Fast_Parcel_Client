import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const position =[23.6850,90.3563];

const customIcon = new L.Icon({
    iconUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
})



const BangladeshMap = ({warehouseData}) => {
    return (
  <div className="w-full h-[600px]">
      <MapContainer center={position} zoom={7} scrollWheelZoom={true} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {
            warehouseData.map((center,index) => <Marker key={index} position={[center.latitude, center.longitude]}
            icon={customIcon}>
           
             <Popup>
                <strong>{center.district}</strong><br/>
                {center.covered_area.join(' ,')}
             </Popup>

            </Marker>)
        }
     
      </MapContainer>
    </div>
    );
};

export default BangladeshMap;