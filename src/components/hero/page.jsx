import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Hero = () => {
    return (

        <div className="hero">

            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <div className='md:w-1/3 flex'>
                    <Image src="/spiderman.jpg" className="relative" width={200} height={300} alt='Spiderman' />
                </div>

                <div className='md:w-2/3 flex flex-col'>
                    <div className='flex container mb-1.5 max-w-sm'>
                        <div className='container px-1.5 py-2 rounded-bl-lg rounded-tl-lg bg-[#BE8779]'></div>
                        <div className='container px-1.5 py-2 bg-[#D5B5A6]'></div>
                        <div className='container px-1.5 py-2 bg-[#BFCDCB]'></div>
                        <div className='container px-1.5 py-2 bg-[#5A6E6F]'></div>
                        <div className='container px-1.5 py-2 rounded-br-lg rounded-tr-lg bg-[#2C3842]'></div>

                    </div>
                    <h1 className="text-5xl font-bold py-1.5">Hi, there! Nice to meet you!</h1>
                    <h2 className='text-3xl font-bold py-1.5'>My name is, Fajar Abdurrohman</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus minima soluta illum?
                    </p>
                    <Button url="/contact" text="Contact me" />
                </div>
            </div>
        </div>

    )
}

export default Hero