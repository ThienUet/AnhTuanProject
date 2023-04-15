import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Quản lí tài khoản', 'acc-manager', <MailOutlined />, [
    getItem('Thêm người dùng', 'create-acc'),
    getItem('Xem danh sách người dùng', 'view-list-acc'),
  ]),
  getItem('Quản lý sản phẩm', 'product-manager', <AppstoreOutlined />, [
    getItem('Tạo sản phẩm', 'create-product'),
    getItem('Xem danh sách sản phẩm', 'view-list-product'),
  ]),
  getItem('Quản lý loại sản phẩm', 'category-manager', <SettingOutlined />, [
    getItem('Thêm loại sản phẩm', 'create-category'),
    getItem('Xem danh sách loại sản phẩm', 'view-list-category'),
  ]),
  getItem('Quản lý bài viết', 'blog-manager', <SettingOutlined />, [
    getItem('Thêm bài viết', 'create-blog'),
    getItem('Xem danh sách bài viết', 'view-list-blog'),
  ]),
  getItem('Quản lý tin tức', 'news-manager', <SettingOutlined />, [
    getItem('Thêm tin mới', 'create-news'),
    getItem('Xem danh sách tin', 'view-list-news'),
  ]),
];

const LeftMenu = ({currentPage, setCurrentPage}) => {
  const onClick = (e) => {
    setCurrentPage(e.key);
  };
  return (
    <div className='nav-left'>
      <Menu
        defaultOpenKeys={['acc-manager', 'news-manager', 'blog-manager']}
        className='left-menu'
        selectedKeys={[currentPage]}
        onClick={onClick}
        mode="inline"
        items={items}
      />
    </div>
  )
}


  export default LeftMenu;