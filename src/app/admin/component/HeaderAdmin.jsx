import AvatarCustom from '@/components/CustomImage/AvatarCustom'
import Link from 'next/link'
import React from 'react'

export default function HeaderAdmin() {
  return (
    <div className='header-admin'>
        <ul className='logo-list'>
            <li className='logo-item'>
                <Link href={'/admin'}>
                    <div className='logo'>
                        Shoes88
                    </div>
                    <div className='header-sig'>
                        Beauti Admin
                    </div>
                </Link>
            </li>
        </ul>
        <ul className='list-left'>
            <li className='item-left'>
                Thông báo
            </li>
            <li className='item-left'>
                Thông báo
            </li>
            <li className='item-left'>
                <AvatarCustom />
            </li>
        </ul>
    </div>
  )
}
