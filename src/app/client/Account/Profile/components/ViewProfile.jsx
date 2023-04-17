import React from 'react';
import moment from 'moment';
const convertToVn = (value) => {
    if (value === "Male") {
        return 'Nam'
    } else {
        return 'Nữ'
    }
}
export default function ViewProfile({user}) {
  return (
    <div className='view-profile'>
        <table className='table'>
            <tbody>
                <tr>
                    <td className='property'>
                        Tên
                    </td>
                    <td>{user?.full_name}</td>
                </tr>
                <tr>
                    <td className='property'>
                        Ngày sinh
                    </td>
                    <td>{moment(user?.birth_date).format('DD-MM-YYYY')}</td>
                </tr>
                <tr>
                    <td className='property'>
                        Giới tính
                    </td>
                    <td>{convertToVn(user?.gender)}</td>
                </tr>
                <tr>
                    <td className='property'>
                        Địa chỉ
                    </td>
                    <td>{user?.address}</td>
                </tr>
                <tr>
                    <td className='property'>
                        Email
                    </td>
                    <td>{user?.email}</td>
                </tr>
                <tr>
                    <td className='property'>
                        Điện thoại
                    </td>
                    <td>{user?.phone}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
