import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
  return (
    <div className='vw-100 vh-100 d-flex justify-content-center align-items-center flex-column'>
    <h1 className='fw-bold font-style text-light m-2'>Nucoating.com</h1>
    <h3 className=' font-style text-light m-2 mb-5'>Loading ....</h3>
          <svg width={0} height={0}>
            <defs>
              <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e01cd5" />
                <stop offset="100%" stopColor="#1CB5E0" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress size={'8rem'} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </div>
  );
}