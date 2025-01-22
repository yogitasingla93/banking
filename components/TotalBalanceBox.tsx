import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';
import AreaChart  from './AreaChart'; 
import PieChart from './PieChart';
import BankCard from './BankCards';
import VerticalBarChart from './VerticalBarChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'> 
              Bank Accounts {totalBanks}
            </h2>
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
        <BankCard account={{
        id: '',
        availableBalance: 0,
        currentBalance: 5756,
        officialName: '',
        mask: '1234',
        institutionId: '',
        name: 'Eddy Cusuma',
        type: '',
        subtype: '',
        appwriteItemId: '',
        sharableId: ''
      }} userName={''} />
    </section>
  )
}

export default TotalBalanceBox
