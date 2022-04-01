import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope,faPhone,faAlignRight, faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedin, faTwitter, faInstagram, faAndroid } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <div className="  bg-[#161c2d] flex flex-col items-center    ">
<div className='w-[90rem]'>
        <div className='flex justify-around pt-14 mb-9 border-b-2 border-[#272B39]'>
            <div className='text-white pb-7 '>
              <div className="text-3xl font-bold w-[27rem] text-center pt-10">
                Ready to launch your project?
              </div>
              <div className=" text-[#aeb0b6] pl-2 w-96 pt-5 mb-28 font-bold">
                Bring your business beyond limited reach and extend it online
                with the help of our professional freaks.
              </div>
            </div>
            <div>
              <button className=" font-bold my-2 rounded-md bg-pink-600 p-4 text-white transition-all hover:-translate-y-3 ">
                Let's Start a Project
              </button>
            </div>
            </div>

            </div>


    <div className='flex justify-center '>
    <div className='w-[100rem] flex justify-evenly mb-20'>
            <div>
            <div className='flex'>
                <div className='text-white m-2'>
               <FontAwesomeIcon icon={faAndroid}/>
                </div>
                <div className='text-white text-2xl'>
                    <a href='/'>
                        Reason
                    </a>
                </div>
            </div>
            <div className='text-[#aeb0b6]  w-96 text-sm mt-3'>
            We are designers, developers, and strategists who handcraft websites and applications with end-to-end online marketing solutions.
            </div>
            <div className='text-white mt-4'>
                <a href='/' className='mx-2'>
                <FontAwesomeIcon className='hover:text-pink-600' icon={faInstagram} />
                </a>
                <a href='/' className='mx-2'>
                <FontAwesomeIcon className='hover:text-pink-600' icon={faFacebook} />
                </a>
                <a href='/' className='mx-2'>
                <FontAwesomeIcon className='hover:text-pink-600' icon={faLinkedin} />
                </a>
                <a href='/' className='mx-2'>
                <FontAwesomeIcon className='hover:text-pink-600' icon={faTwitter} />
                </a>
            </div>
            </div>
            <div>
                <div className='text-[#aeb0b6] font-semibold'>
                    Pages
                </div>
                <div className='flex flex-col pt-3  font-bold text-white '>
                    <a href='/' className='my-2 hover:text-pink-600'>
                        Blog
                    </a>
                    <a href='/' className='my-2 hover:text-pink-600'>
                        Portfolio
                    </a>
                    <a href='/' className='my-2 hover:text-pink-600'>
                        Job Opening
                    </a>
                </div>
            </div>
            <div>
            <div className='text-[#aeb0b6] font-semibold'>
                    Legal
                </div>
                <div className='flex flex-col pt-3  font-bold text-white    '>
                    <a href="/" className='py-2 hover:text-pink-600'>
                    Terms & Conditions
                    </a>
                </div>
            </div>
            <div>
            <div className='text-[#aeb0b6] font-semibold'>
                    Contact
                </div>
                <div className='flex flex-col pt-3  font-bold text-white    '>
                    <div  className='my-1'>
                    <FontAwesomeIcon className='text-pink-600' icon={faSquareEnvelope}/>
                    <a href='/' className='px-2 hover:text-pink-600'>
                    hey@reasonbeyond.com
                    </a>
                    </div>
                    <div className='my-1'>
                    <FontAwesomeIcon className='text-pink-600' icon={faPhone}/>
                    <a href='/' className='px-2 hover:text-pink-600'>
                    +91 89557 08287
                    </a>
                    </div>
                    <div className='my-1'>
                    <FontAwesomeIcon className='text-pink-600' icon={faAlignRight}/>
                    <a href='/' className='px-2 hover:text-pink-600'>
                    More Options
                    </a>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <div className='flex flex-col items-center text-white justify-center font-bold'>
              <div>DESIGNED BY DHANANJAY SENDAY </div>
              <div className='my-4'>
               <FontAwesomeIcon icon={faCopyright}/> Original Design Right reserved with Original Author  of (https://reasonbeyond.com/)
               </div>
          </div>
          </div>
          </>
  )
}

export default Footer