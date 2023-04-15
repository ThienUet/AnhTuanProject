import React from 'react'

export default function ListAccount() {
  return (
    <div className='list-account'>
      <label>Danh sách người dùng</label>
      <table className='table'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người dùng</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Xóm Liều - Thôn Say Rượu</td>
            <td>Người dùng</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
