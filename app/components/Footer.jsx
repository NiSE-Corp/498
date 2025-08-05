'use client';

export const runtime = 'edge';

import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  // Use specific phone number for the 100-dollar-classroom-registration page
  const phoneNumber =
    pathname === '/100-dollar-classroom-registration'
      ? '520-284-6338'
      : '623-231-2599';

  return (
    <footer className='flex-none w-full flex items-start pt-0 px-0 flex-col pb-0 bg-gray-900'>
      <div className='flex-none w-full flex items-start pt-[50px] px-20 flex-col pb-[50px]'>
        {/* Logo and Company Info */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-6 w-full'>
          <div className='flex-shrink-0'>
            <a href='/' className='hover:opacity-80 transition-opacity'>
              <img
                src='/logo.png'
                alt='Logo'
                className='h-30 w-auto object-contain'
              />
            </a>
          </div>

          {/* Policies Section */}
          <div className='text-white text-sm'>
            <h4 className='font-semibold text-white mb-2'>Policies</h4>
            <ul className='space-y-1'>
              <li>
                <a
                  href='/policies/privacy'
                  className='hover:text-[#fdc400] transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/policies/cookies'
                  className='hover:text-[#fdc400] transition-colors'>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href='/policies/acceptable-use'
                  className='hover:text-[#fdc400] transition-colors'>
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a
                  href='/policies/returns'
                  className='hover:text-[#fdc400] transition-colors'>
                  Returns Policy
                </a>
              </li>
              <li>
                <a
                  href='/policies/app-privacy'
                  className='hover:text-[#fdc400] transition-colors'>
                  App Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/policies/terms'
                  className='hover:text-[#fdc400] transition-colors'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='text-white text-sm'>
            <h4 className='font-semibold text-white mb-2'>Contact Us</h4>
            <p className='mb-1'>
              <a
                href='mailto:support@nise.co'
                className='hover:text-[#fdc400] transition-colors'>
                support@nise.co
              </a>
            </p>
            <p>
              <a
                href={`tel:${phoneNumber.replace(/-/g, '')}`}
                className='hover:text-[#fdc400] transition-colors'>
                {phoneNumber}
              </a>
            </p>
            <p>
              <a
                href='sms:480-999-4396'
                className='hover:text-[#fdc400] transition-colors'>
                Text Us: 480-999-4396
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='flex-none w-full h-[100px] flex items-center  border justify-center border-t border-l-0 border-r-0 border-b-0'>
        <span className='text-white'>
          Copyright © 2025 Arizonans for Better Driving.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
