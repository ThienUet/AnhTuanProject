import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const JoinPage = dynamic(() => import('@/app/client/Account/Join/Join'), {ssr: false});
export default function JoinPageMain(props) {
  const {user} = props;
  const router = useRouter();
  if (user) {
    router.push({pathname: '/account'})
  }

  return (
    <>
      <Head>
        <title>Đăng nhập/Đăng ký</title>
      </Head>
      <div className='log-res-table'>
        <JoinPage />
      </div>
    </>
  )
}
