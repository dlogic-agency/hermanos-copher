'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ReUsableComponents/Button'

export const Home = () => {

  const myOnclick = function() {
    console.log("Hola mundo!")
  }

  return (
    <div className='relative'>
      <Image
        src="/images/Banner-Copher.png"
        alt='background picture'
        width={1440}
        height={779}
        className='h-[90vh] w-[1440px] absolut top-0 left-0'
        priority={true}
      />
      <Button
        text='Cotizar mi repuesto'
        className='bottom-[20%] left-[10%] absolute bg-hc-blue text-slate-100 '
        onClick={myOnclick}
      />
    </div>
  )
}
