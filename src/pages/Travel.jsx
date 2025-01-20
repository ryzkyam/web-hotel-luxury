import React from 'react';

const travels = [
  {
    name: 'Travel Cipaganti',
    route: 'Bandung - Jakarta',
    price: 'Rp.100.000',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.5egxRsxiil55mwiD5RRJ3AHaHa?w=182&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Travel Cipaganti offers a convenient and comfortable travel experience with modern amenities and reliable service.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
  },
  {
    name: 'Travel DayTrans',
    route: 'Jakarta - Bogor',
    price: 'Rp.80.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.dtnqN_m7TuVQRQpEa8fZpAHaD_?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Travel DayTrans provides a smooth and enjoyable ride with excellent facilities and service.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
  },
  {
    name: 'Travel XTrans',
    route: 'Jakarta - Bandung',
    price: 'Rp.90.000',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.UilcnHdyw_tm_smIFoB9kgHaC1?w=347&h=134&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Travel XTrans offers a reliable and comfortable journey with top-notch service and amenities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
  },
  {
    name: 'Zavaloka Travel ',
    route: 'Jakarta - Bogor',
    price: 'Rp.80.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.dtnqN_m7TuVQRQpEa8fZpAHaD_?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
  },
  {
    name: 'TravelinAjah ',
    route: 'Jakarta - Bandung',
    price: 'Rp.90.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.dtnqN_m7TuVQRQpEa8fZpAHaD_?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    description: 'Travel XTrans offers a reliable and comfortable journey with top-notch service and amenities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
  },
  {
     name: 'Travel DayTrans',
     route: 'Jakarta - Bogor',
     price: 'Rp.80.000',
     imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.dtnqN_m7TuVQRQpEa8fZpAHaD_?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
     description: 'Travel DayTrans provides a smooth and enjoyable ride with excellent facilities and service.',
     facilities: ['Air Conditioning', 'Wi-Fi', 'Reclining Seats', 'Entertainment System']
   },
   
];

const TravelCard = ({ name, route, price, imageUrl, description, facilities = [] }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{route}</p>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      {facilities.length > 0 && (
        <>
          <h4 className="text-md font-bold">Facilities:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </>
      )}
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg">
        <a href="/FormBook">Book Now</a>
      </button>
    </div>
  </div>
);

function Travel() {
  return (
    <div className="flex flex-wrap justify-center">
      {travels.map((travel, index) => (
        <TravelCard
          key={index}
          name={travel.name}
          route={travel.route}
          price={travel.price}
          imageUrl={travel.imageUrl}
          description={travel.description}
          facilities={travel.facilities}
        />
      ))}
    </div>
  );
}

export default Travel;
