import React from 'react'

const MainContent = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt="Promo Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description} 
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-700 text-base">Price: {price}</span>
      </div>
    </div>
  );
};


export default MainContent