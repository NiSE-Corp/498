'use client';

export const runtime = 'edge';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Use specific phone number for the 100-dollar-classroom-registration page
  const phoneNumber =
    pathname === '/100-dollar-classroom-registration'
      ? '5202846338'
      : '6232312599';
  const displayPhoneNumber =
    pathname === '/100-dollar-classroom-registration'
      ? '520-284-6338'
      : '623-231-2599';

  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between py-2'>
          <div className='flex items-center justify-between h-16 w-full'>
            <Link href='/'>
              <img
                src='/logo.png'
                alt='ATSI Logo'
                className='h-12 md:h-14 lg:h-20 w-auto rounded transition-all duration-300'
              />
            </Link>

            <button
              className={`lg:hidden flex items-center px-2 py-1 border rounded-lg text-gray-700 border-gray-300 bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                menuOpen ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle menu'>
              <svg
                className='h-7 w-7'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>

            {/* Desktop nav */}
            <div className='hidden lg:flex items-center w-full'>
              <div className='flex items-center ml-auto space-x-6'>
                <a
                  href='#information'
                  className='text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded hover:bg-blue-50'>
                  Information
                </a>
                {pathname !== '/100-dollar-classroom-registration' && (
                  <a
                    href='#eligibility'
                    className='text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded hover:bg-blue-50'>
                    Eligibility
                  </a>
                )}
                <a
                  href='#contact'
                  className='px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet menu (shown when menuOpen) */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
          <nav className='flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4 border border-gray-100'>
            <a
              href='#information'
              className='text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 rounded hover:bg-blue-50'>
              Information
            </a>
            {pathname !== '/100-dollar-classroom-registration' && (
              <a
                href='#eligibility'
                className='text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 rounded hover:bg-blue-50'>
                Eligibility
              </a>
            )}

            {/* Contact info for mobile */}
            <div className='flex flex-col space-y-1 mt-2 text-gray-600 text-sm'>
              <a
                href={`tel:${phoneNumber}`}
                className='text-blue-600 hover:underline'>
                <svg
                  className='inline h-4 w-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                {displayPhoneNumber}
              </a>
              <a
                href='mailto:support@nise.co'
                className='text-blue-600 hover:underline'>
                <svg
                  className='inline h-4 w-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                support@nise.co
              </a>
              <a
                href='sms:480-999-4396'
                className='text-blue-600 hover:underline'>
                <svg
                  className='inline h-4 w-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'
                  />
                </svg>
                Text: 480-999-4396
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
