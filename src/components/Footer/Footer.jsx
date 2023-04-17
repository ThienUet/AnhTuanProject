import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-list'>
        <li className='footer-item'>
          <ul className='footer-item-list'>
            <li className='item'>
              <label className='shop-main-name'>Shoes88</label>
              <label className='shop-main-small'>Beuti</label>
            </li>
            <li className='item'>
              <Link href={'#'} className='shop-address'><i className="fa-sharp fa-solid fa-location-dot" />332/7 Hoàng Công Chất - Nam Từ Liêm - Hà Nội</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='shop-phone'><i className="fa-solid fa-phone" />0999.999.999</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='shop-email'><i className="fa-solid fa-envelope" />shoes88@gmail.com</Link>
            </li>
          </ul>
        </li>
        <li className='footer-item'>
          <ul className='footer-item-list'>
            <li className='item'>
              <label className='about-title'>Về chúng tôi </label>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Trang chủ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Giới thiệu</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Sản phẩm</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Tin tức</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Bản đồ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Liên hệ</Link>
            </li>
          </ul>
        </li>
        <li className='footer-item'>
          <ul className='footer-item-list'>
            <li className='item'>
              <label className='about-title'>Dịch vụ </label>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Trang chủ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Giới thiệu</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Sản phẩm</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Tin tức</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Bản đồ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Liên hệ</Link>
            </li>
          </ul>
        </li>
        <li className='footer-item'>
          <ul className='footer-item-list'>
            <li className='item'>
              <label className='about-title'>Liên hệ </label>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Trang chủ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Giới thiệu</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Sản phẩm</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Tin tức</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Bản đồ</Link>
            </li>
            <li className='item'>
              <Link href={'#'} className='link-about'>Liên hệ</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className='break-footer'></div>
      <div className='end-content'>
        <label className='copyright'>
          Designed by PoorDev ver-0.1.0
        </label>
      </div>
    </div>
  )
}
