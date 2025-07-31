// Demo data for users and rooms
export const users = [
  {
  id: 1,
  role: 'landlord',
  name: 'Mr. Sharma',
  isVerified: true,
  email: 'sharma@host.com',
  password: 'landlord123', // Add this line
  profilePic: '',
  city: 'Delhi',
},
{
  id: 2,
  role: 'tenant',
  name: 'Amit Singh',
  isVerified: false,
  email: 'amit@student.com',
  password: 'tenant123', // Add this line
  profilePic: '',
  city: 'Delhi',
}
];

export const rooms = [ 
  {
    id: 101,
    title: 'Spacious Room near University',
    description: 'Well-furnished, WiFi, attached bathroom.',
    landlordId: 1,
    city: 'Delhi',
    rent: 8000,
    roomType: 'Private',
    availableFrom: '2025-08-01',
    images: ["./assets/room1.jpg"],
    condition: 'Newly painted, no pets allowed',
  },
  {
    id: 102,
    title: 'Shared Room for Students',
    description: '2 beds, study table, close to metro.',
    landlordId: 1,
    city: 'Delhi',
    rent: 5000,
    roomType: 'Shared',
    availableFrom: '2025-08-10',
    images: ["./assets/room2.jpg"],
    condition: 'Good, shared kitchen',
  },
];
