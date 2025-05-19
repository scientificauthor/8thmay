import Link from 'next/link'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import GlobeIcon from '@/public/assets/icons/_components/GlobeIcon'
import YoutubeIcon from '@/public/assets/icons/_components/youtubeIcon'
import TelegramIcon from '@/public/assets/icons/_components/telegramIcon'
import GotoTop from '@/public/assets/icons/_components/gotoTop'

const Footer = () => {
  return (
    <footer className='rounded-lg py-[18] px-5 sm:px-6 relative'>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="country-info col-span-3">
            <GlobeIcon />
            <span>Turkish</span>
          </div>
          <ul className='col-span-3 sm:col-span-1'>
            <li>
              About Courses
            </li>
            <li>
              <Link href={'/'}>Request Online Course</Link>
            </li>
            <li>
              <Link href={'/'}>Verify (citehub).¹ Certificate</Link>
            </li>
            <li>
              <Link href={'/'}>Help</Link>
            </li>
            <li>
              <Link href={'/'}>Training Events</Link>
            </li>
            <li>
              <Link href={'/'}>Pricing</Link>
            </li>
          </ul>
          <ul className='col-span-3 sm:col-span-1'>
            <li>
              Company
            </li>
            <li>
              <Link href={'/'}>About Us</Link>
            </li>
            <li>
              <Link href={'/'}>References</Link>
            </li>
            <li>
              <Link href={'/'}>News</Link>
            </li>
            <li>
              <Link href={'/'}>Our Crew</Link>
            </li>
            <li>
              <Link href={'/'}>Affiliate Programme</Link>
            </li>
          </ul>
          <ul className='sm:text-end col-span-3 sm:col-span-1'>
            <li>
              Contact
            </li>
            <li>
              <Link href={'/'}>hello@citehub.net</Link>
            </li>
            <li>
              <Link href={'/'}>Fax: +90  212 000 0000</Link>
            </li>
            <li className='sm:w-[200px] ms-auto'>
              <Link href={'/'}>(citehub).¹  Inc.
                Marmara District N17 F5
                34520 Istanbul / Turkiye</Link>
            </li>
            <li>
              <Link href={'/'}>Contact Form</Link>
            </li>
            <li className='absolute bottom-[80] right-[24] sm:static'>
              <Link href={'/'} >
                <span className='inline-block ms-auto'><GotoTop /></span>
                <br />
                <span className='inline-block'>Go To Top</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-3 mt-4">
          <span>
            <Switch defaultChecked />
          </span>
          <div className="flex items-center gap-3">
            <Button variant={'link'} size={'icon'} className='rounded-[50%]'><YoutubeIcon /></Button>
            <Button variant={'link'} size={'icon'} className='rounded-[50%]'><TelegramIcon /></Button>
          </div>
        </div>
        <div className="flex sm:items-center flex-col sm:flex-row justify-between gap-3 mt-4">
          <span className='text-[#A5A5A5] sm:text-white text-xs'>
            <span className='hidden sm:inline'>Copyright</span> © 2025 (citehub).¹ inc <span className='hidden sm:inline'>all rights reserved</span> <Link href={'/'} className='hidden sm:inline'>| Sitemap</Link>
          </span>
          <ul className="flex items-stretch flex-col sm:flex-row gap-3 sm:ms-auto">
            <li className='!pt-0 ps-[14px]'><Link href={'/'} className='text-xs text-nowrap'>Cookie Settings</Link></li>
            <li className='!pt-0 hidden sm:inline'><Separator orientation="vertical" /></li>
            <li className='!pt-0'><Link href={'/'} className='text-xs text-nowrap'>Agreements</Link></li>
            <li className='!pt-0 hidden sm:inline'><Separator orientation="vertical" /></li>
            <li className='!pt-0'><Link href={'/'} className='text-xs text-nowrap'>Terms & Conditions</Link></li>
            <li className='!pt-0 hidden sm:inline'><Separator orientation="vertical" /></li>
            <li className='!pt-0'><Link href={'/'} className='text-xs text-nowrap'>Privacy Policy</Link></li>
            <li className='!pt-0'><Link href={'/'} className='text-xs text-nowrap sm:hidden'>Sitemap</Link></li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-4 mt-6 sm:hidden">
          <div className="flex items-center rounded-lg border px-4 py-2 gap-5 col-span-3">
            <GlobeIcon />
            <span className='text-white'>Turkish</span>
          </div>
          <span>
            <Switch defaultChecked />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer