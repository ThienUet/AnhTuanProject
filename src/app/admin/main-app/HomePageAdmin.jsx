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
  const {user} = props;
  const [currentPage, setCurrentPage] = useState('view-list-acc');
  return (
    <div className='admin-home'>
        <HeaderAdmin />
        <div className='main'>
          <LeftMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <div className='right-page'>
            {
              currentPage === 'create-acc' ?
              <AddAccount user={user}/> :
              currentPage === 'view-list-acc' ?
              <ListAccount user={user}/> :
              currentPage === 'create-product' ?
              <AddProduct user={user}/> :
              currentPage === 'view-list-product' ?
              <ListProduct user={user}/> :
              currentPage === 'create-category' ?
              <AddCategory user={user}/> :
              <ListCategory user={user}/>
            }
          </div>
        </div>
        
    </div>
  )
}
