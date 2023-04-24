import React from 'react'
import { useUserList } from '@/query/common'
import { Spinner, Button } from 'react-bootstrap';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
export default function ListAccount() {
  const {data: listUser, isLoading: loading, refetch} = useUserList();
  return (
    <div className='list-account'>
      <label>Danh sách người dùng</label>
      <div className='refresh-list-user'>
        <Button onClick={() => refetch()}>
          <ReloadOutlined />
        </Button>
      </div>
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
          {
            loading ? <Spinner size='large' indicator={<LoadingOutlined />} /> :
            listUser?.map((user, index) => {
             return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user?.full_name}</td>
                <td>{user?.address}</td>
                <td>{user?.role}</td>
                <td>...</td>
              </tr>
             )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
