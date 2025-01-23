import React from 'react';

const HeaderBox = ({ type = "title", title, subtext, user, profileImg }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-6 bg-white ml-5 container sm:justify-between">
      {/* Left Section: Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-2 sm:space-x-4">
        <h1 className="header-box-title text-xl font-bold">
          {title}
          {type === 'greeting' && (
            <span className="text-bankGradient ml-2">
              {user}
            </span>
          )}
        </h1>
        {subtext && <p className="header-box-subtext text-sm text-gray-500 ml-2">{subtext}</p>}
      </div>

      {/* Right Section: Search Bar, Icons, and Profile Photo */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:ml-auto space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto p-4 sm:justify-between">
        {/* Search Bar with Icon */}
        <div className="flex items-center border rounded-lg py-1 px-2 focus-within:ring focus-within:ring-bankGradient w-full sm:w-auto">
          <img 
            src="/icons/search.png" 
            alt="Search" 
            className="w-4 h-4 text-gray-500 mr-2"
          />
          <input 
            type="text" 
            placeholder="Search for something" 
            className="outline-none text-sm w-full"
          />
        </div>

        {/* Settings and Notifications Icons (hidden on small devices) */}
        <div className="flex items-center space-x-4 hidden sm:flex">
          {/* Settings Icon */}
          <img 
            src="/icons/setting.png" 
            alt="Settings" 
            className="w-6 h-6 cursor-pointer"
          />

          {/* Notifications Icon */}
          <img 
            src="/icons/notifications.png" 
            alt="Notifications" 
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Profile Photo */}
        <img 
          src={profileImg || "/icons/eddy.png"} 
          alt="Profile" 
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HeaderBox;
