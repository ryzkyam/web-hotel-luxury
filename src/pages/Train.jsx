import React from 'react';

const trains = [
  {
    name: 'Argo Bromo Anggrek',
    route: 'Jakarta - Surabaya',
    price: 'Rp.500.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.aYaEvvX-ffmECIT20-bDcQAAAA?w=324&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Argo Bromo Anggrek offers a fast and comfortable journey with modern amenities and excellent service.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
  {
    name: 'Taksaka',
    route: 'Yogyakarta - Jakarta',
    price: 'Rp.450.000',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.uPovniCvAjLxX7lOV05DKAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Taksaka provides a smooth and enjoyable ride with scenic views and top-notch facilities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
  {
    name: 'Lodaya',
    route: 'Bandung - Solo',
    price: 'Rp.350.000',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.8PDaTFiFvLokt8ZQG3UiJwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Lodaya offers a comfortable journey with excellent service and amenities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
  {
    name: 'Argo Bromo Anggrek',
    route: 'Jakarta - Surabaya',
    price: 'Rp.500.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.aYaEvvX-ffmECIT20-bDcQAAAA?w=324&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Argo Bromo Anggrek offers a fast and comfortable journey with modern amenities and excellent service.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
  {
    name: 'Taksaka',
    route: 'Yogyakarta - Jakarta',
    price: 'Rp.450.000',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.uPovniCvAjLxX7lOV05DKAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Taksaka provides a smooth and enjoyable ride with scenic views and top-notch facilities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
  {
    name: 'Lodaya',
    route: 'Bandung - Solo',
    price: 'Rp.350.000',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.8PDaTFiFvLokt8ZQG3UiJwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Lodaya offers a comfortable journey with excellent service and amenities.',
    facilities: ['Air Conditioning', 'Wi-Fi', 'Dining Car', 'Reclining Seats']
  },
];

const TrainCard = ({ name, route, price, imageUrl, description, facilities = [] }) => (
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

function Train() {
  return (
    <div className="flex flex-wrap justify-center">
      {trains.map((train, index) => (
        <TrainCard
          key={index}
          name={train.name}
          route={train.route}
          price={train.price}
          imageUrl={train.imageUrl}
          description={train.description}
          facilities={train.facilities}
        />
      ))}
    </div>
  );
}

export default Train;
