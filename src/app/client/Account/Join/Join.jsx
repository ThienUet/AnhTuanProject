import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Tabs } from 'antd';
import { useRouter } from 'next/router';


const items = [
    {
      key: 'login',
      label: `ĐĂNG NHẬP`,
      children: <Login />,
    },
    {
      key: 'register',
      label: `ĐĂNG KÝ`,
      children: <Register />,
    },
  ];

export default function Join() {
    const router = useRouter();
    console.log(router);
  return (
    <div className='tabs-log-res'>
        <Tabs className='tabs-main' defaultActiveKey={router.query.tab} items={items} />
    </div>
  )
}
