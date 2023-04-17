import React from 'react'
import HeaderHome from '@/components/Header/HeaderHome';
import MainProfilePage from './components/MainProfilePage';
export default function ProfilePage(props) {
  const {user} = props;
  console.log(user);
  return (
    <>
        <HeaderHome {...props} />
        <MainProfilePage {...props} />
    </>
  )
}
