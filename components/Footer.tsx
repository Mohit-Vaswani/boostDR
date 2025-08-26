import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-10 mt-20 bg-[#ffd66b] py-16 max-w-6xl border-t-2 border-x-2 rounded-t-2xl border-black mx-auto'>
        <h2 className="specialFont text-4xl font-bold">BoostDR</h2>
        <ul className='flex flex-col sm:flex-row gap-10 justify-center items-center'>
            <li>
                <Link href={`/tc`}>
                Terms & Condition
                </Link>
            </li>
            <li>
                <Link href={`/pp`}>
                Privacy Policy
                </Link>
            </li>
            <li>
                <Link href={`mailto:epictools.io@gmail.com`}>
                Contact
                </Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer