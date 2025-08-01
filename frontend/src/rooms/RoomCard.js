import React from 'react';
import { Link } from 'react-router-dom';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';

const imageMap = {
  './assets/room1.jpg': room1,
  './assets/room2.jpg': room2,
};

const RoomCard = ({ room }) => (
  <div className="room-card">
    {room.images[0] && ( 
        
      <img src={imageMap[room.images[0]]} alt="Room" />
    )}
    <h4>{room.title}</h4>
    <p>{room.description}</p>
    <p><b>Rent:</b> ₹{room.rent}</p>
    <Link to={`/room/${room.id}`}>View Details</Link>
  </div>
);

export default RoomCard;
