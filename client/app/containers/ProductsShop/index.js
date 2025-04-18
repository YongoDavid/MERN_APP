/**
 *
 * ProductsShop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import actions from '../../actions';
import ProductCard from '../../components/Store/ProductCard';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class ProductsShop extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreProducts();
  }

  render() {
    const { products, isLoading } = this.props;

    if (isLoading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="products-shop">
        <Row>
          {products && products.length > 0 ? (
            products.map(product => (
              <Col xs="12" sm="6" md="4" lg="3" key={product._id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col xs="12">
              <div className="text-center py-5">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading
  };
};

export default connect(mapStateToProps, actions)(ProductsShop); 