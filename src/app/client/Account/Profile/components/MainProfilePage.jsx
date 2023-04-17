import React from 'react';
import { Image, Button, Tabs } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import moment from 'moment';
import ViewProfile from './ViewProfile';
import UpdateUserInfo from './UpdateUserInfo';
const convertToVn = (value) => {
  if (value === 'admin') {
    return 'Quản trị viên';
  } else {
    return 'Người dùng';
  }
}
const convertStatusToString = (status) => {
  if (status) {
    return 'Tài khoản tạm khóa !'
  } else {
    return 'Hoạt động'
  }
}
export default function MainProfilePage(props) {
  const {user} = props;
  const {userRefetch} = props;
  const items = [
    {
      key: '1',
      label: `Xem thông tin cá nhân`,
      children: <ViewProfile user={user} userRefetch={userRefetch}/>,
    },
    {
      key: '2',
      label: `Chỉnh sửa thông tin cá nhân`,
      children: <UpdateUserInfo user={user} userRefetch={userRefetch} />,
    },
    {
      key: '3',
      label: `Lịch sử thanh toán`,
      children: 'Lịch sử thanh toán',
    },
    {
      key: '4',
      label: `Lịch sử mua hàng`,
      children: 'Lịch sử mua hàng',
    },
  ]
  return (
    <div className='profile'>
      <div className='left-profile'>
        <div className='avatar'>
          <Image preview={{maskClassName: 'custom-preview-mask', mask: <div><i className="fa-solid fa-eye" /> Xem ảnh</div>}} src={user?.avatar ? user.avatar : '/static/images/user-male.png'} alt='image-profile' />
          <div className='upload-image'>
            <Button><i className="fa-solid fa-arrow-up-from-bracket" /> Sửa ảnh</Button>
          </div>
        </div>
        <div className='info-status'>
          <div className='item'>
            <label className='item-name'>{user?.full_name}</label>
          </div>
          <div className='item'>
            <label className='item-date'>Ngày tham gia: {moment(user?.create_date).format('DD-MM-YYYY h:mm:ss a')}</label>
          </div>
          <div className='item'>
            {
              <label className='item-role'>Quyền: <span>{convertToVn(user?.role)}</span></label>
            }
          </div>
          <div className='item'>
            {
              <label className='item-status'>Trạng thái: <span>{convertStatusToString(user?.status)}</span></label>
            }
          </div>
        </div>
      </div>
      <div className='right-profile'>
        <Tabs  items={items} />
      </div>
    </div>
  )
}
