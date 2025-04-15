/*
 *
 * Order
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { ROLES } from '../../constants';
import actions from '../../actions';
import List from './List';
import Customer from './Customer';
import Page404 from '../../components/Common/Page404';

class Order extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <div className='product-dashboard'>
        <Routes>
          <Route exact path='/dashboard/orders' element={<List />} />
          {user.role === ROLES.Admin && (
            <Route
              exact
              path='/dashboard/orders/customers'
              element={<Customer />}
            />
          )}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user
  };
};

export default connect(mapStateToProps, actions)(Order);