import React from 'react';

export default function Warning({ num="", description="" }) {
  return (
    <div className='border border-solid border-red-900 bg-warning-500 rounded-lg pr-16 m-4 p-2 relative'>
      <div className='text-8xl font-bold'>{num}</div>
      <div className='text-3xl'>{description}</div>
      <div className='text-3xl rounded-full bg-red-600 border border-solid w-12 h-12 text-center pt-1 absolute -bottom-4 -right-4'>
        !
      </div>
    </div>
  );
}
