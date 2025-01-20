import React from 'react';

const facilitiesData = [
  {
    name: 'Swimming Pool',
    description: 'A large outdoor swimming pool for relaxation and recreation.',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.20Hiz2EY1B7DcfPqf16jdQHaEK&pid=Api&P=0&h=180',
  },
  {
    name: 'Fitness Center',
    description: 'State-of-the-art gym with modern equipment for your daily workout.',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.tSg6rK1X2sA0zPT-XBoXSgHaE7&pid=Api&P=0&h=180',
  },
  {
    name: 'Spa & Wellness',
    description: 'A luxurious spa for relaxation and rejuvenation.',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ffX365NERX3TurMrvjlPbgHaEs&pid=Api&P=0&h=180',
  },
  {
    name: 'Conference Room',
    description: 'Fully equipped conference room for meetings and events.',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.YLbND0Agr98qLBq1TRNurQHaEK&pid=Api&P=0&h=180',
  },
  {
    name: 'Fine Dining',
    description: 'Experience gourmet dining with world-class chefs.',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ybY6XMZRTqoCNiUSjOx3pgHaFS&pid=Api&P=0&h=180',
  },
];


const FacilityCard = ({ name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

function Villa() {
  return (
    <div className="p-8 bg-white-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-8">Our Facilities</h1>
    <div className="flex flex-wrap justify-center">
      {facilitiesData.map((facility, index) => (
        <FacilityCard
          key={index}
          name={facility.name}
          description={facility.description}
          imageUrl={facility.imageUrl}
        />
      ))}
    </div>
  </div>
);

}

export default Villa;
