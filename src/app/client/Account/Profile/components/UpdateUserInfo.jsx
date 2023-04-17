import React, { useState } from 'react';
import { Form, Button, Input, Select, DatePicker, notification } from 'antd';
import {format} from 'date-fns';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/services/common';
import moment from 'moment';
import dayjs from 'dayjs';
import _ from 'lodash';
dayjs.locale('vi');
const genderOptions = [
    {label: 'Nam', value: 'Male'},
    {label: 'Nữ', value: 'Female'}
]
export default function UpdateUserInfo({user, userRefetch}) {
    const initValue = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        phone: user?.phone,
        birth_date: dayjs(user?.birth_date),
        gender: user?.gender,
        address: user?.address,
    }
    const [updateInfoForm] = Form.useForm();
    const onSuccess = () => {
        notification.success({message: 'Cập nhật thông tin thành công !'});
        userRefetch();
    }
    const onError = (err) => {
        notification.error({message: err.message || "Cập nhật thông tin thất bại !"});
    }
    const {mutate, isLoading: loading} = useMutation({
        onSuccess: onSuccess,
        onError: onError,
        mutationFn: (body) => updateUser(body)
    })
    const onSubmit = () => {
        const value = updateInfoForm.getFieldsValue();
        const convertDate = dayjs(value.birth_date).toISOString();
        const userDefault = {
            first_name: user?.first_name,
            last_name: user?.last_name,
            email: user?.email,
            phone: user?.phone,
            birth_date: user?.birth_date,
            gender: user?.gender,
            address: user?.address,
        }
        const body = {
            first_name: value.first_name,
            last_name: value.last_name,
            email: value.email,
            phone: value.phone,
            birth_date: convertDate,
            gender: value.gender,
            address: value.address,
        }
        if (_.isEqual(userDefault, body)) {
            notification.warning({message: 'Bạn chưa thay đổi thông tin !'})
        } else {
            mutate(body);
        }
    }
  return (
    <div className='update-info'>
        <Form
            initialValues={initValue}
            layout='vertical'
            form={updateInfoForm}
            onFinish={onSubmit}>
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
                    <Form.Item name={'birth_date'} label='Ngày sinh'>
                            <DatePicker locale={'vi'} format={'DD-MM-YYYY'} placeholder={moment(user?.birth_date).format('DD-MM-YYYY')} />
                    </Form.Item>
                </div>
                <Form.Item name={'address'} label='Địa chỉ' rules={[{required: true, message: "Không được để trống !"}]}>
                    <Input placeholder='Nhập địa chỉ của bạn'/>
                </Form.Item>
                <div className='form-login-option'>
                    <div className='btn-login'>
                        <Button type='primary' htmlType='submit' loading={loading}>{loading ? 'Vui lòng chờ' : 'Cập nhật'}</Button>
                    </div>
                </div>
        </Form>
    </div>
  )
}
