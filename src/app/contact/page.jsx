import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
    return (
        <div className='container mx-auto flex items-center justify-between  my-12'>
            <div className='w-1/2 ml-36'>
                <Image src='/contact.png' alt="contact image" width={420} height={420} />
            </div>
            <div className="form-control w-1/2 ">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-md" />
                <label className="label">
                    <span className="label-text">What is your email?</span>
                </label>
                <input type="email" placeholder="Type email here" className="input input-bordered w-full max-w-md" />
                <label className="label">
                    <span className="label-text">Your message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 max-w-md" placeholder="Type message here"></textarea>
                <hr className='my-3 max-w-md' />
                <Button url="/" text="Send to me" />

            </div>
        </div>
    )
}

export default Contact