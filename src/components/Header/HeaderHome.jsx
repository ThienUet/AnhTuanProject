import Link from 'next/link';
import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {deAuthenticateUser} from '../../storage/Auth'
const HeaderItem = {
  content: {
    content: 'Shoes88 ',
    sig: 'Beauti'
  },
  head: [
    {label: `0999.999.999`, plus: <i className="fa-solid fa-phone" style={{color: '#35c0c5'}}/> , link: '#'},
    {label: "Tài khoản", plus: <i className="fa-solid fa-user" style={{color: '#35c0c5'}}/>, link: '/account/join'},
    {label: '', plus: <i className="fa-solid fa-cart-shopping" style={{color: '#35c0c5'}}/>, link: '#', cart: true}
  ],
  component: [
    {label: 'Trang Chủ', link: '/'},
    {label: 'Giới thiệu', link: "#"},
    {label: 'Sản phẩm', link: "#", dropDown: true},
    {label: 'Tin tức', link: "#"},
    {label: 'Bản đồ', link: "#"},
    {label: 'Liên hệ', link: "#"},
  ]
}


const items = [
  {
    key: '1',
    label: (
      <Link href="https://www.antgroup.com">
        1st menu item
      </Link>
    ),
  },
];

const itemsUser = {
  items: [
    {
      key: '1',
      label: <Link href={'/account'}>Trang cá nhân</Link>,
    },
    {
      key: '2',
      label: <div onClick={() => {deAuthenticateUser(); window.location.replace('/')}}>Đăng xuất</div>,
    },
  ]
}

export default function HeaderHome(props) {
  const {user} = props;
  if (user) {
    HeaderItem.head.splice(1, 1, {label: '', plus: <Avatar size="small" icon={<UserOutlined />} />, link: '#', dropDown: true});
  }
  return (
    <div className='header'>
      <div className='header-head'>
        <ul className='header-list-logo'>
          <li className='header-item'>
          <Link href={'/'}> 
              <div className='logo'>
                {HeaderItem.content.content}
              </div>
              <div className='header-sig'>
                {HeaderItem.content.sig}
              </div>
            </Link>
          </li>
        </ul>
        <ul className='header-list-element'>
          {
            HeaderItem.head?.map((item, index) => {
              return (
                <div  key={index}>
                  {
                    item.dropDown ? 
                    <li className='header-item'>
                      <div className='element'>
                          <Dropdown menu={itemsUser}>
                              <label>{item.plus}</label>
                          </Dropdown>
                      </div>
                    </li>
                    : 
                    <li className='header-item'>
                      <div className='element'>
                        <Link href={item.link}>{item.plus} {item.label}</Link>
                        {
                          item.cart && <div className='item-in-cart'>0</div>
                        }
                      </div>
                    </li>
                  }
                </div>
              )
            })
          }
        </ul>
      </div>
      <div className='header-component'>
        <ul className='component-list'>
          {
            HeaderItem.component?.map((item, index) => {
              return (
               <div key={index}>
                {
                  item.dropDown ?
                  (<li className='component-item'>
                      <Link href={item.link}>
                          <Dropdown menu={{ items }}>
                              <label>{item.label}</label>
                          </Dropdown>
                      </Link>
                  </li>) 
                  : 
                  (<li className='component-item'>
                    <Link href={item.link}>
                      {item.label} 
                    </Link>
                  </li>)
                }
               </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
