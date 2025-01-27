"use client";

import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import BankCardSection from '@/components/BankCards';
import RecentTransactions from '@/components/RecentTransactions';
import VerticalBarChart from '@/components/VerticalBarChart';
import PieChart from '@/components/PieChart';
import QuickTransfer from '@/components/QuickTransfer';
import AreaChart from '@/components/AreaChart';

const Dashboard = () => {
  return (
    <div>
      <header className='home-header header-main'>
          <HeaderBox title="Overview" subtext="your complete financial data" />           
        </header>
    <section className='home flex-1 mx-auto p-6 bg-dash'>
      <div className='container'>
        

        {/* First Section */}
        <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mb-15 p-[10]">
          <div className="col-span-2">
            <BankCardSection
              cards={[
                { id: '1', availableBalance: 0, currentBalance: 5756, officialName: '', mask: '1234', institutionId: '', name: 'Eddy Cusuma', type: '', subtype: '', appwriteItemId: '', shareableId: '' },
                { id: '2', availableBalance: 0, currentBalance: 5756, officialName: '', mask: '1234', institutionId: '', name: 'Eddy Cusuma', type: '', subtype: '', appwriteItemId: '', shareableId: '' },
                { id: '3', availableBalance: 0, currentBalance: 5756, officialName: '', mask: '1234', institutionId: '', name: 'Eddy Cusuma', type: '', subtype: '', appwriteItemId: '', shareableId: '' },
              ]}
              userName="Eddys"
            />
          </div>
          <div className="col-span-1">
            <RecentTransactions />
          </div>
        </section>

        {/* Second Section */}
        <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[25] p-[10] bg-dash">
          <div className="col-span-2">
            <h2 className="header-2 text-xl font-semibold mb-4 mt-10">Weekly Activity</h2>
            <VerticalBarChart />
          </div>

          <div className="col-span-1">
            <h2 className="header-2 text-xl font-semibold mb-4 mt-10">Expense Statistics</h2>
            <PieChart />
          </div>
        </section>

        {/* Third Section */}
        <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-[25] p-[10] bg-dash">
          <div className="col-span-2">
            <h2 className="header-2 text-xl font-semibold mb-4 mt-10">Quick Transfer</h2>
            <QuickTransfer />
          </div>

          <div className="col-span-3">
            <h2 className="header-2 text-xl font-semibold mb-4 mt-10">Balance History</h2>
            <AreaChart />
          </div>
        </section>
        
      </div>
    </section>
    </div>
  );
};

export default Dashboard;
