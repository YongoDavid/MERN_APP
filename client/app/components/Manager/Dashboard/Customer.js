/*
 *
 * Customer
 *
 */

import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';

import { isProviderAllowed } from '../../../utils/app';
import Account from '../../../containers/Account';
import AccountSecurity from '../../../containers/AccountSecurity';
import Address from '../../../containers/Address';
import Order from '../../../containers/Order';
import Wishlist from '../../../containers/WishList';

const Customer = props => {
  const { user } = props;

  return (
    <div className='customer'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Routes>
              <Route path='/dashboard' element={<Account />} />
              {!isProviderAllowed(user.provider) && (
                <Route path='/dashboard/security' element={<AccountSecurity />} />
              )}
              <Route path='/dashboard/address' element={<Address />} />
              <Route path='/dashboard/orders' element={<Order />} />
              <Route path='/dashboard/wishlist' element={<Wishlist />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Customer;
