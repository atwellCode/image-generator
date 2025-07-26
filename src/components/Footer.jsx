import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.logo} alt="" width={150} />
      <p className='flex text-sm text-gray-500 max-sm:hidden'>Copyright atwellcode | All Rights Reserved</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt={assets.facebook_icon} width={35} />
        <img src={assets.twitter_icon} alt={assets.twitter_icon} width={35} />
        <img src={assets.instagram_icon} alt={assets.instagram_icon} width={35} />
      </div>
    </div>
  )
}

export default Footer
