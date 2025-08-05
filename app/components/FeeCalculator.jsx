'use client';

export const runtime = 'edge';

import React, { useState, useEffect } from 'react';

export default function FeeCalculator({ courts = [], loading = false }) {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [selectedClassType, setSelectedClassType] = useState('online');
  const [filteredCourts, setFilteredCourts] = useState([]);
  const [courtFee, setCourtFee] = useState(0);

  const classroomfee = 50.0;
  const onlinefee = 20.0;
  const statefee = 69.0;

  // Filter courts when county changes
  useEffect(() => {
    if (selectedCounty) {
      setFilteredCourts(
        courts.filter(
          (c) => c.county.toLowerCase() === selectedCounty.toLowerCase()
        )
      );
      setSelectedCourt('');
    } else {
      setFilteredCourts([]);
      setSelectedCourt('');
    }
  }, [selectedCounty, courts]);

  // Update court fee when court selection changes
  useEffect(() => {
    if (selectedCourt) {
      const court = filteredCourts.find((c) => c.id === selectedCourt);
      setCourtFee(court ? parseFloat(court.courtfee) : 0);
    } else {
      setCourtFee(0);
    }
  }, [selectedCourt, filteredCourts]);

  const classFee = selectedClassType === 'classroom' ? classroomfee : onlinefee;

  // Calculate fees only if a court is selected
  const showFees = !!selectedCourt;
  const classFeeDisplay = showFees ? classFee : 0;
  const stateFeeDisplay = showFees ? statefee : 0;
  const courtFeeDisplay = showFees ? courtFee : 0;
  const totalDisplay = showFees ? classFee + statefee + (courtFee || 0) : 0;

  return (
    <div className='bg-white/95 backdrop-blur rounded-lg shadow-lg'>
      <div className='p-6'>
        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <svg
              className='animate-spin h-10 w-10 text-blue-600'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v8z'></path>
            </svg>
            <span className='ml-4 text-blue-600 font-semibold text-lg'>
              Loading...
            </span>
          </div>
        ) : (
          <>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              Court & State Fee Calculator
            </h3>
            <p className='text-gray-600 mb-6'>
              Calculate your defensive driving education costs
            </p>

            <div className='space-y-4'>
              {/* County */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Choose County
                </label>
                <select
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  className='text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                  <option value='' className='text-gray-400'>
                    Select county
                  </option>
                  {[...new Set(courts.map((c) => c.county))].map((county) => (
                    <option key={county} value={county}>
                      {county.charAt(0).toUpperCase() + county.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Court */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Choose Court
                </label>
                <select
                  value={selectedCourt}
                  onChange={(e) => setSelectedCourt(e.target.value)}
                  className='text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  disabled={!selectedCounty}>
                  <option value='' className='text-gray-400'>
                    Select court
                  </option>
                  {filteredCourts.map((court) => (
                    <option key={court.id} value={court.id}>
                      {court.courtnumber} - {court.courtname}
                    </option>
                  ))}
                </select>
              </div>

              {/* Class Type */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Course Format
                </label>
                <select
                  value={selectedClassType}
                  onChange={(e) => setSelectedClassType(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                  <option value='online'>Online</option>
                  <option value='classroom'>Classroom</option>
                </select>
              </div>

              {/* Fee Breakdown */}
              <div className='pt-4 border-t'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm text-gray-600'>
                    Arizona DDS Course
                  </span>
                  <span className='font-semibold text-black'>
                    ${classFeeDisplay.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm text-gray-600'>State Fee</span>
                  <span className='font-semibold text-black'>
                    ${stateFeeDisplay.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm text-gray-600'>Court Fee</span>
                  <span className='font-semibold text-black'>
                    ${courtFeeDisplay.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between items-center text-lg font-bold'>
                  <span className='text-black'>Total</span>
                  <span className='text-black'>${totalDisplay.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className='mb-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700'>
              <p className='mb-3'>
                The total cost of our DDS class varies with Court and State
                fees. Provide this free tool with a few details from your
                citation and calculate your total cost today!
              </p>
              <p className='mb-3'>
                <strong>Yikes! That seems high, right?</strong>
              </p>
              <p className='mb-3'>
                Turns out that it's still less than the full cost of your
                ticket, plus you get to avoid points being added to your
                license. Take advantage of this great value and register today!
              </p>
              <p className='text-blue-700 font-medium'>
                If you have any questions, please contact our office at{' '}
                <a
                  href='tel:6232312599'
                  className='underline hover:text-blue-800'>
                  623-231-2599
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
