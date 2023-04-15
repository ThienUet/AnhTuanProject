import { DatePicker, Form, Input, Select, Button, Checkbox, notification, Popover } from 'antd'
import React, { useState } from 'react'
import { register } from '@/services/common';
import { useRouter } from 'next/router';
const genderOptions = [
    {label: 'Nam', value: 'Male'},
    {label: 'Nữ', value: 'Female'}
]
const initValue = {
    gender: 'Male'
}
export default function Register() {
    const [registerForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    const router = useRouter();
    const onChangeAccept = (e) => {
        setBtnActive(e.target.checked);
    }
    const onSubmit = async() => {
        const value = registerForm.getFieldsValue();
        const body = {
            user_name: value.user_name,
            first_name: value.first_name,
            last_name: value.last_name,
            full_name: value.first_name + ' ' + value.last_name,
            email: value.email,
            phone: value.phone,
            address: value.address,
            password: value.password,
            gender: value.gender,
            birth_date: value.birthDate,
        }
        setLoading(true);
        await register(body).then(() => {
            notification.success({message: 'Đăng ký thành công, vui lòng đăng nhập !'});
            setLoading(false);
            router.push({pathname: '/account/join', params: { tab: 'login' }});
        }).catch((error) => {
            setLoading(false);
            notification.error({message: error.message})
        })

    }
  return (
    <div className='mix-form'>
        <Form
            initialValues={initValue}
            layout='vertical'
            form={registerForm}
            onFinish={onSubmit}>
                <div className='register-intro'>
                    <label>Chào mừng bạn tham gia với Shoes88</label>
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
                    <Form.Item name={'gender'} label='Giới tính' rules={[{required: true, message: "Không được để trống !"}]}>
                            <Select options={genderOptions} />
                    </Form.Item>
                    <Form.Item name={'birthDate'} label='Ngày sinh' rules={[{required: true, message: "Không được để trống !"}]}>
                            <DatePicker />
                    </Form.Item>
                </div>
                <Form.Item name={'address'} label='Địa chỉ' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập địa chỉ của bạn'/>
                </Form.Item>
                <Form.Item name={'password'} label='Mật khẩu' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input.Password placeholder='Nhập mật khẩu của bạn'/>
                </Form.Item>
                <Form.Item name={'re_password'} label='Nhập lại mật khẩu' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập lại mật khẩu của bạn'/>
                </Form.Item>
                <div className='form-login-option'>
                    <div className='option'>
                        <Checkbox onChange={onChangeAccept}>Tôi đã đồng ý với điều khoản của Shoe88 đặt ra</Checkbox>
                    </div>
                    <div className='btn-login'>
                        {
                            !btnActive ?
                            <Popover content={<div className='alert-pop-over'>Bạn phải chấp nhận điều khoản của chúng tôi !</div>}>
                                <Button disabled type='primary' htmlType='submit' >{'Đăng ký'}</Button>
                            </Popover> :
                            <Button type='primary' htmlType='submit' loading={loading}>{loading ? 'Vui lòng chờ' : 'Đăng ký'}</Button>
                        }
                    </div>
                    <div className='notify'>
                        <label>Version 0.1.0 design by ADMIN</label>
                    </div>
                </div>
        </Form>
    </div>
  )
}
