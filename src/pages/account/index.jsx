import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
const ProfilePage = dynamic(() => import('@/app/client/Account/Profile/ProfilePage'), {ssr: false});
export default function Profile(props) {
  const {user} = props;
  if (user)
  return (
    <>
      <Head>
        <title>{user?.full_name ? user?.full_name+" || Cá nhân" : 'Trang cá nhân'}</title>
      </Head>
      <div className='profile-page'>
        <ProfilePage {...props} />
      </div>
    </>
  )
}
