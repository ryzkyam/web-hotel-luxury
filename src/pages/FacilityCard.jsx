import React from 'react';

const facilitiesData = [
     {
       name: 'Swimming Pool',
       description: 'A large outdoor swimming pool for relaxation and recreation.',
       imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.J3Lk5y23O4iCmDeyq7gbNgHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.1&pid=1.7',
     },
     {
       name: 'Fitness Center',
       description: 'State-of-the-art gym with modern equipment for your daily workout.',
       imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.-mjCTaFQHjJ1QkclwUrkwAHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
     },
     {
       name: 'Spa & Wellness',
       description: 'A luxurious spa for relaxation and rejuvenation.',
       imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.I3LbHcsC6vN6A27-Zuy0MgHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.1&pid=1.7',
     },
     {
       name: 'Conference Room',
       description: 'Fully equipped conference room for meetings and events.',
       imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.p-LKQZgr2f9X4bHqG3FAkwHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
     },
     {
       name: 'Fine Dining',
       description: 'Experience gourmet dining with world-class chefs.',
       imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.VcGDsQeMTtIQ4PYDnnhFygHaFj?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
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

function Facilities() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
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

export default Facilities;
