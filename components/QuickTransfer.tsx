"use client";
import React, { useState, useRef } from "react";

const frequentContacts = [
  { id: 1, name: "Livia Bator", role: "CEO", profilePic: "/icons/livia.png" },
  { id: 2, name: "Randy Press", role: "Director", profilePic: "/icons/randy.png" },
  { id: 3, name: "Workman", role: "Designer", profilePic: "/icons/workman.png" },
  { id: 4, name: "Sophia Johnson", role: "Manager", profilePic: "/icons/livia.png" },
  { id: 5, name: "John Doe", role: "Intern", profilePic: "/icons/eddy.png" },
];

const QuickTransfer = () => {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [transferAmount, setTransferAmount] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleContactSelect = (id: number) => {
    setSelectedContact(id);
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleSend = () => {
    if (!selectedContact || !transferAmount) {
      alert("Please select a contact and enter an amount to transfer.");
      return;
    }
    alert(`Transferred $${transferAmount} to contact ID: ${selectedContact}`);
  };

  return (
    <section className="quick-transfer p-6 bg-white rounded-lg shadow">
      {/* Contact Carousel */}
      <div className="relative mb-6">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-70 p-1 rounded-full shadow hover:bg-gray-300"
          onClick={handleScrollLeft}
        >
          <span className="text-gray-600 text-lg">{"<"}</span>
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar space-x-4 px-8"
        >
          {frequentContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex-none w-1/3 text-center cursor-pointer"
              onClick={() => handleContactSelect(contact.id)}
            >
              <img
                src={contact.profilePic}
                alt={contact.name}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <p
                className={`font-bold ${
                  selectedContact === contact.id ? "text-blue-500" : "text-black"
                }`}
              >
                {contact.name}
              </p>
              <p
                className={`text-sm ${
                  selectedContact === contact.id ? "text-blue-400" : "text-gray-500"
                }`}
              >
                {contact.role}
              </p>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-70 p-1 rounded-full shadow hover:bg-gray-300"
          onClick={handleScrollRight}
        >
          <span className="text-gray-600 text-lg">{">"}</span>
        </button>
      </div>

      {/* Transfer Input, Text, and Button */}
      <div className="flex items-center justify-between mb-6">
        {/* Write Amount */}
        <p className="text-gray-500 text-sm font-medium w-1/3 text-right">Write Amount</p>

        {/* Input Field with Send Button overlapping */}
        <div className="flex items-center w-2/3 relative">
          <input
            type="number"
            className="w-full m-3 mr-0 p-0 pl-4 pr-16 border border-gray-3 bg-gray-3 rounded-full focus:ring-2 focus:ring-blue-500"
            placeholder="525.50"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          {/* Send Button */}
          <img
            src="/icons/transferbtn.png"
            width={75}
            height={40}
            alt="Send"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-75 h-10 cursor-pointer p-0 m-0"
            onClick={handleSend}
          />
        </div>
      </div>
    </section>
  );
};

export default QuickTransfer;
