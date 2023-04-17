import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import React from 'react';
const AdminPage = dynamic(() => import('@/app/admin/main-app/HomePageAdmin.jsx'), {ssr: false});
const iconLoad = (
  <LoadingOutlined />
)
export default function Index(props) {
  const {isLoading} = props;
  const {user} = props;
  const toHomePage = () => {
    window.location.replace('/');
  }
 if (isLoading) {
  return <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Spin size='large' indicator={iconLoad}/>
        </div>
 } else {
  if (user?.role === 'admin')
  return (
    <div className='admin-home-page'>
      <AdminPage {...props}/>
    </div>
  )
  else {
    return <div className='notice-not-admin'>
      <label>Xin lỗi ! Bạn không có quyền ADMIN để truy cập !</label>
      <p>Tài khoản của bạn chỉ có quyền người dùng được tự do mua sắm trên nền tảng, Nếu muốn làm quản trị viên
        Hãy liên hệ với ADMIN !
      </p>
      <Button onClick={toHomePage}>Về trang chủ</Button>
    </div>
  }
 }
}
