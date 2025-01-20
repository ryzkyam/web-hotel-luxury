import React from "react";


function Caraousel() {
  return (
    <>
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-5">
        All our room types are including complementary breakfast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 p-4 rounded-lg shadow-md">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Luxury redefined</h3>
            <p className="text-gray-700 mb-4">
              Our rooms are designed to transport you into an environment made
              for leisure. Take your mind off the day-to-day of home life and
              find a private paradise for yourself.
            </p>
        
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.HtPC-TmiHedfo2ZKuDYTwgHaE6?w=256&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Luxury Room"
            className="md:w-1/2 rounded-lg"
          />
        </div>
        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
          <img
            src="https://arsitag.b-cdn.net/wp-content/uploads/2023/02/image-46-768x512.jpeg"
            alt="Beach"
            className="md:w-1/2 rounded-lg mb-4 md:mb-0"
          />
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2">
              Leave your worries in the sand
            </h3>
            <p className="text-gray-700 mb-4">
              We love life at the beach. Being close to the ocean with access to
              endless sandy beach ensures a relaxed state of mind. It seems like
              time stands still watching the ocean.
            </p>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Caraousel;


