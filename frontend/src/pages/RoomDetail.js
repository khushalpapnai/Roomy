
import React from 'react';
import { useParams } from 'react-router-dom';
import { rooms, users } from '../demoData';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';

const imageMap = {
  './assets/room1.jpg': room1,
  './assets/room2.jpg': room2,
};

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));
  const landlord = users.find(u => u.id === room?.landlordId);

  if (!room) return <div>Room not found</div>;

  return (
    <div className="room-detail-card">
      {room.images[0] && (
        <img className="room-detail-image" src={imageMap[room.images[0]]} alt="Room" />
      )}
      <div className="room-detail-title">{room.title}</div>
      <div className="room-detail-section room-detail-info">{room.description}</div>
      <div className="room-detail-section">
        <span className="room-detail-label">Rent:</span> ₹{room.rent}
      </div>
      <div className="room-detail-section">
        <span className="room-detail-label">Type:</span> {room.roomType}
      </div>
      <div className="room-detail-section">
        <span className="room-detail-label">Available from:</span> {room.availableFrom}
      </div>
      <div className="room-detail-section">
        <span className="room-detail-label">Condition:</span> {room.condition}
      </div>
      <div className="room-detail-section">
        <div className="room-detail-label">Landlord Info</div>
        <div className="room-detail-landlord">{landlord?.name} ({landlord?.email})</div>
      </div>
      <hr className="room-detail-hr" />
      <div className="room-detail-compare">
        <div className="room-detail-label">Compare with other rooms:</div>
        <ul>
          {rooms.filter(r => r.id !== room.id).map(r => (
            <li key={r.id}>{r.title} : ₹{r.rent}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
