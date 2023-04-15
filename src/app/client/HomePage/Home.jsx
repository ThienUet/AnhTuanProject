import React from 'react'
import HeaderHome from '@/components/Header/HeaderHome';
import Banner from './_component/Banner/Banner';
import MainShow from './_component/MainShow/MainShow';
export default function Home(props) {
  
  return (
    <div className='home-page'>
        <HeaderHome {...props}/>
        <Banner />
        <MainShow />
    </div>
  )
}
