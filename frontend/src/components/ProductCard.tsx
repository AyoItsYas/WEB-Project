import {Product} from '../../types';

import styles from './ProductCard.module.scss';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.ProductCard}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
