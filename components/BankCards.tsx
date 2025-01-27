"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatAmount } from '@/lib/utils';

// Make sure to import the Account type if it's in another file
// import { Account } from './path-to-your-account-type';

interface BankCardSectionProps {
  cards: Account[]; // cards should be of type Account[]
  userName: string;
}

const BankCardSection: React.FC<BankCardSectionProps> = ({
  cards = [],
  userName = '',
}) => {
  const topCards = cards.slice(0, 2); // Top two visible cards
  const hiddenCards = cards.slice(2); // Cards beyond the first two

  return (
    <section className="flex flex-col lg:flex-row mx-auto bg-gray-100 rounded-lg">
      {/* Cards Section */}
      <div className="flex-1">
        {/* Section Heading */}
        <div className="flex justify-between items-center p-5">
          <h2 className="text-xl font-bold text-gray-800">My Cards</h2>
          <Link href="/all-cards" className="text-blue-600 text-sm font-semibold hover:underline">
            See All
          </Link>
        </div>

        {/* Render Top Two Cards */}
        <div className="flex flex-col sm:flex-row sm:gap-5 px-5 gap-5 sm:w-full">
          {topCards.map((card, index) => (
            <Link
              key={index}
              href={`/transaction-history/?id=${card.appwriteItemId}`}
              className={`flex flex-col justify-between p-5 rounded-lg w-full sm:w-[300px] h-[180px] ${index === 1
                ? 'bg-gradient-to-r from-light-blue cc-white to-blue-500 text-gray-900'
                : 'bg-gradient-to-r from-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 text-white to-black text-white'
                }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">Balance</p>
                  <p className="text-lg font-bold">{formatAmount(card.currentBalance)}</p>
                </div>
                <Image
                  src={index === 1 ? '/icons/Chip_Card_dark.png' : '/icons/Chip_Card.png'}
                  width={50}
                  height={20}
                  alt="Chip"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm">
                  Card Holder: <br />
                  <span>{card.name}</span>
                </p>
                <p className="text-sm">
                  Valid Thru: <br />
                  <span>●● / ●●</span>
                </p>
              </div>
              <div className={`flex justify-between items-center mt-4 ${index === 1 ? 'border-t-gray-2' : 'card-bottom-dark'}`}>
                <p className="text-base">
                  ●●●● ●●●● ●●●● <span className="font-bold">{card.mask}</span>
                </p>
                <Image
                  src={index === 1 ? '/icons/cardLogoWht.svg' : '/icons/cardlogo.svg'}
                  width={40}
                  height={25}
                  alt="Card Logo"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Hidden Cards Section (Horizontal Scroll, Hidden Toward Right) 
        {hiddenCards.length > 0 && (
          <div className="flex gap-5 px-5 mt-4 overflow-x-auto no-scrollbar">
            {hiddenCards.map((account, index) => (
              <Link
                key={index}
                href={`/transaction-history/?id=${account.appwriteItemId}`}
                className="relative flex flex-col justify-between p-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg w-[300px] h-[180px] shrink-0"
              >
                <div>
                  <h1 className="text-lg font-semibold">{account.name}</h1>
                  <p className="font-black">{formatAmount(account.currentBalance)}</p>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between">
                    <p className="text-sm">{userName}</p>
                    <p className="text-sm">●● / ●●</p>
                  </div>
                  <p className="text-base font-semibold tracking-wide">
                    ●●●● ●●●● ●●●● <span className="text-lg">{account?.mask}</span>
                  </p>
                </div>
                <div className="absolute bottom-2 right-2 flex items-center">
                  <Image src="/icons/Paypass.svg" width={20} height={24} alt="Paypass" />
                  <Image
                    src="/icons/mastercard.svg"
                    width={45}
                    height={32}
                    alt="Mastercard"
                    className="ml-4"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}*/}
      </div>
    </section>
  );
};

export default BankCardSection;
