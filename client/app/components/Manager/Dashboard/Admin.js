/*
 *
 * Admin
 *
 */

import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';

import Account from '../../../containers/Account';
import AccountSecurity from '../../../containers/AccountSecurity';
import Address from '../../../containers/Address';
import Order from '../../../containers/Order';
import Users from '../../../containers/Users';
import Category from '../../../containers/Category';
import Product from '../../../containers/Product';
import Brand from '../../../containers/Brand';
import Merchant from '../../../containers/Merchant';
import Review from '../../../containers/Review';
import Wishlist from '../../../containers/WishList';

const Admin = props => {
  return (
    <div className='admin'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Routes>
              <Route path='/dashboard' element={<Account />} />
              <Route path='/dashboard/security' element={<AccountSecurity />} />
              <Route path='/dashboard/address' element={<Address />} />
              <Route path='/dashboard/product' element={<Product />} />
              <Route path='/dashboard/category' element={<Category />} />
              <Route path='/dashboard/brand' element={<Brand />} />
              <Route path='/dashboard/users' element={<Users />} />
              <Route path='/dashboard/merchant' element={<Merchant />} />
              <Route path='/dashboard/orders' element={<Order />} />
              <Route path='/dashboard/review' element={<Review />} />
              <Route path='/dashboard/wishlist' element={<Wishlist />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
