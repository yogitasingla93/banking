"use client" 
import React from 'react'
import { formatAmount } from '@/lib/utils';
import CountUp from 'react-countup';

const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
        
      <CountUp end={amount} 
      decimals= {2}
      duration={3}
      prefix='$'/>
    
  )
}

export default AnimatedCounter
