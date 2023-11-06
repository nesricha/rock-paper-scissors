import Image from 'next/image'
import { Inter } from 'next/font/google'
import OptionsComp from '@/components/OptionsComp'
import HeadComp from '@/components/HeadComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div className='bg-yellow-500 py-10'>
    <HeadComp />

    <OptionsComp />
  </div>)
}
