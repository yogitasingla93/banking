import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';
import AreaChart  from './AreaChart'; 
import PieChart from './PieChart';
import BankCard from './BankCards';
import VerticalBarChart from './VerticalBarChart';
import RecentTransactions from './RecentTransactions';
import QuickTransfer from './QuickTransfer';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <QuickTransfer />
    </div>
 
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'> 
              Bank Accounts {totalBanks}
            </h2>
            
        <RecentTransactions />
        </div>

        <div className='flex flex-col gap-2'>
            <div className='total-balance-label'> 
              <VerticalBarChart />
            </div>
            <div className='total-balance-amount flex-center gap-2'> 
              <AnimatedCounter amount={totalCurrentBalance}/>
         
            </div>
        </div>
        <div className='flex flex-col gap-2'>
          <PieChart />
        </div>
        <div className='flex flex-col gap-2'>
          <AreaChart />
        </div>
      
    </section>
  )
}

export default TotalBalanceBox
