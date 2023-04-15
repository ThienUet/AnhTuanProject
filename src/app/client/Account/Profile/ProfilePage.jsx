import React from 'react'
import HeaderHome from '@/components/Header/HeaderHome';
import MainProfilePage from './components/MainProfilePage';
export default function ProfilePage(props) {
  return (
    <>
        <HeaderHome {...props} />
        <MainProfilePage {...props} />
    </>
  )
}
