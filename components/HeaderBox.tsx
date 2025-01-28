import React from 'react';
import Image from 'next/image';

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
        <div className="flex items-center space-x-4 hidden sm:flex">
          {/* Search Input with Search Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md pl-10 pr-4 py-2 text-gray-700 w-full"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image
                src="/icons/search.png"
                alt="Search"
                className="w-5 h-5"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Settings Icon */}
          <Image
            src="/icons/setting.png"
            alt="Settings"
            className="w-6 h-6 cursor-pointer"
            width={24}
            height={24}
          />

          {/* Notifications Icon */}
          <Image
            src="/icons/notifications.png"
            alt="Notifications"
            className="w-6 h-6 cursor-pointer"
            width={24}
            height={24}
          />
        </div>

        {/* Profile Photo */}
        <Image
          src={profileImg || "/icons/eddy.png"}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default HeaderBox;
