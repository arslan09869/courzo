import React from 'react'
import { Sniglet  } from 'next/font/google';


const font = Sniglet({
  weight: ['400'],
  subsets: ['latin']
})
export default function layout({ children }) {
    return (
        <div className={`${font.className}`}>
            {children}
        </div>
    )
}
