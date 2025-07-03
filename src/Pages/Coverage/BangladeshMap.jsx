import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


const position =[23.6850,90.3563];

const customIcon = new L.Icon({
    iconUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
})

function FlyToDistrict({ coords  }){
  const map = useMap();
  if(coords){
    map.flyTo(coords, 14, {duration: 1.5});
  }
  return null
}


const BangladeshMap = ({warehouseData}) => {

const [searchText,setSearchText] = useState('');
const [activeCoords,setActiveCoords] = useState(null);
const [activeDistrict, setActiveDistrict] = useState(null);


  const handleSearch = (e) =>{
       e.preventDefault();
       const district = warehouseData.find(d => d.district.toLowerCase().includes(searchText.toLowerCase()));
       if(district){
        setActiveCoords([district.latitude, district.longitude]);
        setActiveDistrict(district.district);
       }
  }

    return (
  <div className="w-full h-[800px] relative overflow-hidden shadow-lg rounded-lg">

   <form onSubmit={handleSearch} className="flex items-center justify-center mb-4 absolute top-4 left-1/2 w-full max-w-md px-4 transform -translate-x-1/2 z-[1000]">
      <input
        type="text"
        placeholder="Search district..."
        className="input w-64 max-w-xs px-4 py-2 bg-white/80 text-black border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md shadow-sm backdrop-blur"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary ml-2 text-black">
        Go
      </button>
    </form>
 
      <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToDistrict coords={activeCoords} />
        
        {
            warehouseData.map((center,index) => <Marker key={index} position={[center.latitude, center.longitude]}
            icon={customIcon}>
           
             <Popup autoOpen={center.district === activeDistrict}>
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