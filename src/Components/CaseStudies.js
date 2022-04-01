import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CaseStudies() {
  return (
    <div className='pt-44 flex items-center flex-col pb-24'>
         <div className="text-[#F64B4B] font-bold tracking-wide">
         CASE STUDIES
            </div>
            <div className="text-3xl font-bold w-[27rem] text-center pt-8">
            Our imaginative and creative work describes why we stand out from the crowd.
        </div>
        <div className='pt-24'>
            <div className='flex mb-28'>
                <div className='mx-32'>
            <div>
                <a href='/'>
                Website Development
                </a>
            </div>
            <div className='font-bold text-xl'>
            SK Children Foundation
            </div>
            </div>
            <div className='mx-32'>
            <div>
            <a href='/'>
                Consultation | Digital Marketing
                </a>
            </div>
            <div className='font-bold text-xl'>
            purusaini.xyz
            </div>
            </div>
            </div>
            <div className='flex mb-28'>
                <div className='mx-32'>
            <div>
            <a href='/'>
                Website Development | Digital Marketing
                </a>
            </div>
            <div className='font-bold text-xl'>
            Our Innovation
            </div>
            </div>
            <div className='mx-32'>
            <div>
            <a href='/'>
                Website Development
                </a>
            </div>
            <div className='font-bold text-xl'>
            Scelebration
            </div>
            </div>
            </div>
        </div>
        <div className='text-[#473BF0] font-bold '>
            <a href='/'>     
See all works <FontAwesomeIcon icon={faArrowRight}/>
            </a>
        </div>
    </div>
  )
}

export default CaseStudies