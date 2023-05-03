import React, { useState } from 'react'
import { Form, Input, InputNumber } from 'antd';
export default function AddProduct() {
  const [addProductForm] = Form.useForm();

  const onSubmit = () => {

  }
  return (
    <div className='add-product'>
      <Form form={addProductForm} onFinish={onSubmit}>
        <Form.Item name='name' label='Tên sản phẩm'>
          <Input placeholder='Điền tên sản phẩm'/>
        </Form.Item>
        <Form.Item name='price' label='Điền giá sản phẩm'>
          <Input placeholder='Điền giá sản phẩm'/>
        </Form.Item>
        <Form.Item name='percent_sale' label='Phần trăm giảm giá'> 
          <Input placeholder='Điền phần trăm giảm giá'/>
        </Form.Item>
        <Form.Item name='quantity' label='Số lượng'>
          <InputNumber />
        </Form.Item>
      </Form>
    </div>
  )
}
