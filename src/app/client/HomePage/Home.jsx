import React from 'react'
import HeaderHome from '@/components/Header/HeaderHome';
import Banner from './_component/Banner/Banner';
import MainShow from './_component/MainShow/MainShow';
import Footer from '@/components/Footer/Footer';
import { Button, Input } from 'antd';
import { getDataTest } from '@/services/common';
export default function Home(props) {
  const [text, setText] = React.useState('');
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  const takeContent = async() => {
    getDataTest({text});
  }
  return (
    <div className='home-page'>
        <HeaderHome {...props}/>
        <Banner />
        <MainShow />
        <Footer />
        <Input value={text} onChange={onChangeText}/>
        <Button onClick={takeContent}>Lấy link</Button>
    </div>
  )
}
