import React from "react";

const Profil = () => {
  return (
     <>
     <div className="navbar bg-white shadow-md px-4 py-3">
     <div className="navbar-start">
       <div className="dropdown">
         <div
           tabIndex={0}
           role="button"
           className="btn btn-ghost lg:hidden"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h8m-8 6h16"
             />
           </svg>
         </div>
         <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
         >
           <li>
             <a href="/">Home</a>
           </li>
           <li>
             <a>Layanan</a>
             <ul className="p-2">
               <li>
                 <a href="/">Payment History</a>
               </li>
               <li>
                 <a href="/">Booking Room</a>
               </li>
               <li>
                 <a href="/">Payment</a>
               </li>
             </ul>
           </li>
         </ul>
       </div>
     </div>
     <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal px-1 font-sans text-lg font-semibold text-gray-900">
         <li>
           <a href="/">Payment History</a>
         </li>
         <li>
           <a href="/">Room Booking</a>
         </li>
         <li>
           <a href="/">Payment Options</a>
         </li>
       </ul>
     </div>
     <div className="navbar-end gap-5">
       <button className="btn btn-black">
         <a href="/">Cart</a>
       </button>
     </div>
   </div>

   {/* Main Content */}
   <div className="container mx-auto px-4 py-8">
     <div className="bg-white p-8 rounded-lg shadow-lg">
       {/* Profile Header */}
       <div className="flex items-center gap-6">
         <div>
           <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
         </div>
       </div>

       {/* Profile Details */}
       <div className="mt-6 space-y-4">
         <div className="flex justify-between items-center">
           <span className="text-gray-600 font-medium">Email</span>
           <span className="text-gray-800">john.doe@example.com</span>
         </div>
         <div className="flex justify-between items-center">
           <span className="text-gray-600 font-medium">Phone</span>
           <span className="text-gray-800">+123 456 7890</span>
         </div>
         <div className="flex justify-between items-center">
           <span className="text-gray-600 font-medium">Address</span>
           <span className="text-gray-800">1234 Elm Street, Cityville</span>
         </div>
         <div className="flex justify-between items-center">
           <span className="text-gray-600 font-medium">Joined</span>
           <span className="text-gray-800">January 2023</span>
         </div>
       </div>

       {/* Action Buttons */}
       <div className="mt-6 flex gap-4">
         <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
           Edit Profile
         </button>
         <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
           Log Out
         </button>
       </div>
     </div>
   </div>
     </>
 );
};

// Layout Dashboard


export default Profil;
