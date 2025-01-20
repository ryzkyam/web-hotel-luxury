import React, { useState } from 'react';

const hotels = [
  {
    name: 'Grand Resort Hotel',
    location: 'Bali',
    price: 'Rp.2.500.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.LnRFVxB9JoLQDL2PO323WwHaFj?pid=ImgDet&w=182&h=136&c=7&dpr=1,1',
    description: 'Grand Resort Hotel provides a blend of comfort and style with breathtaking beachfront views and world-class facilities.',
    facilities: ['Beachfront', 'Swimming Pool', 'Free Wi-Fi', 'Fine Dining'],
  },
  {
    name: 'Mountain View Hotel',
    location: 'Bandung',
    price: 'Rp.1.200.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.q01MRN5N3TFNFQFKGl2yugHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    description: 'Mountain View Hotel offers a serene retreat surrounded by nature, with cozy rooms and access to hiking trails.',
    facilities: ['Mountain Views', 'Restaurant', 'Free Parking', 'Fitness Center'],
  },
];

const HotelCard = ({ hotel, onBookNow }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{hotel.name}</h3>
      <p className="text-gray-500">{hotel.location}</p>
      <p className="text-lg font-semibold text-gray-900">{hotel.price}</p>
      <p className="text-sm text-gray-700 mb-4">{hotel.description}</p>
      <h4 className="text-md font-bold">Facilities:</h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
        {hotel.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
      <button
        className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
        onClick={() => onBookNow(hotel)}
      >
        Book Now
      </button>
    </div>
  </div>
);

function Hotel() {
  const [bookings, setBookings] = useState([]);

  const handleBookNow = (hotel) => {
    setBookings((prevBookings) => [...prevBookings, hotel]);
    alert(`${hotel.name} has been added to your bookings!`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>
      <div className="flex flex-wrap justify-center">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} onBookNow={handleBookNow} />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul className="list-disc list-inside">
            {bookings.map((booking, index) => (
              <li key={index}>
                {booking.name} - {booking.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Hotel;
