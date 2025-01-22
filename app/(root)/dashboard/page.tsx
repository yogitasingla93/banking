import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Dashboard = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox title="Dashboard" />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks = {1}
          totalCurrentBalance={1250.35}/>
          
        </header>
        
      </div>
    </section>
  );
};

export default Dashboard;
