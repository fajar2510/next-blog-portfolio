

import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (

        <footer class="footer footer-center p-10 bg-textLight text-textDark rounded border-t-2 border-textLight mt-5">
            <div class="grid grid-flow-col gap-4">
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Portfolio</a>
                <a class="link link-hover">Blog</a>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <Image src="/1.png" width={20} height={20} alt="Facebook" />
                    <Image src="/2.png" width={20} height={20} alt="Instagram" />
                    <Image src="/3.png" width={20} height={20} alt="Twitter" />
                    <Image src="/4.png" width={20} height={20} alt="Youtube" />
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Fajar Abdurrohman</p>
            </div>
        </footer>

    )
}

export default Footer