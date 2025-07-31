import React from 'react';
import { rooms } from '../demoData';
import RoomCard from '../rooms/RoomCard';

const Home = () => (
  <div>
    <h2>Available Rooms</h2>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {rooms.map(room => <RoomCard key={room.id} room={room} />)}
    </div>
  </div>
);

export default Home;
