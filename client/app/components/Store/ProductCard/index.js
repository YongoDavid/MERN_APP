/**
 *
 * ProductCard
 *
 */

import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatCurrency from '../../../utils/formatCurrency';

const ProductCard = ({ product }) => {
  const { _id, name, description, price, images, brand, category } = product;
  const imageUrl = images && images.length > 0 ? images[0].url : '/images/placeholder.jpg';

  return (
    <Card className="product-card h-100">
      <Link to={`/product/${_id}`} className="product-image-link">
        <CardImg
          top
          src={imageUrl}
          alt={name}
          className="product-image"
        />
      </Link>
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5" className="product-title">
          <Link to={`/product/${_id}`} className="text-dark">
            {name}
          </Link>
        </CardTitle>
        <CardText className="product-description text-muted">
          {description && description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </CardText>
        <div className="product-meta mt-2 mb-3">
          {brand && (
            <span className="product-brand mr-2">
              Brand: <Link to={`/shop/brand/${brand.slug}`}>{brand.name}</Link>
            </span>
          )}
          {category && (
            <span className="product-category">
              Category: <Link to={`/shop/category/${category.slug}`}>{category.name}</Link>
            </span>
          )}
        </div>
        <div className="product-footer mt-auto">
          <div className="product-price mb-2">
            <strong>{formatCurrency(price)}</strong>
          </div>
          <Button
            color="primary"
            className="add-to-cart-btn w-100"
            onClick={() => {
              // Add to cart functionality will be implemented later
              console.log('Add to cart:', _id);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductCard; 