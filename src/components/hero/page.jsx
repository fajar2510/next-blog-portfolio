import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Hero = () => {
    return (

        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <Image src="/spiderman.jpg" className="relative" width={200} height={300} alt='Spiderman' />
                <div>
                    <h1 className="text-5xl font-bold py-1.5">Hi, there! Nice to meet you!</h1>
                    <h2 className='text-3xl font-bold py-1.5'>My name is, Fajar Abdurrohman</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button url="/contact" text="Contact me" />
                </div>
            </div>
        </div>

    )
}

export default Hero