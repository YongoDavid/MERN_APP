/*
 *
 * Brand
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import actions from '../../actions';
import { ROLES } from '../../constants';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Page404 from '../../components/Common/Page404';

class Brand extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <div className='brand-dashboard'>
        <Routes>
          <Route path='/dashboard/brand' element={<List />} />
          <Route path='/dashboard/brand/edit/:id' element={<Edit />} />
          {user.role === ROLES.Admin && (
            <Route path='/dashboard/brand/add' element={<Add />} />
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

export default connect(mapStateToProps, actions)(Brand);
