import React, { useState } from 'react'
import LeftMenu from '../component/LeftMenu'
import HeaderAdmin from '../component/HeaderAdmin'
import AddAccount from '../component/AddAccount';
import ListAccount from '../component/ListAccount';
import AddProduct from '../component/AddProduct';
import ListProduct from '../component/ListProduct';
import AddCategory from '../component/AddCategory';
import ListCategory from '../component/ListCategory';
export default function HomePageAdmin(props) {
  const [currentPage, setCurrentPage] = useState('view-list-acc');
  return (
    <div className='admin-home'>
        <HeaderAdmin />
        <div className='main'>
          <LeftMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <div className='right-page'>
            {
              currentPage === 'create-acc' ?
              <AddAccount /> :
              currentPage === 'view-list-acc' ?
              <ListAccount /> :
              currentPage === 'create-product' ?
              <AddProduct /> :
              currentPage === 'view-list-product' ?
              <ListProduct /> :
              currentPage === 'create-category' ?
              <AddCategory /> :
              <ListCategory />
            }
          </div>
        </div>
        
    </div>
  )
}
