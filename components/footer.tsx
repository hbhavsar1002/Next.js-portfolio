import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; 2024 Harsh Bhavsar. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> build with React & Next.js (App Router & Server Actions), TypeScript, Tailwaind CSS, FRamer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}
