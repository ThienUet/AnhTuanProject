import { login } from '@/services/common';
import {authenticateUser} from '@/storage/Auth';
import { Form, Input, Button, notification } from 'antd'
import Link from 'next/link';
import React, {useState} from 'react';

export default function Login() {
    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const callBackResult = (result, user) => {
        if (result) {
            if (user?.role === 'admin' || user?.role === 'sub-admin') {
                window.location.replace('/admin');
            } else {
                window.location.replace('/');
            }
        } else {
            notification.error({message: 'Đăng nhập thất bại !'})
        }
    }
    const onSubmit = async() => {
        const value = loginForm.getFieldsValue();
        const _body = {
            user_name: value.user_name,
            password: value.password
        }
        setLoading(true);
        await login(_body).then(({data}) => {
            if (data.token) {
                authenticateUser(data.token);
                setLoading(false);
                callBackResult(!!data.token, data.user);
            } 
        }).catch(err => {
            console.log(err);
            setLoading(false);
            notification.error({ message: 'Sai tài khoản hoặc mật khẩu !'});
        });
    }
  return (
    <div className='mix-form'>
        <Form 
            form={loginForm}
            onFinish={onSubmit}>
            <div className='register-intro'>
                <label>Chào mừng bạn quay lại với Shoes88</label>
            </div>
            <Form.Item name={'user_name'} label='Tài khoản' rules={[{required: true, message: 'Không được để trống !'}]}>
                <Input placeholder='Đăng nhập bằng số điện thoại hoặc email'/>
            </Form.Item>
            <Form.Item name={'password'} label='Mật khẩu' rules={[{required: true, message: 'Không được để trống !'}]}>
                <Input.Password placeholder='Nhập mật khẩu của bạn'/>
            </Form.Item>
            <div className='form-login-option'>
                <div className='option'>
                    <Link href={'#'}>Quên mật khẩu ?</Link>
                </div>
                <div className='btn-login'>
                    <Button loading={loading} disabled={loading} type='primary' htmlType='submit'>Đăng nhập</Button>
                </div>
            </div>
        </Form>
    </div>
  )
}
