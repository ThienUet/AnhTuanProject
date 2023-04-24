import React from 'react'
import { Form, Input, Select, DatePicker, Popover, Button, notification  } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { adminCreateUser } from '@/services/admin';
const initValue = {
  gender: 'Male',
  role: 'sub-admin'
}
const genderOptions = [
  {label: 'Nam', value: 'Male'},
  {label: 'Nữ', value: 'Female'}
]
const roleOption = [
  {label: 'ADMIN - Có quyền quản lý tất cả !', value: 'admin'},
  {label: 'SUB-ADMIN - Chỉ có quyền quản lý người dùng !', value: 'sub-admin'},
  {label: 'CLIENT - Chỉ có quyền người dùng mua bán trên nền tảng !', value: 'client'}
]
export default function AddAccount({user}) {
  const [adminCreateUserForm] = Form.useForm();

  const onSuccess = () => {
    notification.success({message: "Tạo tài khoản thành công !"});
  }
  const onError = (err) => {
    notification.error({message: err.message || "Tạo tài khoản thất bại"});
  }
  const {mutate, isLoading: loading} = useMutation({
    onSuccess: onSuccess,
    onError: onError,
    mutationFn: (body) => adminCreateUser(body)
  })

  const onSubmit = () => {
    const values = adminCreateUserForm.getFieldsValue();
    const body = {
      user_name: values.user_name,
      first_name: values.first_name,
      last_name: values.last_name,
      full_name: values.first_name + ' ' + values.last_name,
      email: values.email,
      phone: values.phone,
      address: values.address,
      password: values.password,
      role: values.role,
      gender: values.gender,
      birth_date: values.birthDate,
      created_by: user?.role + ' ' + user?.full_name,
    }
    mutate(body);
  }
  return (
    <div className='admin-add-account'>
      <Form
            initialValues={initValue}
            layout='vertical'
            form={adminCreateUserForm}
            onFinish={onSubmit}>
                <div className='register-intro'>
                    <label>TẠO TÀI KHOẢN CHO MỘT NGƯỜI DÙNG</label>
                </div>
                <Form.Item name={'user_name'} label='Tên tài khoản' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập tên tài khoản của bạn'/>
                </Form.Item>
                <div className='form-group'>
                    <Form.Item name={'first_name'} label='Họ Đệm' rules={[{required: true, message: "Không được để trống !"}]}>
                        <Input placeholder='Nhập họ và tên đệm của bạn'/>
                    </Form.Item>
                    <Form.Item name={'last_name'} label='Tên' rules={[{required: true, message: "Không được để trống !"}]}>
                        <Input placeholder='Nhập tên của bạn'/>
                    </Form.Item>
                </div>
                <Form.Item name={'email'} label='Email' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập email của bạn'/>
                </Form.Item>
                <Form.Item name={'phone'} label='Số điện thoại' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập số điện thoại của bạn'/>
                </Form.Item>
                <div className='form-group'>
                    <Form.Item name={'gender'} label='Giới tính'>
                        <Select options={genderOptions} />
                    </Form.Item>
                    <Form.Item name={'birthDate'} label='Ngày sinh' rules={[{required: true, message: "Không được để trống !"}]}>
                        <DatePicker />
                    </Form.Item>
                </div>
                <Form.Item name={'address'} label='Địa chỉ' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập địa chỉ của bạn'/>
                </Form.Item>
                <Form.Item name={'role'} label='Quyền'>
                  <Select options={roleOption} />
                </Form.Item>
                <Form.Item name={'password'} label='Mật khẩu' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input.Password placeholder='Nhập mật khẩu của bạn'/>
                </Form.Item>
                <Form.Item name={'re_password'} label='Nhập lại mật khẩu' 
                rules={[
                        {
                          validator: (_, value) => {
                            if (value) {
                              if (value !== adminCreateUserForm.getFieldsValue().password) {
                                return Promise.reject(new Error('Không trùng mật khẩu !'));
                              } else {
                                return Promise.resolve();
                              }
                            } else {
                              return Promise.reject(new Error('Không được để trống'));
                            }
                          },
                        },
                 ]}>
                    <Input.Password placeholder='Nhập lại mật khẩu của bạn'/>
                </Form.Item>
                <div className='form-login-option'>
                    <div className='btn-login'>
                      <Button type='primary' htmlType='submit' loading={loading}>{loading ? 'Vui lòng chờ' : 'Tạo tài khoản'}</Button>
                    </div>
                    <div className='notify'>
                        <label>Version 0.1.0 design by ADMIN</label>
                    </div>
                </div>
        </Form>
    </div>
  )
}
