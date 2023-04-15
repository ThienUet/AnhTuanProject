import dynamic from 'next/dynamic';
import React from 'react';
const AdminPage = dynamic(() => import('@/app/admin/main-app/HomePageAdmin.jsx'), {ssr: false});
export default function Index(props) {
  return (
    <div className='admin-home-page'>
      <AdminPage {...props}/>
    </div>
  )
}
