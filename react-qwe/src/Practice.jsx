import React, { useState } from 'react';

const Practice = () => {

  let sum = 0

  function getDigitsSum(num) {
    num.toString().split('').forEach(digit => sum += Number(digit));
  }
  
  getDigitsSum(1233)

  return (
    <div>
      {sum}    
    </div>
  )
    
};

export default Practice;