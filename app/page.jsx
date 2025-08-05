'use client';

import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  CheckCircle,
  Shield,
  Smartphone,
  Users,
  Award,
  Lock,
  Car,
  Clock,
  FileText,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
} from 'lucide-react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import api from './utils/backend';
import FeeCalculator from './components/FeeCalculator';

export default function DefensiveDrivingSchool() {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading
    api
      .get('/arizona/courts/')
      .then((res) => {
        console.log('API courts response:', res.data);
        setCourts(res.data);
        setLoading(false); // End loading
      })
      .catch(() => {
        setLoading(false); // End loading even if error
      });
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className='relative overflow-hidden py-20 lg:py-32'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Hero Content */}
            <div className='text-center lg:text-left'>
              <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8'>
                <Shield className='w-5 h-5 text-cyan-400' />
                <span className='text-white/90 text-sm font-medium'>
                  Accredited by the Arizona Supreme Court
                </span>
              </div>

              <h1 className='text-5xl lg:text-7xl font-bold text-white mb-6'>
                Defensive Driving
                <span className='block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  School for Arizona
                </span>
              </h1>

              <p className='text-xl text-white/80 mb-8 max-w-2xl lg:max-w-none'>
                We believe that a key element to safe driving is a positive
                attitude. Our online course is easy and effective! Take now for
                only $20!
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center'>
                <a
                  href='https://lms.ntsi.com/registration/NiSE-AZOL-498'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2'>
                    <span>Start Course Now</span>
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column - Fee Calculator */}
            <div className='relative'>
              <div className='p-6'>
                {loading ? (
                  // 2. Loader UI
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
                  // 3. Render the card only when not loading
                  <FeeCalculator courts={courts} loading={loading} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Why Choose Our Course?
            </h2>
            <p className='text-white/70 text-lg'>
              Everything you need for a successful defensive driving experience
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: CheckCircle,
                title: 'Completing the Course',
                description:
                  'Completing this 4 hr Defensive Course will allow you to dismiss your traffic citation. When you complete the course, we will send your completion certificate to you and the court.',
              },
              {
                icon: Shield,
                title: 'State & Supreme Court Approved',
                description:
                  'This is a Defensive Driving Course that has been approved by the Arizona Supreme Court and is in compliance with all applicable Arizona traffic laws.',
              },
              {
                icon: Lock,
                title: 'Understanding Security',
                description:
                  'We use SSL encryption and other security measures to protect your personal information and ensure a safe online learning environment.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Friendly',
                description:
                  'Our course is fully optimized for mobile devices, tablets, and computers. Take the course anywhere, anytime at your own pace.',
              },
              {
                icon: Users,
                title: 'Expert Support',
                description:
                  'Our customer support team is available to help you with any questions or technical issues you may encounter during the course.',
              },
              {
                icon: Award,
                title: 'Accreditation',
                description:
                  'We are fully accredited and approved by the Arizona Supreme Court to provide defensive driving education courses.',
              },
            ].map((feature, index) => (
              <div key={index} className='group'>
                <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-white/70 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Information Section */}
      <section id='information' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-white mb-4'>
                Course Information
              </h2>
              <p className='text-white/70 text-lg'>
                Everything you need to know about our defensive driving course
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-1 gap-12'>
              <div>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                  Arizona gives you the opportunity to avoid paying your ticket
                  and having the points appear on your Motor Vehicle Record
                  (MVR) for certain violations. The Administrative Office of the
                  Courts (AOC) requires the following:{' '}
                </h3>
                <div className='space-y-4'>
                  {[
                    'The course may only be completed once every 12 months from the date of your last violation.',
                    'A State Fee of $24 and State Surcharge of $45.',
                    'A copy of your citation and your license (or other, government-issued identification) is required to complete the course.',
                    'The course must be completed at least 7 days before your court deadline date.',
                    'Commercial Driver License holders are eligible only if they received their ticket at 09/01/2019 while driving a non-commercial vehicle for non-commercial purposes.',
                    'For more information, please contact the AOC at (888) 334-5565, email them at ddrive@courts.az.gov, or visit their website.',
                    'For classroom courses, we charge a $15 door fee when making your payment the day of the class. This fee is waived when you prepay at the very latest the day before the class. Save money by calling us today at 623-231-2599.',
                    'We reserve the right to charge a $15 processing fee when returning funds to the card you use to purchase this course.',
                  ].map((item, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      <div className='w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0'></div>
                      <p className='text-white/80 leading-relaxed'>{item}</p>
                    </div>
                  ))}
                </div>
                <p className='text-white/80 leading-relaxed'>
                  By completing this course, those who have received eligible
                  moving violations will have the citations dismissed with no
                  repercussions on your driving record.
                </p>
                <p className='text-white/80 leading-relaxed'>
                  * – Plus state and court fees.
                </p>
                <p className='text-white/80 leading-relaxed'>
                  ** – The course must be completed at least 7 days before your
                  court deadline date.
                </p>
              </div>
            </div>

            <div className='text-center mt-12'>
              <a
                href='https://lms.ntsi.com/registration/NiSE-AZOL-498'
                target='_blank'
                rel='noopener noreferrer'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                  TAKE ONLINE COURSE
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-white mb-4'>Contact Us</h2>
            <p className='text-white/70 text-lg'>
              Get in touch with our support team
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Call Us</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                623-231-2599
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Email Us</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                support@nise.co
              </p>
            </div>
            <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <MessageCircle className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Text Us</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                480-999-4396
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affirmation Section */}
      <section id='eligibility' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12'>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
              Affirmation of Eligibility
            </h2>

            <div className='space-y-6 text-white/80 leading-relaxed'>
              <p>
                Affirmation of Eligibility: By Registering for this course, I
                affirm that I am eligible to attend a defensive driving course
                for citation dismissal. I understand that “eligibility” means:
              </p>
              <ul>
                <li>
                  1. I have not attended a defensive driving class for any
                  Arizona citation within 12 months of the date of the citation
                  for which I am now attending. My traffic violation did not
                  result in a collision that killed or seriously injured any
                  person (serious injury defined in ARS 13-105.34).
                </li>
                <li>
                  2. I am not currently registered for nor do I plan to attend
                  any other defensive driving course for citation dismissal
                  until such a time as I am again eligible.
                </li>
                <li>
                  3. I do not possess a Commercial Driver License or, if I do, I
                  was not driving a commercial vehicle at the time of my ticket
                  nor was I driving this vehicle for commercial purposes.
                </li>
                <li>
                  4. I was not cited for a criminal speeding ticket (21 or more
                  miles over the speed limit).
                </li>
                <li>5. I did not receive a DPS photo ticket.</li>
                <li>
                  6. I was not cited for a violation which occurred while
                  operating a commercial motor vehicle that requires a
                  commercial driver license
                </li>
              </ul>

              <ul>
                I understand it is solely my responsibility to affirm my
                eligibility. Learn and Go Traffic School has performed an
                eligibility check as a courtesy to me; however, the results of
                the check are not absolute. If I am later found ineligible to
                attend for this citation, the court will not dismiss the
                citation and all fees paid to attend may not be returned. I
                understand that by attending defensive driving school for this
                citation and having the citation dismissed, I am giving up my
                right to challenge the citation and will be ineligible to attend
                defensive driving school to have future citations dismissed for
                12 months. I understand this dismissal applies to ONLY ONE
                citation. If I have multiple citations, or I am found ineligible
                to attend for this citation, I will resolve those citations with
                the court of jurisdiction.
              </ul>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-12'>
              <a
                href='https://lms.ntsi.com/registration/NiSE-AZCR-EN'
                target='_blank'
                rel='noopener noreferrer'>
                <button className='bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300'>
                  FIND A CLASSROOM
                </button>
              </a>
              <a
                href='https://lms.ntsi.com/registration/NiSE-AZOL-498'
                target='_blank'
                rel='noopener noreferrer'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300'>
                  TAKE ONLINE COURSE
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
